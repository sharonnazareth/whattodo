import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  filterItems(){
    this.todoService.filter(this.searchText);
  }

}
