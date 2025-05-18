// User roles
export type UserRole = 'player' | 'scout' | 'admin';

// User model
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// Player profile
export interface PlayerProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  nationality: string;
  position: PlayerPosition;
  secondaryPosition?: PlayerPosition;
  preferredFoot: 'left' | 'right' | 'both';
  height: number; // in cm
  weight: number; // in kg
  currentTeam?: string;
  bio: string;
  achievements: string[];
  availability: PlayerAvailability;
  views: number;
  rating: number;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Player positions
export type PlayerPosition = 
  | 'goalkeeper'
  | 'right-back'
  | 'left-back'
  | 'center-back'
  | 'defensive-midfielder'
  | 'central-midfielder'
  | 'attacking-midfielder'
  | 'right-winger'
  | 'left-winger'
  | 'striker';

// Player availability
export interface PlayerAvailability {
  availableForTrials: boolean;
  willingToRelocate: boolean;
  availableDays: string[]; // e.g., ['monday', 'wednesday']
  locationPreferences: string[]; // e.g., ['London', 'Manchester']
}

// Player stats
export interface PlayerStats {
  id: string;
  playerId: string;
  pace: number; // 1-100
  shooting: number; // 1-100
  passing: number; // 1-100
  dribbling: number; // 1-100
  defending: number; // 1-100
  physical: number; // 1-100
  technicalSkills: number; // 1-100
  tacticalAwareness: number; // 1-100
  createdAt: Date;
  updatedAt: Date;
}

// Video
export interface Video {
  id: string;
  playerId: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  duration: number; // in seconds
  tags: string[];
  skills: VideoSkill[];
  views: number;
  likes: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Video skills
export interface VideoSkill {
  skill: string; // e.g., "shooting", "passing", "dribbling"
  timestamp: number; // timestamp in the video where skill is demonstrated
  rating?: number; // optional rating given by peers or scouts
}

// Endorsement
export interface Endorsement {
  id: string;
  playerId: string;
  endorserId: string; // ID of player or scout who gave the endorsement
  endorserRole: 'player' | 'scout' | 'coach';
  relationship: string; // e.g., "teammate", "coach", "opponent"
  skills: string[]; // e.g., ["pace", "shooting", "leadership"]
  comment: string;
  createdAt: Date;
}

// Scout profile
export interface ScoutProfile {
  id: string;
  userId: string;
  organization: string;
  role: string;
  verified: boolean;
  bio: string;
  website?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Scout saved players/shortlist
export interface ScoutShortlist {
  id: string;
  scoutId: string;
  playerId: string;
  notes: string;
  rating: number; // scout's personal rating
  status: 'watching' | 'contacted' | 'trial-invited' | 'declined' | 'signed';
  createdAt: Date;
  updatedAt: Date;
}

// Message
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

// Trial invitation
export interface TrialInvitation {
  id: string;
  scoutId: string;
  playerId: string;
  date: Date;
  location: string;
  details: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: Date;
  updatedAt: Date;
}

// Skill competition
export interface SkillCompetition {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  skillType: string;
  rules: string;
  prizesDescription: string;
  participants: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Competition entry
export interface CompetitionEntry {
  id: string;
  competitionId: string;
  playerId: string;
  videoId: string;
  votes: number;
  scoutRating: number;
  rank?: number;
  createdAt: Date;
  updatedAt: Date;
}