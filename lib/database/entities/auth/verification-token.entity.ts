import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity({ name: "verification_tokens" })
export class VerificationToken {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  token: string;

  @Column()
  identifier: string;

  @Column()
  expires: Date;

  @CreateDateColumn()
  createdAt: Date;
}