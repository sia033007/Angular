import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/types';
import { persons } from 'src/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-shaun-tutorial';
  person : Person[] = persons;
  favoritesIds: string[] = [];


  // onPersonClicked(person: Person): void{
  //   alert(`${person.name} likes ${person.interests.join(',')}`);
  // }
  favoriteHandler(personId : string): void{
    if(this.favoritesIds.includes(personId))
    {
      this.favoritesIds = this.favoritesIds.filter(id=> id !==personId);
    }
    else
    {
      this.favoritesIds.push(personId);
    }

  }
  
}
