import { News } from './../models/news';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<News[]>{
    let apiUrl = "https://my.api.mockaroo.com/mp.json?key=18d88290";
   return this.http.get<News[]>(apiUrl);
  }
  update(data:News){
  return this.http.put('/',data);
  }
  add(data:News){
  return this.http.post('/',data);
  }
  delete(id:number){
    return this.http.delete('/'+id);
  }
}
