import { Component } from '@angular/core';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html'
})
export class AppComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }
  getTodoItems() {
    return this.model.items;
  }

}
