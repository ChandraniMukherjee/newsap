import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'a76ccb254e2248fd8d673feb4932ed43';

  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}