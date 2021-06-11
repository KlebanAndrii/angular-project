import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent implements OnInit {



  myForm = new FormGroup({id: new FormControl(0)});



  constructor() {
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myForm.controls.id.value)
  }
}
