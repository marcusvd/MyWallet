import { IdTokenResult, User, UserInfo, UserMetadata } from "firebase/auth";

export class UserDto implements User {
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: UserMetadata;
  providerData: UserInfo[];
  refreshToken: string;
  tenantId: string;
  delete(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getIdToken(forceRefresh?: boolean): Promise<string> {
    throw new Error("Method not implemented.");
  }
  getIdTokenResult(forceRefresh?: boolean): Promise<IdTokenResult> {
    throw new Error("Method not implemented.");
  }
  reload(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  toJSON(): object {
    throw new Error("Method not implemented.");
  }
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  providerId: string;
  uid: string;
  email: string;
  password: string;
}
