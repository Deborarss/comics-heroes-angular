import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  name:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesServices:HeroesService,       
    ) { 
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['name']);  
      this.name = params['name'];    
      this.heroes = this._heroesServices.searchHeroes(params['name']);
      // console.log(this.heroes);      
    });
  }

  ngOnInit() {
  }
  
}
