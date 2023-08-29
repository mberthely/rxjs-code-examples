import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = of(99);

    source.pipe(
      map((val: number) => val + 1),
      map((val: number) => val + 1),
    ).subscribe(val => {
      console.log(val)
    });

  }

}
