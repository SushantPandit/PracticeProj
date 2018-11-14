import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable ,of} from 'rxjs';
import {MessageService} from './message.service'

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(public messageService: MessageService) { }

  // getHeroes():Hero[]{
  //   return HEROES;
  // }without observables

  // getHeroes():Observable<Hero[]>{
  //   return of(HEROES);
  // }
  
  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService:Fetched heroes');
    return of(HEROES);
  }

}

