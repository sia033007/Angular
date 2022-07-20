import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/types';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  @Input() person! : Person;
  @Input()
  set isFavorite(val : boolean){
    this.cardClass = val ? 'add-favorite':'bg-warning';

  }
  @Output() selectEvent = new EventEmitter<string>();

  cardClass: string = '';


  constructor() { }

  ngOnInit(): void {
  }
  // displayDetails(name: string, occupation: string): void{
  //   alert(`${name} is a ${occupation}`);
  //   this.isFavorite = !this.isFavorite;
  // }
  isClicked(): void{
    this.selectEvent.emit(this.person.name);
  }

}
