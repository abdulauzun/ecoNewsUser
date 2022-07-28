import { User } from './../../../../models/user';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  display:boolean=false;
  none:boolean=true;
  user=new User();

  constructor(private userserv:UserService) { }

  ngOnInit(): void {
  }

  show(){
    if (this.display==true){
      this.display=false;
      this.none=true;
    }

    else {
      this.display=true;
      this.none=false;
    }


    // if (this.none==false)
    // this.display=true;
    // else this.display=false
  }


}
