import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/database/prisma";
import * as z from "zod";

const signUpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["player", "scout"]),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = signUpSchema.parse(json);

    // Check if email exists
    const exists = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (exists) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        hashedPassword,
        role: body.role.toUpperCase() as "PLAYER" | "SCOUT",
      },
    });

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input data", details: error.issues },
        { status: 400 }
      );
    }

    // Check if it's a Prisma error
    if (error instanceof Error && error.message.includes("prisma")) {
      return NextResponse.json(
        { error: "Database error. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
