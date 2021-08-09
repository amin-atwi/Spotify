import {Injectable} from '@angular/core';
import proxyconfig from '../../../proxyconfig.json';
import {_URL} from '../Constants/Constants';
import {SearchModelInput} from '../../Models/SearchModels/SearchModelInput';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchResponseGeneralModel} from '../../Models/SearchModels/SearchResponseGeneralModel';


@Injectable({
  providedIn: 'root'
})
export class SearchServiceAPI {

  Header = {};
  readonly search!: string;
  readonly albums!: string;
  constructor(
    private http: HttpClient
  ) {
    this.search = proxyconfig['/api'].searchApi + _URL.search;
    this.albums = proxyconfig['/api'].searchApi + '/artists/';
  }

  SetHeader(): void {
    this.Header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      })
    };
  }
  SearchArtist(searchModel: SearchModelInput): Observable<SearchResponseGeneralModel> {
    this.SetHeader();
    let url = this.search + '?q=' + searchModel.artistName + '&type=' + searchModel.type + '&offset=' + searchModel.offset + '&limit=' + searchModel.limit;
    return this.http.get<any>(url, this.Header);
  }
  SearchArtistByUrl(url: string): Observable<SearchResponseGeneralModel> {
    this.SetHeader();
    return this.http.get<any>(url, this.Header);
  }

  GetArtistAlbums(id: string): Observable<any> {
    this.SetHeader();
    return this.http.get<any>(this.albums + id + '/albums', this.Header)
  }
  GetArtistAlbumsByUrl(url: string): Observable<any> {
    this.SetHeader();
    return this.http.get<any>(url, this.Header)
  }
}
