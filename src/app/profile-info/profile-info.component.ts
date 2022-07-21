import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/types';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  @Input() person! : Person;

  @Input() selectFn : (personId : string) => void = () => {};
  @Input() actionButtonFn: (personId : string) => void = () => {};
  @Input() actionText! : string;

  cardClass: string = '';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // displayDetails(name: string, occupation: string): void{
  //   alert(`${name} is a ${occupation}`);
  //   this.isFavorite = !this.isFavorite;
  // }
  isClicked(): void{
    // this.selectEvent.emit(this.person.name);
    // this.router.navigateByUrl(`/friends/${this.person.id}`);
    this.selectFn(this.person.id);
  }
  buttonClicked() : void{
    this.actionButtonFn(this.person.id);

  }

}
