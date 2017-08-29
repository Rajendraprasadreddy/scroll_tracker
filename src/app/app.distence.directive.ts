import {
  Directive, HostListener
}
from '@angular/core';

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {
  

  constructor() {
    
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log(event);
    let tracker = event.target;

    let limit = tracker.scrollHeight - tracker.clientHeight;
    console.log(event.target.scrollTop, limit);
    if (event.target.scrollTop === limit) {
      alert('end reached');
    }
  }
}
