export class FirstCallForAuthModel {
  constructor(client_id: string, redirect_uri: string, scopes: string) {
    this.client_id = client_id;
    this.redirect_uri = redirect_uri;
    this.scopes = scopes;
  }
  client_id !: string;
  redirect_uri  !: string;
  scopes  !: string;
}

