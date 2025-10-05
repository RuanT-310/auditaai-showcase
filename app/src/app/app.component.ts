import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { Award, Feature, Partner, Step } from "./types";
import { CtaComponent } from "./components/cta/cta.component";
import { ContentComponent } from "./components/content/content.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    ContentComponent, 
    CtaComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /** Endereço de e-mail para contato (CTA) */
  email = 'ruan.rolim.137@gmail.com';

  /** Lista de prêmios conquistados */
  awards: Award[] = [
    { title: '1º Lugar', event: 'Prêmio INAC 2025', color: 'bg-yellow-400' },
    { title: '3º Lugar', event: 'Prêmio SBSI 2025', color: 'bg-blue-400' },
  ];

  /** Lista de recursos/benefícios para a seção de funcionalidades */
  features: Feature[] = [
    { 
      title: 'Sumarização Estruturada', 
      description: 'GML sintetiza PADs complexos em resumos organizados, focando nos elementos-chave do processo.', 
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z', // Ícone de raio/ideia
      iconColor: 'text-indigo-500' 
    },
    { 
      title: 'Busca Semântica Avançada', 
      description: 'Localiza informações específicas em centenas de páginas usando similaridade vetorial (embeddings), não apenas por palavras-chave.', 
      iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', // Ícone de lupa
      iconColor: 'text-green-500'
    },
    { 
      title: 'Detecção de Padrões', 
      description: 'Identifica padrões recorrentes de irregularidades entre diferentes processos administrativos, facilitando a análise preditiva.', 
      iconPath: 'M4 6h16M4 12h16m-7 6h7', // Ícone de lista/padrão
      iconColor: 'text-red-500'
    },
  ];

  /** Passos simplificados do fluxo de trabalho */
  workflowSteps: Step[] =[
    { title: 'Extração e Segmentação', description: 'O texto do PAD é extraído e dividido em partes menores (chunks) de forma otimizada.' },
    { title: 'Vetorização', description: 'Os segmentos são convertidos em representações matemáticas (embeddings) para análise semântica.' },
    { title: 'Busca Inteligente', description: 'Consultas são feitas nos vetores para encontrar rapidamente trechos juridicamente relevantes.' },
    { title: 'Sumarização GML', description: 'Um Grande Modelo de Linguagem organiza e estrutura o relatório final de auditoria.' },
  ];

  /** Parceiros e Instituições */
  partners: Partner[] = [
    { name: 'ManivaLab', description: 'Grupo de Pesquisa em Transformação Digital na Amazônia Sul Oriental - Unifesspa' },
    { name: 'PPG em Ciências Forenses', description: 'Programa de Pós-Graduação - Universidade Federal do Sul e Sudeste do Pará (Unifesspa)' },
  ];

  /** Lista de Contribuidores */
  contributors: string[] = [
    '@RuanT-310 (Ruan Rolim)', 
    '@marcelaalves89 (Marcela Souza)', 
    '@hkuribayashi (Hugo Kuribayashi)', 
    '@octo-lu (Pedro Bacelar)', 
    'Giselle Batista'
  ];
}