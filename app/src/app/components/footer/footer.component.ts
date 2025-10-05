import { Component, Input } from '@angular/core';
import { Partner } from '../../types';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input('partners') partners!: Partner[]
  @Input('contributors') contributors!: string[]
}
