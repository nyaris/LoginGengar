import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  loginFormUser: FormGroup;
  loginFormSenha: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginFormUser = this.fb.group({
      username: ['', Validators.required]
    })
  }

  loginUser(){
    let user = this.loginFormUser.get("username").value;
    alert(user);
  }

}
