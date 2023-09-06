import { Component, OnInit } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {

  subject = new Subject();

  constructor() { }

  ngOnInit(): void {

    this.subject.pipe(
      debounceTime(1000)
    ).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  update() {
    this.subject.next(1);
  }

}
