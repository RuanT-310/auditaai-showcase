import { Component } from '@angular/core';
import { Award } from '../../types';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  awards!: Award[];
}
