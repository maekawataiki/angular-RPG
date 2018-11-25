import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  showmenu = false;
  option = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.showmenu = !this.showmenu;
    this.option = 0;
  }

  toggleOption(param: number){
    if (this.option != param) this.option = param;
    else this.option = 0;
  }

}
