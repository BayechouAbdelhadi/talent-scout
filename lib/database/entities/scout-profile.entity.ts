import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./auth/user.entity";

@Entity({ name: "scout_profiles" })
export class ScoutProfile {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.scoutProfile)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  organization: string;

  @Column()
  role: string;

  @Column({ type: "text" })
  bio: string;

  @Column({ nullable: true })
  website: string;

  @Column({ default: false })
  verified: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}