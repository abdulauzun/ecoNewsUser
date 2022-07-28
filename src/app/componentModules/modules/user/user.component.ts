import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.helloUser();
  }

  helloUser(){
    alert('Hello User');
      }

}
