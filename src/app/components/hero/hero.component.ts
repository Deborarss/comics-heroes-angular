import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  hero: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService  
    ) {
        this.activatedRoute.params.subscribe(params => {
        // console.log(params['id']);  
        this.hero = this._heroesService.getHero(params['id']);      
      });
   }

  ngOnInit() {
  }

}
