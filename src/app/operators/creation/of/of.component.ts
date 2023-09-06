import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const observable = of(1, 2);

    observable.subscribe(item => {
      console.log(item)
    });
  }
}
