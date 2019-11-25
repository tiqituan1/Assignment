import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Component } from "@angular/core";
import { AppComponent } from './app.component';
// import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { RouterModule } from "@angular/router";
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopyComponent } from './gopy/gopy.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ThitracnghiemComponent } from './thitracnghiem/thitracnghiem.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DmkComponent } from './dmk/dmk.component';
import { QmkComponent } from './qmk/qmk.component';


@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    GioithieuComponent,
    LienheComponent,
    GopyComponent,
    DangkyComponent,
    DangnhapComponent,
    ThitracnghiemComponent,
    QmkComponent,
    DmkComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: TrangchuComponent },
      { path: 'gioithieu', component: GioithieuComponent },
      { path: 'lienhe', component: LienheComponent },
      { path: 'gopy', component: GopyComponent },
      { path: 'dangky', component: DangkyComponent },
      { path: 'dangnhap', component: DangnhapComponent },
      { path: 'qmk', component: QmkComponent },
      { path: 'dmk', component: DmkComponent },
      

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
