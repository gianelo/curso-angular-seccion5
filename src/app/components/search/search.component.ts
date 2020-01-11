import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router
    ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.searchHeroe(params['termino']);
      this.termino = params['termino'];
      console.log(this.heroes);
    });
    
  }

  verHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
    //console.log(idx);
  }

}
