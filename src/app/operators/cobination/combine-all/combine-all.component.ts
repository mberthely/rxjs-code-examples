import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent implements OnInit {

  data = of([1, 2, 3, 4]);

  constructor() { }

  ngOnInit(): void {
    // TODO: find a good example this does not work or not able to understand
    this.data.pipe(
      combineAll()
    ).subscribe(result => {
      console.log(result);
    });

    this.data.subscribe(result => { console.log('no combine ' + result); });
  }
}
