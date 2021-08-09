import {AlbumsResponseModel} from './AlbumsResponseModel';
export class GeneralAlbumsResponseModel {
  constructor(
              href : string,
              items : Array<AlbumsResponseModel>,
              limit : string,
              next: string,
              offset : string,
              previous : string,
              total :string
            ) {
                this.href = href;
                this.items = items;
                this.limit = limit;
                this.next = next;
                this.offset = offset;
                this.previous = previous;
                this.total = total
            }
  href !: string;
  items !: Array<AlbumsResponseModel>;
  limit !: string;
  next !: string;
  offset !: string;
  previous !: string;
  total !: string;
}
