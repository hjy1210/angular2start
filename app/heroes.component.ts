import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import {OnInit} from 'angular2/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit { 
    public selectedHero: Hero;
    public heroes: Hero[];
    onSelect(hero: Hero) { this.selectedHero = hero; }
    constructor(
        private _heroService: HeroService,
        private _router:Router) { }
    getHeroes(){
        this._heroService.getHeroes().then(heroes=>this.heroes=heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    gotoDetail() {
        this._router.navigate(['HeroDetail',{id:this.selectedHero.id}]);
    }    
}

