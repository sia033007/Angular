import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/types';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
 @Input() people: Person[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
