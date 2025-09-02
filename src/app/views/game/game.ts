import { Component, OnInit } from '@angular/core';
import { faGamepad, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class Game implements OnInit {

  gamepad: IconDefinition = faGamepad;

  ngOnInit(): void {

  }

}
