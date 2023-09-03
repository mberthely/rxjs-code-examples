import { Component, OnInit } from '@angular/core';
import { forkJoin, interval, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    forkJoin({
      sourceOne: of('Hello'),
      sourceTwo: of('World').pipe(delay(1000)),
      sourceThree: interval(1000).pipe(take(1)),
      sourceFour: interval(1000).pipe(take(2)),
    }).subscribe(result => {
      console.log(result);
    });
  }

}
