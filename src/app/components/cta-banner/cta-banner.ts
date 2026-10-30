import { Component, output } from '@angular/core';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  template: `
    <section id="contact" class="scroll-mt-20 py-16 sm:py-20 md:py-24 bg-[#FAF8F2] border-y border-[#626B45]/20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 bg-[#F5F1E6] border border-[#626B45]/20 p-6 sm:p-10 md:p-12 rounded">
          
          <div class="max-w-xl">
            <p class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#626B45]/70 mb-2">
              READY FOR EFFORTLESS COMPLIANCE?
            </p>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#3E442B] mb-2 sm:mb-3">
              Simplify your UAE tax obligations today.
            </h2>
            <p class="text-xs sm:text-sm text-[#626B45]/80 leading-relaxed">
              Book a free 30-minute discovery consultation with an FTA specialist. We will review your corporate tax readiness and bookkeeping status.
            </p>
          </div>

          <button 
            (click)="openModal.emit()"
            class="btn-primary w-full md:w-auto !py-3.5 sm:!py-4 !px-7 sm:!px-8 shrink-0 text-center">
            Book Free Consultation
          </button>

        </div>
      </div>
    </section>
  `
})
export class CtaBannerComponent {
  openModal = output<void>();
}
