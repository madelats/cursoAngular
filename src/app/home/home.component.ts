import { Component } from '@angular/core';
import { NotificationService } from '../common-app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Hola mundo';
  constructor () {
  // constructor (notify: NotificationService) {
    // notify.add('Demo');
    // notify.remove(0);
    // notify.remove(0);
  }
}
