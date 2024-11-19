import { Component, Input } from '@angular/core';
import { UserInterfaces } from '../../Interfaces/Users.interfaces';

@Component({
  selector: 'app-body-contact',
  standalone: true,
  imports: [],
  templateUrl: './body-contact.component.html',
  styleUrl:'./body-contact.component.css',
    
   
})
export class BodyContactComponent {
  @Input() databody:UserInterfaces= Object();
   
}
