export class Model {
    user;
    private items:Array<TodoItem>;
    constructor() {
        this.user = "Santosh";
        this.items=this.getTodoItems();
    }
    public getTodoItems(): TodoItem[] {
        let data = localStorage.getItem("todos");
        //console.log(data);
        
        if (data != null) {
            return JSON.parse(data) as TodoItem[];
        }
        else {
            return null;
        }
    }
    addItem(newItem: TodoItem) {
        //this.items.pu
        this.items.push(newItem);
        console.log(this.items);
        
        localStorage.setItem("todos", JSON.stringify(this.items));
    }
}
export class TodoItem {
    action:string;
    done:boolean;
    constructor(action:string, done:boolean) {
        this.action = action;
        this.done = done;
    }
}