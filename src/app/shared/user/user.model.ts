import {Endereco} from './endereco.model';
import {TypeUser} from './typeUser.model'

export class User {
  nome: string;
  username:string;
  email: string;
  documento: string;
  isJuridica:boolean;
  enderecos: Endereco[];
  dataExpiracao: string;
  tipoUsuario: TypeUser;
  isAtivo: boolean;
  constructor(){}
}
