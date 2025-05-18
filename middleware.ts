import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { languages } from "./lib/translations";

export function middleware(request: NextRequest) {
  // Get the language from query parameter
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get("lang");

  // Create response
  const response = NextResponse.next();

  // Set language header if valid language is provided
  if (lang && languages.includes(lang as any)) {
    response.headers.set("x-language", lang);
  } else {
    response.headers.set("x-language", "en"); // Default to English
  }

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
