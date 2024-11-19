import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserInterfaces } from '../../Interfaces/Users.interfaces';
import { CommonModule } from '@angular/common';
import { BodyContactComponent } from '../../partials/body-contact/body-contact.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    BodyContactComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: [
     '../contacts/contacts.component.css',
    './contact.component.css',
   
  ]
})
export class ContactComponent {
  @Input() dataToView:UserInterfaces = Object()
  @Output() getBackContact=new EventEmitter<boolean>()

  public isDataLoad:boolean=true;

  public CloseContactModal():void{
    this.isDataLoad=false
    this.setValueToContacts(true);
  }

  public setValueToContacts(value:boolean):void{
    this.getBackContact.emit(value)
  }
}
