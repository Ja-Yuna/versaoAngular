import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoCrudComponent } from './views/contato-crud/contato-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ContatoCreateComponent } from './components/cadastro/contato-create/contato-create.component';

const routes: Routes = [{

  path: "",
  component: HomeComponent
},
{
  path: "cadastro",
  component: ContatoCrudComponent
},
{
  path: "contato/create",
  component: ContatoCreateComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
