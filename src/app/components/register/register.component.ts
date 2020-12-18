import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	public page_title: string;
	public user: User;

  constructor() {
  		this.page_title = 'Registrate';
  		/* propiedades de User

  		public id: number,
		public name: string,
		public surname: string,
		public rol: string,
		public email: string,
		public password: string,
		public description: string,
		public image: string
		*/
  		this.user = new User(1, '', '', 'ROLE_USER', '','','','');
   }

  ngOnInit(): void {
  }

  onSubmit(form){
  	console.log(this.user);
  }

}
