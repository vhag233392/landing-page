import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

interface Album {
  cover: string;
  title: string;
  year: number;
  rating: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiApp';
  albums: Album[] = [
    { cover: 'MBDTF_ALT.jpg', title: 'MBDTF', year: 2010, rating: '4/5' },
    { cover: 'dsotm.jpg', title: 'The Dark side of the moon', year: 1973, rating: '3/5' },
    { cover: 'pepper.jpg', title: 'Sgt Pepper Lonely Hearts Club Band', year: 1967, rating: '5/5' },
  ];
}
