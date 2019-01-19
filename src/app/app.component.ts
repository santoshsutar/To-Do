import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";
import { NgModel } from "@angular/forms";
@Component({
  selector: "todo-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }
  public getTodoItems(): TodoItem[] {
    //let items=new Array<TodoItem>();
    //items.push(new  TodoItem("ss",false));
    //return items;
    let items = this.model.getTodoItems();

    if (items == null || items.length == 0) {
      return null;
    }
    return items;
  }
  addItem(newItem) {
    if (newItem != "") {
      console.log(newItem);      
      this.model.addItem(new TodoItem(newItem, false));
    }
  }
}