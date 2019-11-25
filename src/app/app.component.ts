import { Component, OnInit } from '@angular/core';
import {DataService} from './service/data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  danhmuc:any;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getSubjects().subscribe(data => {
      this.danhmuc = data;
      console.log(this.danhmuc);
  })
  }

}
