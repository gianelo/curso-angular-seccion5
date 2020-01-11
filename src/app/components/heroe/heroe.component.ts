import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  imgCasaUrl: string;

  constructor( private activatedRouter: ActivatedRoute,
               private _heroeService:HeroesService) { 

    this.activatedRouter.params.subscribe( params => {

      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);

    })
  }

  ngOnInit() {
  }

  casaLogo(){
    if (this.heroe.casa == "Marvel") {
      return this.imgCasaUrl = "assets/img/marvel_logo.png";
    } else {
      return this.imgCasaUrl = "assets/img/dc_logo.png";
    }
  }

}
