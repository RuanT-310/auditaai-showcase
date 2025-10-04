import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { Partner } from "../types";

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section class="border-t pt-10 border-gray-200 pb-16">
        <h2 class="text-3xl font-bold text-indigo-900 mb-8 text-center">
          Desenvolvimento e Apoio Institucional
        </h2>

        <!-- Instituições -->
        <div class="flex flex-wrap justify-center gap-10 mb-10">
          @for (partner of partners(); track partner.name) {
            <div class="text-center max-w-xs p-4 rounded-lg bg-white shadow-md">
              <p class="text-lg font-semibold text-indigo-900">{{ partner.name }}</p>
              <p class="text-sm text-gray-500">{{ partner.description }}</p>
            </div>
          }
        </div>

        <!-- Contribuidores -->
        <div class="text-center mt-12">
          <h3 class="text-xl font-semibold text-indigo-900 mb-4">
            Contribuidores
          </h3>
          <div class="flex flex-wrap justify-center gap-4 text-gray-600">
            @for (contributor of contributors(); track contributor) {
              <span class="p-2 bg-indigo-50 rounded-full text-sm font-medium hover:bg-indigo-100 transition">{{ contributor }}</span>
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