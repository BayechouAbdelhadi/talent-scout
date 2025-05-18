import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany } from "typeorm";
import { PlayerProfile } from "../player-profile.entity";
import { ScoutProfile } from "../scout-profile.entity";
import { Video } from "../video.entity";
import { Endorsement } from "../endorsement.entity";
import { Message } from "../message.entity";
import { ScoutShortlist } from "../scout-shortlist.entity";
import { UserRole } from "@/lib/definitions";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  emailVerified: Date;

  @Column({ nullable: true })
  image: string;

  @Column({ 
    type: "enum", 
    enum: ["player", "scout", "admin"],
    default: "player"
  })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => PlayerProfile, (profile) => profile.user, {
    nullable: true,
    cascade: true,
  })
  playerProfile: PlayerProfile;

  @OneToOne(() => ScoutProfile, (profile) => profile.user, {
    nullable: true,
    cascade: true,
  })
  scoutProfile: ScoutProfile;

  @OneToMany(() => Video, (video) => video.user)
  videos: Video[];

  @OneToMany(() => Endorsement, (endorsement) => endorsement.player)
  receivedEndorsements: Endorsement[];

  @OneToMany(() => Endorsement, (endorsement) => endorsement.endorser)
  givenEndorsements: Endorsement[];

  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @OneToMany(() => Message, (message) => message.receiver)
  receivedMessages: Message[];

  @OneToMany(() => ScoutShortlist, (shortlist) => shortlist.scout)
  shortlists: ScoutShortlist[];
}