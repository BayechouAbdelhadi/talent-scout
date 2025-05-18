import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1716000000000 implements MigrationInterface {
  name = "InitialSchema1716000000000";

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create users table
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "email" character varying NOT NULL UNIQUE,
        "name" character varying,
        "emailVerified" TIMESTAMP,
        "image" character varying,
        "role" character varying NOT NULL DEFAULT 'player',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
      )
    `);

    // Create accounts table
    await queryRunner.query(`
      CREATE TABLE "accounts" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "userId" uuid,
        "type" character varying NOT NULL,
        "provider" character varying NOT NULL,
        "providerAccountId" character varying NOT NULL,
        "refresh_token" character varying,
        "access_token" character varying,
        "expires_at" integer,
        "token_type" character varying,
        "scope" character varying,
        "id_token" character varying,
        "session_state" character varying,
        CONSTRAINT "FK_accounts_users" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE
      )
    `);

    // Create sessions table
    await queryRunner.query(`
      CREATE TABLE "sessions" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "sessionToken" character varying NOT NULL UNIQUE,
        "userId" uuid NOT NULL,
        "expires" TIMESTAMP NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "FK_sessions_users" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE
      )
    `);

    // Create verification tokens table
    await queryRunner.query(`
      CREATE TABLE "verification_tokens" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "token" character varying NOT NULL,
        "identifier" character varying NOT NULL,
        "expires" TIMESTAMP NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now()
      )
    `);

    // Create player_profiles table
    await queryRunner.query(`
      CREATE TYPE player_position AS ENUM (
        'goalkeeper', 'right-back', 'left-back', 'center-back', 
        'defensive-midfielder', 'central-midfielder', 'attacking-midfielder', 
        'right-winger', 'left-winger', 'striker'
      );
      
      CREATE TYPE foot_preference AS ENUM ('left', 'right', 'both');
      
      CREATE TABLE "player_profiles" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "userId" uuid NOT NULL UNIQUE,
        "firstName" character varying NOT NULL,
        "lastName" character varying NOT NULL,
        "dateOfBirth" DATE NOT NULL,
        "nationality" character varying NOT NULL,
        "position" player_position NOT NULL,
        "secondaryPosition" player_position,
        "preferredFoot" foot_preference NOT NULL,
        "height" integer NOT NULL,
        "weight" integer NOT NULL,
        "currentTeam" character varying,
        "bio" text NOT NULL,
        "achievements" text[],
        "availableForTrials" boolean NOT NULL DEFAULT false,
        "willingToRelocate" boolean NOT NULL DEFAULT false,
        "views" integer NOT NULL DEFAULT 0,
        "rating" decimal(3,1) NOT NULL DEFAULT 0,
        "verified" boolean NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "FK_player_profiles_users" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE
      )
    `);

    // Create scout_profiles table
    await queryRunner.query(`
      CREATE TABLE "scout_profiles" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "userId" uuid NOT NULL UNIQUE,
        "organization" character varying NOT NULL,
        "role" character varying NOT NULL,
        "bio" text NOT NULL,
        "website" character varying,
        "verified" boolean NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "FK_scout_profiles_users" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE
      )
    `);

    // Create videos table
    await queryRunner.query(`
      CREATE TABLE "videos" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "userId" uuid NOT NULL,
        "title" character varying NOT NULL,
        "description" text,
        "url" character varying NOT NULL,
        "thumbnailUrl" character varying NOT NULL,
        "duration" integer NOT NULL,
        "tags" text[],
        "skills" jsonb NOT NULL DEFAULT '[]',
        "views" integer NOT NULL DEFAULT 0,
        "likes" integer NOT NULL DEFAULT 0,
        "featured" boolean NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "FK_videos_users" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE
      )
    `);

    // Create endorsements table
    await queryRunner.query(`
      CREATE TYPE endorser_role AS ENUM ('player', 'scout', 'coach');
      
      CREATE TABLE "endorsements" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "playerId" uuid NOT NULL,
        "endorserId" uuid NOT NULL,
        "endorserRole" endorser_role NOT NULL,
        "relationship" character varying NOT NULL,
        "skills" text[] NOT NULL,
        "comment" text NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "FK_endorsements_player" FOREIGN KEY ("playerId") REFERENCES "users" ("id") ON DELETE CASCADE,
        CONSTRAINT "FK_endorsements_endorser" FOREIGN KEY ("endorserId") REFERENCES "users" ("id") ON DELETE CASCADE
      )
    `);

    // Create messages table
    await queryRunner.query(`
      CREATE TABLE "messages" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "senderId" uuid NOT NULL,
        "receiverId" uuid NOT NULL,
        "content" text NOT NULL,
        "read" boolean NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "FK_messages_sender" FOREIGN KEY ("senderId") REFERENCES "users" ("id") ON DELETE CASCADE,
        CONSTRAINT "FK_messages_receiver" FOREIGN KEY ("receiverId") REFERENCES "users" ("id") ON DELETE CASCADE
      )
    `);

    // Create trial_invitations table
    await queryRunner.query(`
      CREATE TYPE trial_status AS ENUM ('pending', 'accepted', 'declined');
      
      CREATE TABLE "trial_invitations" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "scoutId" uuid NOT NULL,
        "playerId" uuid NOT NULL,
        "date" TIMESTAMP NOT NULL,
        "location" character varying NOT NULL,
        "details" text NOT NULL,
        "status" trial_status NOT NULL DEFAULT 'pending',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "FK_trial_invitations_scout" FOREIGN KEY ("scoutId") REFERENCES "users" ("id") ON DELETE CASCADE,
        CONSTRAINT "FK_trial_invitations_player" FOREIGN KEY ("playerId") REFERENCES "users" ("id") ON DELETE CASCADE
      )
    `);

    // Create scout_shortlists table
    await queryRunner.query(`
      CREATE TYPE shortlist_status AS ENUM ('watching', 'contacted', 'trial-invited', 'declined', 'signed');
      
      CREATE TABLE "scout_shortlists" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "scoutId" uuid NOT NULL,
        "playerId" uuid NOT NULL,
        "notes" text,
        "rating" decimal(2,1) NOT NULL DEFAULT 0,
        "status" shortlist_status NOT NULL DEFAULT 'watching',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "FK_scout_shortlists_scout" FOREIGN KEY ("scoutId") REFERENCES "users" ("id") ON DELETE CASCADE,
        CONSTRAINT "FK_scout_shortlists_player" FOREIGN KEY ("playerId") REFERENCES "users" ("id") ON DELETE CASCADE
      )
    `);

    // Create unique constraint for scout-player combination in shortlists
    await queryRunner.query(`
      ALTER TABLE "scout_shortlists" ADD CONSTRAINT "UQ_scout_player" UNIQUE ("scoutId", "playerId")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop tables in reverse order of creation to avoid foreign key constraints
    await queryRunner.query(`DROP TABLE "scout_shortlists"`);
    await queryRunner.query(`DROP TABLE "trial_invitations"`);
    await queryRunner.query(`DROP TABLE "messages"`);
    await queryRunner.query(`DROP TABLE "endorsements"`);
    await queryRunner.query(`DROP TABLE "videos"`);
    await queryRunner.query(`DROP TABLE "scout_profiles"`);
    await queryRunner.query(`DROP TABLE "player_profiles"`);
    await queryRunner.query(`DROP TABLE "verification_tokens"`);
    await queryRunner.query(`DROP TABLE "sessions"`);
    await queryRunner.query(`DROP TABLE "accounts"`);
    await queryRunner.query(`DROP TABLE "users"`);

    // Drop custom types
    await queryRunner.query(`DROP TYPE "shortlist_status"`);
    await queryRunner.query(`DROP TYPE "trial_status"`);
    await queryRunner.query(`DROP TYPE "endorser_role"`);
    await queryRunner.query(`DROP TYPE "foot_preference"`);
    await queryRunner.query(`DROP TYPE "player_position"`);
  }
}