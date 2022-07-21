import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/types';
import { persons } from 'src/data';

@Component({
  selector: 'app-friend-detail-page',
  templateUrl: './friend-detail-page.component.html',
  styleUrls: ['./friend-detail-page.component.css']
})
export class FriendDetailPageComponent implements OnInit {
  selectedFriend : Person | undefined = undefined;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const personId = this.route.snapshot.paramMap.get('friendId');
    this.selectedFriend = persons.find(p=> p.id === personId);
    if(!this.selectedFriend)
    {
      setInterval(()=>{
        this.router.navigateByUrl('/');
      }, 4000);
    }
  }

}
