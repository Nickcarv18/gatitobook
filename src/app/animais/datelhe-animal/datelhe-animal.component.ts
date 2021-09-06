import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../animais';

@Component({
  selector: 'app-datelhe-animal',
  templateUrl: './datelhe-animal.component.html',
  styleUrls: ['./datelhe-animal.component.css'],
})
export class DatelheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }
}
