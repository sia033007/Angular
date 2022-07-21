import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persons } from 'src/data';
import { Person } from 'src/types';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent {

  person : Person[] = persons;
  favoritesIds : string[] = [];
  

  get favorites(): Person[]{
    return this.favoritesIds.map(id=> this.person.find(p=> p.id === id)!);

  }
  get nonFavorites(): Person[]{
    return this.person.filter(p=> !this.favoritesIds.includes(p.id));

  }
  constructor(private router: Router) {}

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
  // gotoFriendDetailPage = (personId : string) => {
  //   this.router.navigateByUrl(`/friends/${personId}`);
  // }
  gotoFriendDetailPage(personId : string): void{
    this.router.navigateByUrl(`/friends/${personId}`);
  }
  addFavorite = (personId : string) => {
    this.favoritesIds.push(personId);
  }
  removeFavorite = (personId : string) => {
    this.favoritesIds = this.favoritesIds.filter(id=> id !==personId);
  }
}
