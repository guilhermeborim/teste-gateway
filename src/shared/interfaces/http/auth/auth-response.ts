import { UserInterface } from "../../user";

export interface AuthResponse {
  userData: UserInterface;
  token: string;
}
