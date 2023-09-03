import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-vs-observable',
  templateUrl: './subject-vs-observable.component.html',
  styleUrls: ['./subject-vs-observable.component.scss']
})
export class SubjectVsObservableComponent implements OnInit {

  testSubject = new Subject();
  testObservable = new Observable<number>();

  constructor() { }

  ngOnInit(): void {
    // With subjects you can use next
    this.testSubject.next('');

    // You can subscribe to both
    this.testSubject.subscribe();
    this.testObservable.subscribe();
  }

}
