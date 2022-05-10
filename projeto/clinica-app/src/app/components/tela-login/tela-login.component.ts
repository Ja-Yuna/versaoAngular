import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  loginForm: FormGroup;
 

  constructor(private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    console.log('vai se autenticar');
}
}