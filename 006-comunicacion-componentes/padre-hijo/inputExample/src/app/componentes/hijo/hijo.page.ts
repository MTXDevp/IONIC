import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.page.html',
  styleUrls: ['./hijo.page.scss'],
})
export class HijoPage implements OnInit {

  @Input() getMensaje: string;

  constructor() { }

  ngOnInit() {
  }

}
