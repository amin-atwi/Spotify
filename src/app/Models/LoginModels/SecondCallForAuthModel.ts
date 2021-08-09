export class SecondCallForAuthModel {
  constructor(client_id: string, client_secret: string, grant_type: string, code: string, redirect_uri: string) {
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.grant_type = grant_type;
    this.code = code;
    this.redirect_uri = redirect_uri;
  }
  client_id !: string;
  client_secret  !: string;
  grant_type  !: string;
  code  !: string;
  redirect_uri  !: string;
}

