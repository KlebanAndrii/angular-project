import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {










  loginControl = new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      this.customValidator
    ]
  );


  passwordControl = new FormControl('asd');


  myForm = new FormGroup({
    login: this.loginControl,
    password: this.passwordControl
  })



  constructor() {
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myForm)
  }


  customValidator(input: AbstractControl) {
    console.log(input)
    if (input.value.includes('durak')) {
      return {badWord: true}
    } else {
      return null
    }
  }
}
