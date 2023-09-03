import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  observable = from([1, 2, 3, 4]);

  constructor() { }

  ngOnInit(): void {
    this.observable.pipe(
      filter(result => result > 2)
    ).subscribe(result => {
      console.log(result);
    });
  }

}
