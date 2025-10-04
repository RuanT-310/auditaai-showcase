import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { Partner } from "../types";

// ----------------------------------------------------------------------
// 3. Componente: CtaFooterComponent
// ----------------------------------------------------------------------

/**
 * Componente que exibe a Chamada para Ação (CTA), parceiros e contribuidores.
 */
@Component({
  selector: 'app-cta-footer',
  standalone: true,
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 4. Chamada para Ação (CTA) - O Ponto Mais Importante -->
      <section class="bg-indigo-600 p-10 sm:p-16 rounded-xl shadow-2xl text-center mb-20">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Queremos novos colaboradores! Teste o Audit.AI
        </h2>
        <p class="text-indigo-100 text-lg mb-8 max-w-3xl mx-auto">
          Convidamos <strong class="text-yellow-400">Auditores</strong>, <strong class="text-yellow-400">Corretores</strong> e <strong class="text-yellow-400">Profissionais</strong> de órgãos de controle a testar e validar o <strong class="text-yellow-400">Audit.AI</strong>. Sua experiência prática é fundamental para o aprimoramento contínuo desta ferramenta no combate à corrupção.
        </p>
        
        <a [href]="'mailto:' + email()" class="inline-block px-10 py-4 text-lg font-bold rounded-full bg-yellow-400 text-indigo-900 shadow-xl transition duration-300 hover:bg-yellow-300 hover:shadow-2xl hover:scale-105">
          Entre em Contato para Testar
          <span class="ml-2">📧</span>
        </a>
        <p class="text-sm mt-4 text-indigo-200">
          Envie um e-mail para: <strong>{{ email() }}</strong>
        </p>
      </section>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaFooterComponent {
  // Recebe o email como InputSignal
  email: InputSignal<string> = input.required<string>();
}