import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import proxyconfig from '../../../../proxyconfig.json';
import {SettingsFacade} from '../../../Abstraction/settingsFacade';
import {SecondCallForAuthModel} from '../../../Models/LoginModels/SecondCallForAuthModel';
import {ModalService} from '../../../Core/Services/ModalService';
import {SearchModelInput} from '../../../Models/SearchModels/SearchModelInput';
// @ts-ignore
import {SearchResponseModel} from "../../../Models/SearchModels/SearchResponseModel";
import {SearchResponseGeneralModel} from '../../../Models/SearchModels/SearchResponseGeneralModel';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {ArtistResponseModel} from '../../../Models/SearchModels/ArtistResponseModel';
import {GeneralAlbumsResponseModel} from '../../../Models/SearchModels/AlbumsModels/GeneralAlbumsResponseModel';
import {AlbumsResponseModel} from '../../../Models/SearchModels/AlbumsModels/AlbumsResponseModel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [NgbRatingConfig]
})
export class PostsComponent implements OnInit {

  href!: string;
  code!: string;
  ArtistName!: string;
  SearchModelInput!: SearchModelInput;
  Response!: SearchResponseGeneralModel;
  SearchResponseModel!: SearchResponseModel;
  GeneralAlbumsResponseModel!: GeneralAlbumsResponseModel;
  rating !:number;
  ShowArtists !: boolean;
  ArtistModel !: ArtistResponseModel;
  constructor(
    public settingsFacade: SettingsFacade,
    private modalService: ModalService,
    private router: Router,
    config: NgbRatingConfig
  ) {
    this.settingsFacade.SetModalService(this.modalService);
    config.max = 5;
    config.readonly = true;
    this.ShowArtists = true;
  }

  ngOnInit(): void {
    this.SearchModelInput = new SearchModelInput(this.ArtistName ,'artist','20','0' );
    this.rating = 4;
  }
  closeModal(id: string): void {
    this.modalService.close(id);
  }
  OnTextChange(event: Event): void {
    if(this.ArtistName.length != 0){
      this.SearchModelInput.artistName = this.ArtistName;
      this.settingsFacade.SearchForArtist
      (
        this.SearchModelInput
      )
        .subscribe(
          (response: SearchResponseGeneralModel): void  => {
            this.ShowArtistsResult(response.artists);
          }
        );
    }
  }
  ShowArtistsResult(Response: SearchResponseGeneralModel): void  {
     var centerDiv = document.getElementById("CenterDiv");
     // @ts-ignore
    centerDiv.style.top = "10%";
    this.SearchResponseModel = Response;
  }
  GetArtistsNext(url: string): void  {
    this.settingsFacade.SearchForArtistByUrl
    (
      this.SearchResponseModel.next
    )
    .subscribe(
      (response: SearchResponseGeneralModel) => {
        this.ShowArtistsResult(response.artists);
      }
    );
  }
  GetArtistsPrevious(url: string): void {
    this.SearchModelInput.artistName = this.ArtistName;
    this.settingsFacade.SearchForArtistByUrl
    (
      this.SearchResponseModel.previous
    )
      .subscribe(
        (response: SearchResponseGeneralModel) => {
          this.ShowArtistsResult(response.artists);
        }
      );
  }
  GetAlbums(artistResponseModel: ArtistResponseModel) {
      this.ShowArtists = false;
      var centerDiv = document.getElementById("MainContainer");
      // @ts-ignore
      centerDiv.style.marginTop = "5vh";
      this.ArtistModel = artistResponseModel;
      this.settingsFacade.GetArtistAlbums
      (
        artistResponseModel.id
      )
        .subscribe(
          (response: GeneralAlbumsResponseModel) => {
            this.GeneralAlbumsResponseModel = response;
          }
        );
  }
  GetBack() {
    var centerDiv = document.getElementById("CenterDiv");
    // @ts-ignore
    centerDiv.style.top = "10%";
    var centerDiv = document.getElementById("MainContainer");
    // @ts-ignore
    centerDiv.style.marginTop = "20vh";
    this.ShowArtists = true;
  }
  GetArtistAlbumsNext(previous: string) {
    this.settingsFacade.GetArtistAlbumsByUrl
    (
      previous
    )
      .subscribe(
        (response: GeneralAlbumsResponseModel) => {
          this.GeneralAlbumsResponseModel = response;
        }
      );
  }
  GetArtistsAlbumsPrevious(next: string) {
    this.settingsFacade.GetArtistAlbumsByUrl
    (
      next
    )
      .subscribe(
        (response: GeneralAlbumsResponseModel) => {
          this.GeneralAlbumsResponseModel = response;
        }
      );
  }
}
