import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './garage-user.component.html',
  styleUrls: ['./garage-user.component.css']
})
export class GarageUserComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      (      data: string | undefined) => {
        this.content = data;
      },
      (      err: { error: string; }) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
