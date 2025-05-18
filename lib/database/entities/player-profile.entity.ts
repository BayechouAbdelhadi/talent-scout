import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./auth/user.entity";
import { PlayerPosition } from "@/lib/definitions";

@Entity({ name: "player_profiles" })
export class PlayerProfile {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.playerProfile)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: "date" })
  dateOfBirth: Date;

  @Column()
  nationality: string;

  @Column({ 
    type: "enum", 
    enum: [
      "goalkeeper", "right-back", "left-back", "center-back", 
      "defensive-midfielder", "central-midfielder", "attacking-midfielder", 
      "right-winger", "left-winger", "striker"
    ] 
  })
  position: PlayerPosition;

  @Column({ 
    type: "enum", 
    enum: [
      "goalkeeper", "right-back", "left-back", "center-back", 
      "defensive-midfielder", "central-midfielder", "attacking-midfielder", 
      "right-winger", "left-winger", "striker"
    ],
    nullable: true
  })
  secondaryPosition: PlayerPosition | null;

  @Column({ 
    type: "enum", 
    enum: ["left", "right", "both"] 
  })
  preferredFoot: string;

  @Column({ type: "integer" })
  height: number;

  @Column({ type: "integer" })
  weight: number;

  @Column({ nullable: true })
  currentTeam: string;

  @Column({ type: "text" })
  bio: string;

  @Column({ type: "simple-array", nullable: true })
  achievements: string[];

  @Column({ default: false })
  availableForTrials: boolean;

  @Column({ default: false })
  willingToRelocate: boolean;

  @Column({ default: 0 })
  views: number;

  @Column({ type: "decimal", precision: 3, scale: 1, default: 0 })
  rating: number;

  @Column({ default: false })
  verified: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}