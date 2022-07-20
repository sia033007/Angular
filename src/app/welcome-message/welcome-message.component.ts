import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {
  @Input() name!: string;
  isClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onHide(): void{
    this.isClicked = !this.isClicked;
  }

}
