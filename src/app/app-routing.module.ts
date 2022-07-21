import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { FriendDetailPageComponent } from './friend-detail-page/friend-detail-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = 
[
  {path:'', component:FriendsPageComponent},
  {path:'user-profile', component:UserProfilePageComponent},
  {path:'friends/:friendId', component:FriendDetailPageComponent},
  {path:'**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
