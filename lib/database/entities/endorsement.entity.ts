import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { User } from "./auth/user.entity";

@Entity({ name: "endorsements" })
export class Endorsement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  playerId: string;

  @ManyToOne(() => User, (user) => user.receivedEndorsements)
  @JoinColumn({ name: "playerId" })
  player: User;

  @Column()
  endorserId: string;

  @ManyToOne(() => User, (user) => user.givenEndorsements)
  @JoinColumn({ name: "endorserId" })
  endorser: User;

  @Column({ 
    type: "enum", 
    enum: ["player", "scout", "coach"] 
  })
  endorserRole: string;

  @Column()
  relationship: string;

  @Column({ type: "simple-array" })
  skills: string[];

  @Column({ type: "text" })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;
}