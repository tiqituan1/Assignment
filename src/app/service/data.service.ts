import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlSubj='../../assets/db/Subjects.json';
  constructor(private http:HttpClient) { 
    
  }
  //ham lay tat ca du lieu tu file urlsubj
  getSubjects(){
    return this.http.get(this.urlSubj);
  }

}
