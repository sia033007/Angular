import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/types';
import { persons } from 'src/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-shaun-tutorial';
  person : Person[] = persons;
  favoritesIds : string[] = [];
  

  get favorites(): Person[]{
    return this.favoritesIds.map(id=> this.person.find(p=> p.id === id)!);

  }
  get nonFavorites(): Person[]{
    return this.person.filter(p=> !this.favoritesIds.includes(p.id));

  }


  ngOnInit(): void{
  }


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
