import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./auth/user.entity";

@Entity({ name: "scout_shortlists" })
export class ScoutShortlist {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  scoutId: string;

  @ManyToOne(() => User, (user) => user.shortlists)
  @JoinColumn({ name: "scoutId" })
  scout: User;

  @Column()
  playerId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "playerId" })
  player: User;

  @Column({ type: "text", nullable: true })
  notes: string;

  @Column({ type: "decimal", precision: 2, scale: 1, default: 0 })
  rating: number;

  @Column({ 
    type: "enum", 
    enum: ["watching", "contacted", "trial-invited", "declined", "signed"],
    default: "watching" 
  })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}