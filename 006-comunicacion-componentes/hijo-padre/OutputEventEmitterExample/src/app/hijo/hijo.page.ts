import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.page.html',
  styleUrls: ['./hijo.page.scss'],
})
export class HijoPage
{
  @Output() emitMsg = new EventEmitter<string>();
  mensaje = "Hola Papa";
  inputValue: string = "";

  constructor(){ }

  emit()
  {
    if (this.inputValue != "")
    {
      this.emitMsg.emit(this.inputValue);
    }
  }
}
