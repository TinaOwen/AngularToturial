import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Nav } from './header/navs';
import { Navs } from './header/mock-navs';

@Injectable({
  providedIn: 'root'
})
export class HeadNavService {

  constructor() { }

  getHeadNavs(): Observable<Nav[]>{
    return of (Navs);
  }

}
