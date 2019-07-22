import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  
  @Input() hero:any = {};
  @Input() index:number;

  // @Output() heroSelected:EventEmitter<number>;

  constructor(private router:Router) {
    // this.heroSelected = new EventEmitter();  
  }

  ngOnInit() {
  }

  seeHero() {
    // console.log(this.index);    
    this.router.navigate(['/heroi', this.index]);
    // this.heroSelected.emit(this.index);
  }

}
