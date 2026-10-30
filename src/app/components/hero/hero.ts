import { Component, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-36 pb-8 overflow-hidden">
      
      <!-- Ambient light effect -->
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(98,107,69,0.06),transparent_60%)]"></div>

      <div class="max-w-6xl w-full mx-auto px-4 sm:px-6 my-auto py-10 sm:py-16 md:py-20">
        <div class="max-w-3xl">
          
          <!-- Trust Pill Badge -->
          <div class="reveal-up is-visible inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#626B45]/20 bg-[#FAF8F2]/90 mb-5 max-w-full">
            <span class="w-1.5 h-1.5 rounded-full bg-[#626B45] shrink-0 animate-pulse"></span>
            <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#626B45] truncate">
              FTA-ACCREDITED TAX & BOOKKEEPING SPECIALISTS
            </span>
          </div>

          <!-- Responsive Fluid Heading -->
          <h1 class="reveal-up is-visible delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight leading-[1.12] sm:leading-[1.08] text-[#3E442B] mb-5 sm:mb-6">
            Precision Tax Strategy.<br />
            Seamless Compliance for UAE SMBs.
          </h1>

          <!-- Value Proposition -->
          <p class="reveal-up is-visible delay-2 text-sm sm:text-base md:text-lg text-[#626B45]/85 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            From Corporate Tax filings and VAT registration to audit-proof bookkeeping — FMS Crest ensures your business remains fully compliant with the Federal Tax Authority with zero surprises.
          </p>

          <!-- Dual Buttons (Stacks vertically on phones, row on tablet/desktop) -->
          <div class="reveal-up is-visible delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button 
              (click)="openModal.emit()"
              class="btn-primary w-full sm:w-auto text-center">
              <span>Book a 30-Min Discovery Call</span>
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>

            <a href="#services" class="btn-secondary w-full sm:w-auto text-center">
              View Our Services
            </a>
          </div>

        </div>
      </div>

      <!-- Trust Badges Strip (Responsive grid: 2 cols on mobile, 4 cols on desktop) -->
      <div class="border-t border-[#626B45]/15 bg-[#EAE4D3]/35 backdrop-blur-sm mt-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#626B45]/80 font-medium">
            @for (badge of trustBadges; track badge) {
              <div class="flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-[#626B45] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="truncate">{{ badge }}</span>
              </div>
            }
          </div>
        </div>
      </div>

    </section>
  `
})
export class HeroComponent {
  openModal = output<void>();

  trustBadges = [
    'FTA-Registered Tax Agents',
    '100% Fixed-Fee Transparency',
    'Mainland & Free Zone Specialist',
    'Dedicated Client Financial Manager'
  ];
}
