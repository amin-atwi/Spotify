export class AccessTokenModel {
  constructor(access_token: string, token_type: string, scopes: string, expires_in: string, refresh_token: string) {
    this.access_token = access_token;
    this.token_type = token_type;
    this.scopes = scopes;
    this.expires_in = expires_in;
    this.refresh_token = refresh_token;
  }
  access_token !: string;
  token_type  !: string;
  scopes  !: string;
  expires_in  !: string;
  refresh_token  !: string;
}

