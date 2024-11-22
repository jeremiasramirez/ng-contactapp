import { Component } from '@angular/core';
import { UsersServices } from '../../Services/Users.service';
import { UserInterfaces } from '../../Interfaces/Users.interfaces';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { SkeletonItemComponent } from '../skeleton-item/skeleton-item.component';
import { ContactComponent } from '../contact/contact.component';
import { AddUserComponent } from '../add-user/add-user.component';
// import { PipeSearch } from '../../Pipes/Find.pipe';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ 
    FormsModule,
    CommonModule, 
    MatIconModule,
    MatButton,
    MatRippleModule,
    ContactComponent,
    SkeletonItemComponent,
    AddUserComponent
  ],
  providers: [UsersServices],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  public USERS :UserInterfaces[] = []
  public inputValue:string = ''
  public isLoadData:boolean = false;
  public dataToView:UserInterfaces=Object();
  public isClosedModalAdd:boolean=false;
  public isDataToViewActive:boolean=false;
  constructor(public API:UsersServices){
    
   this.loadTo()
  }

  public loadTo():void{

    this.API.getUsers().subscribe((data:UserInterfaces[])=>{
      this.USERS=data;
      console.log(this.USERS);
      this.isLoadData=true


    })

  }

  public loadData(data:UserInterfaces):void{
    this.dataToView= data;
    this.isDataToViewActive=true
    console.log(data);
  }

  public openContacts(value:boolean):void{
    value=false
    this.isDataToViewActive=value
  }
  public insertUserTo(user:UserInterfaces):void{
    
      this.USERS.push(user)
    
    

  
    
  }

}
