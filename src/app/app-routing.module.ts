import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MainComponent } from './core/main/main.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';



export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Início',
      icon: 'dashboard',
      active: false
    }
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    data: {
      title: 'Usuários',
      icon: 'dashboard',
      active: true
    },

  },
  {
    path: 'usuarioform',
    component: UsuarioFormComponent,
    data: {
      title: 'formulario',
      icon: 'dashboard',
      active: true
    }
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    data: {
      acitve: false
    }

  },
  {
    path: '**', component: PageNotFoundComponent,
    data: {
      acitve: false
    }
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
