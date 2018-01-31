import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_ALL_TODOS } from '../action';
import { firebase } from '../firebase/index';
import { Task } from '../todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase,
    private ngRedux: NgRedux<IAppState>) {
    this.items = db.list('items').valueChanges();
  }
  ngOnInit(): void {  }
  clearTodos() {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }
}
