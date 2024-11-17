import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeSearch } from './Pipes/Find.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contact-app';
}
