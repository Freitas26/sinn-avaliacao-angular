import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/user/user.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
