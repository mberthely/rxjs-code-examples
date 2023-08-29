import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = from([1, 2, 3, 4, 5]);
    source.pipe(
      map((val: number) => val + 10)
    ).subscribe(val => {
      console.log(val)
    });

  }

}
