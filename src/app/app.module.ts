import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RouteModule } from './route.module';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { FriendDetailPageComponent } from './friend-detail-page/friend-detail-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoComponent,
    PersonCardComponent,
    WelcomeMessageComponent,
    PeopleListComponent,
    FriendsPageComponent,
    FriendDetailPageComponent,
    NavbarComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
