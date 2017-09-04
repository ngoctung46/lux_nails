import { Component, OnInit, HostBinding} from '@angular/core';

@Component({
  selector: 'app-header',
  template: '',
})
export class HeaderComponent implements OnInit {
  @HostBinding(`attr.class`) cssClass = `Main agile`;
  constructor() { }

  ngOnInit() {
  }

}
