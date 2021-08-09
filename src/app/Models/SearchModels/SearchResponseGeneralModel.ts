// @ts-ignore
import {SearchResponseModel} from './SearchRespxonseModel';

export class SearchResponseGeneralModel {
  constructor(
    artists: SearchResponseModel,

  ) {
    this.artists = artists;
  }
  artists !: SearchResponseModel;
}
