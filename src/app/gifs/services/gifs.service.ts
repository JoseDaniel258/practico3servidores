import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) {
    this.loadlocalStorage();

  }

  public gifsList: Gif[] = [];

  private _tagHistory: string[] = [];
  private apikey: string = 'KXPyoV701m8mTbWK3fVi5RP6QCiEAPCl';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  get tagsHistory() {
    return this._tagHistory;
  }


  private ordenateHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this.tagsHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0, 10);
    this.savelocalStorage();
  }

  private savelocalStorage(): void {

    localStorage.setItem('history', JSON.stringify(this._tagHistory));

  }

  private loadlocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    // tenemos data

    if(this._tagHistory.length===0)return;
    this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag: string): void {

    if (tag.length === 0) return;
    this.ordenateHistory(tag);    // console.log(this.tagsHistory);
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', 10)
      .set('q', tag);


    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params: params })
      .subscribe(res => {
        this.gifsList = res.data;
        console.log({ gifs: this.gifsList });
      });



  }



}
