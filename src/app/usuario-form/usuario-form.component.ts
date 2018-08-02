import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,NgForm} from '@angular/forms';
import {UserService} from '../shared/user/user.service';
import {User} from '../shared/user/user.model';
import {Endereco} from '../shared/user/endereco.model';
import {TypeUser} from '../shared/user/typeUser.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {


  tiposUsuario= [new TypeUser()];
  enderecosUsuario= [new Endereco()];
  atualEndereco=new Endereco();
  novoUsuario= new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserType();

  }
  onSubmit(form){
    if(this.atualEndereco.cep==""){
    this.addToArray();
  }
    this.novoUsuario.enderecos=this.novoUsuario.enderecos.slice(1);
    this.userService.addUsuario(this.novoUsuario).subscribe();
  }
  getUserType(): void{
    this.userService.getUserType()
    .subscribe(data=>{this.tiposUsuario = data});

  }
  getCEP(cep: string): void{
    this.userService.getCEP(cep)
    .subscribe(data=>{this.atualEndereco = data; this.atualEndereco.cep=cep});

  }
  preencher(cep: string): void{
    if(cep.length==8){
    this.getCEP(cep);
}

  }
  addToArray(): void{
    this.enderecosUsuario.push(this.atualEndereco);
    this.novoUsuario.enderecos=this.enderecosUsuario;
    this.atualEndereco=new Endereco();
  }
}
