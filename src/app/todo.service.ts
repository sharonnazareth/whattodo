import { Injectable } from "@angular/core";
import { Todo } from "./models/todo";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  lastId: number = 0;

  todos: Todo[] = [
    {
      id: 1,
      title: "Chalk Street Assignment",
      complete: false,
      isEdit: false
    },
    {
      id: 2,
      title: "A meaty note right here",
      complete: false,
      isEdit: false
    }
  ];

  constructor(private storage: StorageService) {
    this.lastId = this.todos.length;
    this.syncNotes();
  }

  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  filter(searchText) {
    // TODO
    // this.todos = this.todos.filter(x => x.title.includes(searchText));
  }

  private getTodos() {
    return JSON.parse(this.storage.get("todos"));
  }

  private syncNotes() {
    this.storage.set("todos", JSON.stringify(this.todos));
  }
}
