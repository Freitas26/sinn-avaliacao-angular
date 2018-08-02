import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user/user.model';
import {UserService} from '../shared/user/user.service';
import {TypeUser} from '../shared/user/typeUser.model'
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios=[new User()];

  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.getAllUsers();

  }
  getAllUsers(): void{
    this.userService.getAllUsers()
    .subscribe(data=>{this.usuarios = data});

  }

}
