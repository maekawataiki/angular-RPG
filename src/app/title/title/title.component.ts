import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  showmenu = false;
  option = 0;

  text = "";

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showmenu = !this.showmenu;
    this.option = 0;
  }

  toggleOption(param: number) {
    if (this.option != param) this.option = param;
    else this.option = 0;
  }

  action() {
    this.option = 0;
    this.showmenu = false;
    this.text += "\n";
    this.scrollToBottom();
  }

  attack(param: string) {
    this.text += "Attacked by " + param + ": " + Math.floor(Math.random() * 100) + " damage to UNKNOWN";
    this.action();
  }

  magic(param: string) {
    this.text += "Used " + param + ": " + Math.floor(Math.random() * 100) + " damage to UNKNOWN";
    this.action();
  }

  item(param: string) {
    this.text += "Used " + param + ": ";
    if (param == 'Portion') this.text += "gained " + Math.floor(Math.random() * 100) + " HP";
    else if (param == 'Monster Ball') this.text += "nothing happened";
    this.action();
  }

  guard(param: string) {
    this.text += "Guard";
    this.action();
  }

  sleep(param: string) {
    this.text += "Slept: gained " + Math.floor(Math.random() * 100) + " HP";
    this.action();
  }

  escape(param: string) {
    this.text += "Cannot escape!";
    this.action();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
