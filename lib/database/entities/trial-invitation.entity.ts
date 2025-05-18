import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { User } from "./auth/user.entity";

@Entity({ name: "trial_invitations" })
export class TrialInvitation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  scoutId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "scoutId" })
  scout: User;

  @Column()
  playerId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "playerId" })
  player: User;

  @Column({ type: "timestamp" })
  date: Date;

  @Column()
  location: string;

  @Column({ type: "text" })
  details: string;

  @Column({ 
    type: "enum", 
    enum: ["pending", "accepted", "declined"],
    default: "pending" 
  })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}