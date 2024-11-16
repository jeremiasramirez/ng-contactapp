import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import {  interval, timer } from 'rxjs';

@Component({
  selector: 'app-not-found404',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './not-found404.component.html',
  styleUrl: './not-found404.component.css'
})
export class NotFound404Component {
  public counter:number = 5;

  constructor(public comeBack:Router){
    this.comeBackOut()
  }

  public comeBackOut():void{

    //regresando a home en 5 segundo
    const intervalComeBack=interval(1300).subscribe(()=>{
     

      if (this.counter==1) {
        this.comeBack.navigate(['/contact'])
        intervalComeBack.unsubscribe()
      }
      this.counter-=1;
    })

  }


public pressComeBack():void{
  timer(200).subscribe(()=>{
    this.comeBack.navigate(['/contact'])
  })
}


}
