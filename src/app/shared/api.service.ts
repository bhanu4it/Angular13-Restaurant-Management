import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  public _url = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  // Defining GET, POST, PUT AND DELETE

  // Create Restaurant using Post Method

  createRestaurent(data:any){
    return this._http.post<any>("http://localhost:3000/posts", data ).pipe(map((res:any)=> {
      return res;
    }))
  }

  getRestaurent(){
    return this._http.get<any>('http://localhost:3000').pipe(map((res:any)=> {
      return res;
    }))

  }

  updateRestaurent(id:any){
    return this._http.put<any>('http://localhost:3000/posts/'+id, data).pipe(map((res:any)=> {
      return res;
    }))
  }

  deleteRestaurent(id: any){
    return this._http.delete('http://localhost:3000/posts/'+id).pipe(map((res:any)=> {
      return res;
    }))
  }


}
function data<T>(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

