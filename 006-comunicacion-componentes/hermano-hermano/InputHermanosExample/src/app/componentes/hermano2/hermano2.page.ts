import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hermano2',
  templateUrl: './hermano2.page.html',
  styleUrls: ['./hermano2.page.scss'],
})
export class Hermano2Page implements OnInit {

  @Input() mensajeRecibido: string;

  constructor() { }

  ngOnInit() {
  }

}
