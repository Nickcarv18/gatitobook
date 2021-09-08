import { DatelheAnimalComponent } from './datelhe-animal/datelhe-animal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    },
  },
  {
    path: ':animalId',
    component: DatelheAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
