import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { Feature, Step } from "../types";
// ----------------------------------------------------------------------
// 2. Componente: ContentSectionsComponent
// ----------------------------------------------------------------------

/**
 * Componente que exibe o contexto, o fluxo de trabalho e os recursos do projeto.
 */
@Component({
  selector: 'app-content-sections',
  standalone: true,
  template: `
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- 1. Introdução e Contexto (Grid de duas colunas) -->
      <section class="grid md:grid-cols-2 gap-12 mb-20">
        
        <!-- Coluna 1: O Problema -->
        <div class="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-red-600">
          <h2 class="text-3xl font-bold text-indigo-900 mb-4 flex items-center">
            O Desafio da Auditoria
            <svg class="w-6 h-6 ml-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.39 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            O combate à corrupção no setor educacional federal é complexo. Processos Administrativos Disciplinares (PADs) podem ter **centenas de páginas**, tornando a análise manual extremamente lenta e ineficaz.
          </p>
          <ul class="list-disc pl-5 text-gray-500 space-y-2 text-sm">
            <li>Análise manual demorada e custosa.</li>
            <li>Recursos humanos limitados para análise detalhada.</li>
            <li>Ausência de métodos automatizados para identificar padrões de comportamento.</li>
          </ul>
        </div>

        <!-- Coluna 2: A Solução Audit.AI -->
        <div class="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-green-600">
          <h2 class="text-3xl font-bold text-indigo-900 mb-4 flex items-center">
            A Solução Audit.AI
            <svg class="w-6 h-6 ml-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            O <strong class="text-indigo-900">Audit.AI</strong> utiliza <strong>PLN</strong> (Processamento de Linguagem Natural) e <strong>Grandes Modelos de Linguagem (GML)</strong> para automatizar a análise de PADs, contribuindo diretamente para o ODS 16 da ONU (Instituições Eficazes e Transparentes).
          </p>
          <ul class="list-disc pl-5 text-gray-500 space-y-2 text-sm">
            <li>Otimiza o trabalho de auditores.</li>
            <li>Reduz o tempo de análise de meses para minutos.</li>
            <li>Aumenta a precisão na detecção de irregularidades.</li>
          </ul>
        </div>
      </section>

      <!-- 2. Como Funciona (Fluxo de Trabalho Simplificado) -->
      <section class="mb-20">
        <h2 class="text-4xl font-extrabold text-center text-indigo-900 mb-12">
          Tecnologia de Ponta a Serviço da Transparência
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          @for (step of workflowSteps(); track step.title) {
            <div class="text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div class="text-4xl mb-4 font-bold text-indigo-600">{{ $index + 1 }}</div>
              <h3 class="text-xl font-semibold text-indigo-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600 text-sm">{{ step.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- 3. Recursos e Benefícios -->
      <section class="mb-20">
        <h2 class="text-4xl font-extrabold text-center text-indigo-900 mb-12">
          Recursos Essenciais para Auditoria
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          
          @for (feature of features(); track feature.title) {
            <div class="flex flex-col items-start p-6 bg-white border-2 border-indigo-100 rounded-xl shadow-lg">
              <div class="p-3 mb-4 rounded-full {{ feature.iconColor }} bg-opacity-20">
                <!-- Ícone simples de checagem/destaque - Usando [attr.d] para correção de binding SVG -->
                <svg class="w-6 h-6 {{ feature.iconColor }}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="feature.iconPath"></path></svg>
              </div>
              <h3 class="text-xl font-semibold text-indigo-900 mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600 text-base">{{ feature.description }}</p>
            </div>
          }

        </div>
      </section>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  // Recebe a lista de passos do fluxo como InputSignal
  workflowSteps: InputSignal<Step[]> = input.required<Step[]>();

  // Recebe a lista de funcionalidades como InputSignal
  features: InputSignal<Feature[]> = input.required<Feature[]>();
}