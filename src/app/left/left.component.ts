import { Component, OnInit } from '@angular/core';
import { LeftNavService } from '../left-nav.service';
import { leftNav } from './leftNavs';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  leftNavs: leftNav[];
  selectedNav: '';

  constructor( private leftNavService: LeftNavService ) {}

  ngOnInit() {
    this.getLeftNavs();
    this.selectedNav = '';
  }

  getLeftNavs(): any{
    this.leftNavService.getLeftNavs().subscribe(leftNavs=> this.leftNavs = leftNavs);
  }

  selectOneNav(selectedItem){
    this.selectedNav = selectedItem.name;
  }

  

}
