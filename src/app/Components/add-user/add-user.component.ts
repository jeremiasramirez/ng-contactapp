import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import 'bootstrap'
import 'animate.css';
import { UserInterfaces } from '../../Interfaces/Users.interfaces';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { timer } from 'rxjs';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FormsModule
    
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  public newUser :UserInterfaces = Object()
  @Output() insertUser=new EventEmitter<UserInterfaces>()
  public isFormValidated:boolean = true;
 

  public addUser():void{
    console.log(this.newUser);

    if(this.newUser !=null && this.newUser.email!=null && this.newUser.phone!=null){
      
      this.insertUser.emit(this.newUser)
    
      this.isFormValidated=true;
  
       
      
     
    }
    else{
      this.isFormValidated=false;
    
    }

  
  }
}
