import {ImagesObject} from '../AristRelatedModels/ImagesObject';
// @ts-ignore
import {External_urls} from '../AristRelatedModels/External_urls';
import {ArtistInAlbumModel} from './ArtistInAlbumModel';

export class AlbumsResponseModel {
  constructor(
    album_group : string,
    album_type : string,
    artists : Array<ArtistInAlbumModel>,
    available_markets : Array<string>,
    external_urls : External_urls,
    href : string,
    id : string,
    images : Array<ImagesObject>,
    name : string,
    release_date : string,
    release_date_precision : string,
    total_tracks : string,
    type : string,
    uri : string,
  ) {
    this.album_group = album_group;
    this.album_type = album_type;
    this.artists = artists;
    this.available_markets = available_markets;
    this.external_urls = external_urls;
    this.href = href;
    this.id = id;
    this.images = images;
    this.name = name;
    this.release_date = release_date;
    this.release_date_precision = release_date_precision;
    this.total_tracks = total_tracks;
    this.type = type;
    this.uri = uri;
  }
  album_group !: string;
  album_type !: string;
  artists !: Array<ArtistInAlbumModel>;
  available_markets !: Array<string>;
  external_urls !: External_urls;
  href !: string;
  id !: string;
  images !: Array<ImagesObject>;
  name !: string;
  release_date !: string;
  release_date_precision !: string;
  total_tracks !: string;
  type !: string;
  uri !: string;

}
