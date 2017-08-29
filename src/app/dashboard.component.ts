import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import {Observable} from 'rxjs/Rx';

@Component({
selector:'my-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./app.component.css']
})

export class DashboardComponent implements OnInit {
topheader = 'Find my distence';
header: number[] = [1,2,3,4,5,6,7,8,9];
list: number[] = [1,2,3,4,5];
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);

    //    let tracker = document.getElementById('th-infinite-scroll-tracker');

    // let windowYOffsetObservable = Observable.fromEvent(tracker, 'scroll').map(() => {
  
    //   return tracker.scrollTop;
    // });

    // let scrollSubscription = windowYOffsetObservable.subscribe(
    //   (scrollPos) => {
    //     let limit = tracker.scrollHeight - tracker.clientHeight;
    //     console.log(scrollPos, limit);
    //     if (scrollPos === limit) {
    //       alert('end reached');
    //     }
    //   },
    //    err => {
    //      console.log(err);
    //    } 
    // );

  }
}
