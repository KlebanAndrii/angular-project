import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details-from-state',
  templateUrl: './user-details-from-state.component.html',
  styleUrls: ['./user-details-from-state.component.css']
})
export class UserDetailsFromStateComponent implements OnInit {


  userFromState: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataTransfer: DataTransferService) {
    activatedRoute.params.subscribe(value => {
      this.userFromState = this.router.getCurrentNavigation()?.extras.state;
      this.dataTransfer.store.next(this.userFromState);
    })
  }

  ngOnInit(): void {
  }

}
