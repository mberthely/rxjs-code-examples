import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.scss']
})
export class CatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const source = throwError('This is an error!');

    const example = source.pipe(
      catchError(
        val => of(`I caught: ${val}`)
      )
    )
      .subscribe(val => console.log(val));
  }
}
