import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/types';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
 @Input() people: Person[] = [];
 @Output() personClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onClickPerson(personId : string): void{
    this.personClicked.emit(personId);
  }

}
