import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { filter, find, mapTo, repeatWhen, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {


    const data = from([1, 2, 3, 4, 4, 4, 5]);
    data
      .pipe(
        find((value: any) => {
          return value === 4;
        }),
      )
      .subscribe(obj => {
        console.log(obj);
      });
  }

}
