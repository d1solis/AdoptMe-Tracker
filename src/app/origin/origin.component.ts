import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-origin',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './origin.component.html',
  styleUrl: './origin.component.css'
})
export class OriginComponent {
  myOriginType: string = '';

  constructor() { }

  onSubmit() {
    console.log('Form submitted!');
    console.log('Selected Origin Type:', this.myOriginType);
  }
  
}
