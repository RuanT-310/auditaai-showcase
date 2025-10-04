import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { Partner } from "../types";

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section class="border-t pt-5 border-g-bg-alt pb-3">
        
        <h2 class="text-3xl font-bold text-g-r-bg mb-8 text-center">
          Desenvolvimento e Apoio Institucional
        </h2>

        <div class="flex flex-wrap justify-center gap-10 mb-10">
          @for (partner of partners(); track partner.name) {
            <div class="text-center max-w-xs p-4 rounded-lg bg-g-bg shadow-md">
              <p class="text-lg font-semibold text-g-r-bg">{{ partner.name }}</p>
              
              <p class="text-sm text-g-r-bg opacity-80">{{ partner.description }}</p>
            </div>
          }
        </div>

        <div class="text-center mt-8">
          <h3 class="text-xl font-semibold text-g-r-bg mb-4">
            Contribuidores
          </h3>
          
          <div class="flex flex-wrap justify-center gap-4 text-g-r-bg opacity-90">
            @for (contributor of contributors(); track contributor) {
              <span 
                class="p-2 bg-g-bg-alt rounded-full text-sm font-medium hover:bg-g-int hover:bg-opacity-20 transition hover:text-g-r-bg-d">
                {{ contributor }}
              </span>
            }
          </div>
        </div>
      </section>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    partners: InputSignal<Partner[]> = input.required<Partner[]>();
    // Recebe a lista de contribuidores como InputSignal
    contributors: InputSignal<string[]> = input.required<string[]>();
}