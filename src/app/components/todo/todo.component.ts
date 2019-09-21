import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/todo.service";
import { FormGroup } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
const URL = '';


@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  newTodo: Todo = new Todo();
  form: FormGroup;
  isEdit: boolean;
  public uploader: FileUploader = new FileUploader({ url: URL });

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addTodo() {
    if (this.newTodo.title) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = new Todo();
    }
  }

  onEdit(item) {
    item.isEdit = true;
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  save(item) {
    item.isEdit = false;
  }

  get todos() {
    return this.todoService.getAllTodos();
  }
}
