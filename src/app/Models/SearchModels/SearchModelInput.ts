export class SearchModelInput {
  constructor(artistName: string, type: string, limit: string, offset: string) {
    this.artistName = artistName;
    this.type = type;
    this.limit = limit;
    this.offset = offset;
  }
  artistName !: string;
  type !: string;
  limit !: string;
  offset !: string;
}
