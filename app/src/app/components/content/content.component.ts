import { Component, Input, input, InputSignal } from '@angular/core';
import { Feature, Step } from '../../types';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  // Recebe a lista de passos do fluxo como InputSignal
  @Input('workflowSteps') workflowSteps!: Step[];
  @Input('features') features!: Feature[];
}
