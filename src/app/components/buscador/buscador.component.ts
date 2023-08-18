import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/service/heroes.service";
import { NavbarComponent } from "../shared/navbar/navbar.component";
@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  e: any;
  constructor(
    private activateRouter: ActivatedRoute, //propiedad para setear el parametro de la url
    private heroeService: HeroesService //trae todos los servicios en este caso heroes
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe((params) => {
      this.e = params["e"];
      this.heroes = this.heroeService.buscarHeroes(params["e"]);
    });
  }
}
