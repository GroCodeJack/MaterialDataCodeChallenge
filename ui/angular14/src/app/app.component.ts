import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public route: ActivatedRoute) { }
  title = 'angular14';
  isButtonVisible:boolean = true;

  disableButton() {
    this.isButtonVisible = false;
  }
}
