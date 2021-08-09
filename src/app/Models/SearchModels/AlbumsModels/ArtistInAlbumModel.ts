// @ts-ignore
import {External_urls} from '../AristRelatedModels/External_urls';

export class ArtistInAlbumModel {
  constructor(
    external_urls : Array<External_urls>,
    href : string,
    id : string,
    name : string,
    type : string,
    uri : string,
  ) {
    this.external_urls = external_urls;
    this.href = href;
    this.id = id;
    this.name = name;
    this.type = type;
    this.uri = uri;
  }
  external_urls !: Array<External_urls>;
  href !: string;
  id !: string;
  name !: string;
  type !: string;
  uri !: string;
}
