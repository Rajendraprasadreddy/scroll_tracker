import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { ListItemComponent } from './app.list';
import { AppRoutingModule }     from './app-routing.module';
import{ ScrollTrackerDirective } from './app.distence.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    ListItemComponent,
    ScrollTrackerDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    VirtualScrollModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
