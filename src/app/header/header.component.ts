import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onRedirectPage = new EventEmitter<string>();

  collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onRedirect(route: string) {
    this.onRedirectPage.emit(route);
  }
}
