import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'service-docs',
  templateUrl: './service-docs.component.html',
  styleUrls: ['./service-docs.component.scss']
})
export class ServiceDocsComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user: User = new User();


   ngOnInit(): void {
    this.userService.getUserById(1).subscribe({
      next: (response:any) => {
        this.user = response;
      },
      error: (error: Error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done.');
      }
    });
  }
}
