import {followers} from './AristRelatedModels/followers';
import {geners} from './AristRelatedModels/geners';
import {images} from './AristRelatedModels/images';
import {ImagesObject} from './AristRelatedModels/ImagesObject';
// @ts-ignore
import {External_urls} from './AristRelatedModels/External_urls';

export class ArtistResponseModel {
  constructor(
    external_urls: Array<External_urls>,
    followers: Array<followers>,
    geners: Array<geners>,
    href: string,
    id: string,
    images: Array<ImagesObject>,
    name: string,
    popularity: string,
    type: string,
    uri: string
  ) {
    this.external_urls = external_urls;
    this.followers = followers;
    this.geners = geners;
    this.href = href;
    this.id = id;
    this.images = images;
    this.name = name;
    this.popularity = popularity;
    this.type = type;
    this.uri = uri;
  }
  external_urls !: Array<External_urls>;
  followers !: Array<followers>;
  geners !: Array<geners>;
  href !: string;
  id !: string;
  images !: Array<ImagesObject>;
  name !: string;
  popularity !: string;
  type !: string;
  uri !: string;
}
