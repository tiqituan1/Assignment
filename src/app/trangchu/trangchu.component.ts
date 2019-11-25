import { Component, OnInit } from '@angular/core';
import {DataService  } from "../service/data.service";

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  subject:any;
  constructor(private data:DataService) { }
  sotrang=1;
  sodong =4;
  ngOnInit() {
    this.data.getSubjects().subscribe(data => {
      this.subject = data;
      console.log(this.subject);
  })
  }
  quatrang(){
    if(5>this.sotrang)
    this.sotrang++;
  }
  luitrang(){
    if(this.sotrang>1)
    this.sotrang--;
  }
}