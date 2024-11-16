import { Component } from '@angular/core';
import { UsersServices } from '../../Services/Users.service';
import { UserInterfaces } from '../../Interfaces/Users.interfaces';
// import {MatTabsModule} from '@angular/material/tabs';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ 
    FormsModule,
    CommonModule
  ],
  providers: [UsersServices],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  public USERS :UserInterfaces[] = []


  constructor(public API:UsersServices){

   this.loadTo()
  }

  public loadTo():void{

    this.API.getUsers().subscribe((data:UserInterfaces[])=>{
      this.USERS=data;
      console.log(this.USERS);

    })

  }
}
