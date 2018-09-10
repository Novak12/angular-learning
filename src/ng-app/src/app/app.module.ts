import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from "./service/user.service";
import { HeroService } from "./hero.service";
import { Sample1Component } from './components/sample1/sample1.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    Sample1Component,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
