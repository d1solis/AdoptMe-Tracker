import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.css'
})
export class PagenotfoundComponent {
  constructor(private location: Location) {}

     goBack(): void {
       this.location.back();
     }
}
