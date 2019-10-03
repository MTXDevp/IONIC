import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hermano1',
  templateUrl: './hermano1.page.html',
  styleUrls: ['./hermano1.page.scss'],
})
export class Hermano1Page implements OnInit {

  @Output() emitMsg = new EventEmitter<string>();
  inputValue: string = "";

  constructor() { }

  ngOnInit() {
  }

  emit()
  {
    if (this.inputValue != "")
    {
      console.log("Emitiendo mensaje...");
      this.emitMsg.emit(this.inputValue);
    }
  }
}
