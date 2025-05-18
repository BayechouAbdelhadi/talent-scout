import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./auth/user.entity";

@Entity({ name: "videos" })
export class Video {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.videos)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  title: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column()
  url: string;

  @Column()
  thumbnailUrl: string;

  @Column({ type: "integer" })
  duration: number;

  @Column({ type: "simple-array", nullable: true })
  tags: string[];

  @Column({ type: "jsonb", default: "[]" })
  skills: VideoSkill[];

  @Column({ default: 0 })
  views: number;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: false })
  featured: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// VideoSkill type for the jsonb column
export interface VideoSkill {
  skill: string;
  timestamp: number;
  rating?: number;
}