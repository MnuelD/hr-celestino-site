import { Component } from '@angular/core';
import { Clients } from '../../components/clients/clients';

@Component({
  selector: 'app-home',
  imports: [Clients],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
