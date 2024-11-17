import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skeleton-item.component.html',
  styleUrl: './skeleton-item.component.css'
})
export class SkeletonItemComponent {
  @Input() isLoad:boolean=true;
}
