import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.page.html',
  styleUrls: ['./padre.page.scss'],
})
export class PadrePage implements OnInit {

  inputValue: string = "";
  getInputValue: string = "";
  constructor() { }

  ngOnInit() {
  }

  emit()
  {
    console.log("El valor del input es " + this.inputValue);
    if (this.inputValue != "")
    {
      this.getInputValue = this.inputValue;
    }
  }
}
