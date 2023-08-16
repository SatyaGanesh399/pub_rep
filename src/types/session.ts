export interface Session {
  id?: number;
  name?: string;
  sessionDate?: string;
  sessionTime?: string;
  sessionType?: "online" | "offline";
  sessionStatus?: "booked" | "na";
  sessionLink?: string;
  sessionLinkPassword?: string;
  sessionLocation?: string;
}
