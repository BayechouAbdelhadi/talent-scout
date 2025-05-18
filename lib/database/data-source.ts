import "reflect-metadata";
import { DataSource } from "typeorm";
import { 
  User, 
  Account, 
  Session, 
  VerificationToken,
  PlayerProfile,
  ScoutProfile,
  Video,
  Endorsement,
  Message,
  TrialInvitation,
  ScoutShortlist
} from "./entities";

// Initialize TypeORM data source
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: parseInt(process.env.DATABASE_PORT || "5432"),
  username: process.env.DATABASE_USERNAME || "postgres",
  password: process.env.DATABASE_PASSWORD || "postgres",
  database: process.env.DATABASE_NAME || "talentspot",
  synchronize: process.env.NODE_ENV !== "production",
  logging: process.env.NODE_ENV !== "production",
  entities: [
    User,
    Account,
    Session,
    VerificationToken,
    PlayerProfile,
    ScoutProfile,
    Video,
    Endorsement,
    Message,
    TrialInvitation,
    ScoutShortlist
  ],
  migrations: ["lib/database/migrations/*.ts"],
  subscribers: [],
});

let initialized = false;

export async function getDataSource() {
  if (!initialized && !AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    initialized = true;
    console.log("Database connection initialized");
  }

  return AppDataSource;
}