import { Injectable } from '@angular/core';
import { leftNavs } from './left/mock-leftNavs';
import { Observable, of } from 'rxjs';
import { leftNav } from './left/leftNavs';

@Injectable({
  providedIn: 'root'
})
export class LeftNavService {

  constructor() { }

  getLeftNavs(): Observable<leftNav[]>{
    return of (leftNavs);
  }

}
