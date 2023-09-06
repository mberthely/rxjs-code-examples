import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const observable = from([1, 2, 3, "test", { hello: "world" }]);

    observable.subscribe(data => {
      console.log(data);
    })
  }

}
