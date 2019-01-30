import { Component, OnInit } from '@angular/core';
import { HeadNavService } from '../head-nav.service';
import { Nav } from './navs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navs: Nav[];

  constructor( private headNavService: HeadNavService ) {}

  ngOnInit() {
    this.getNavs();
  }

  getNavs(): any {
    this.headNavService.getHeadNavs().subscribe(navs=> this.navs = navs);
  }


}
