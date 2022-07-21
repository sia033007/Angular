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
 @Input() buttonClicked: (personId : string) => void = () => {};
 @Input() actionButtonText! : string;

  constructor() { }

  ngOnInit(): void {
  }
  onClickPerson = (personId : string) => {
    this.personClicked.emit(personId);
  }

}
