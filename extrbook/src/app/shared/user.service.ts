import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 selectedUser: User = {
	  pseudo:  '',
     nom: '',
	 prenom: '',
	 age: 'Inconnu',
	 famille:'Inconnu',
     race: 'Inconnu',
	 nourriture: 'Inconnu', 
     password: ''
	
  };
  constructor() {

  }
}
