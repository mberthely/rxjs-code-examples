import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  source = of(1, 2, 3);

  constructor() { }

  ngOnInit(): void {

    this.source.pipe(
      take(1)
    ).subscribe(val => console.log(val));

    this.source.subscribe(val => console.log('Direct subscribe: ' + val))
  }

}
