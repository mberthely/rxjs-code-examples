import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

    fromEvent(document, 'click')
      .pipe(
        switchMap((event) => {
          return ajax.getJSON(API_URL)
        })
      )
      .subscribe(data => console.log(data));
  }

}
