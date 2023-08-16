import { Session } from "./session";

export interface User {
  name?: string;
  phone?: string;
  email: string;
  password?: string;
  age?: string;
  classval?: string;
  school?: string;
  gender?: string;
  dateofbirth?: string;
  city?: string;
  fathername?: string;
  mothername?: string;
  package?: string;
  journey?: string[];
  sessions?: Session[];
  report?: string;
  avatar?: string;
  updatedAt?: string;
  guidedtour?: boolean;
  testResults? : {};
}
