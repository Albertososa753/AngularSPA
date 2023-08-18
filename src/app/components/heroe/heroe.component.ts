import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/service/heroes.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"],
})
export class HeroeComponent {

  heroe:any={} 

  constructor(private activatedRouter: ActivatedRoute,
    private heroeService: HeroesService,
    private router:Router) {
    this.activatedRouter.params.subscribe((params) => {
   this.heroe = this.heroeService.getHeroe(params['id']) 
    });
  }

  regresar() {
    this.router.navigate(['/heroes'])  }
}
