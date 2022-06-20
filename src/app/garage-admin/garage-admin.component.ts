import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './garage-admin.component.html',
  styleUrls: ['./garage-admin.component.css']
})
export class GarageAdminComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      (      data: string | undefined) => {
        this.content = data;
      },
      (      err: { error: string; }) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
