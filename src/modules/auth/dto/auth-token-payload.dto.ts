/**
 *
 */
export class AuthTokenPayload {
  id: number;
  email: string;
  exp?: number;
}

/**
 *
 */
export class AuthTokenPayloadValidate {
  info: AuthTokenPayloadValidateInfo;
  expiration?: Date;
}

/**
 *
 */
export class AuthTokenPayloadValidateInfo {
  id: number;
  email: string;
}
