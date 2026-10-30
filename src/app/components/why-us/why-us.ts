import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  template: `
    <section id="about" class="scroll-mt-20 py-16 sm:py-24 md:py-32 bg-[#F5F1E6] border-t border-[#626B45]/15">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <!-- Left Column: Big Metrics -->
          <div class="lg:col-span-5 space-y-8 sm:space-y-10">
            <div>
              <p class="text-[11px] font-bold tracking-[0.2em] uppercase text-[#626B45]/75 mb-2.5">
                THE FMS CREST ADVANTAGE
              </p>
              <div class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#3E442B] font-mono mb-1.5">
                500+
              </div>
              <p class="text-xs font-semibold tracking-[0.16em] uppercase text-[#626B45]/80">
                UAE BUSINESSES TRUST OUR GUIDANCE
              </p>
            </div>

            <div class="w-16 h-[1.5px] bg-[#626B45]/25"></div>

            <div class="grid grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#3E442B] font-mono mb-1">
                  10+
                </div>
                <p class="text-[11px] font-semibold tracking-wider uppercase text-[#626B45]/70">
                  Years UAE Experience
                </p>
              </div>

              <div>
                <div class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#3E442B] font-mono mb-1">
                  0
                </div>
                <p class="text-[11px] font-semibold tracking-wider uppercase text-[#626B45]/70">
                  FTA Late Penalties
                </p>
              </div>
            </div>
          </div>

          <!-- Right Column: Narrative & Value Cards -->
          <div class="lg:col-span-7">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-[#3E442B] mb-4 sm:mb-6">
              Deep UAE tax expertise.<br />
              Commercial clarity that protects your profit.
            </h2>

            <p class="text-xs sm:text-sm md:text-base text-[#626B45]/85 leading-relaxed mb-8">
              The UAE tax regulatory environment demands precision. Evolving FTA decisions, Corporate Tax thresholds, and strict VAT audit standards leave no room for guesswork. FMS Crest acts as your dedicated in-house tax division—delivering the technical depth of a Big Four firm with the speed, transparency, and personal care your business deserves.
            </p>

            <div class="space-y-3 sm:space-y-4">
              @for (item of keyPoints; track item.title) {
                <div class="p-4 sm:p-5 rounded border border-[#626B45]/15 bg-[#FAF8F2] flex items-start gap-3 sm:gap-4">
                  <div class="w-5 h-5 rounded-full bg-[#626B45]/15 text-[#626B45] flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 class="text-xs sm:text-sm font-bold text-[#3E442B] mb-0.5">{{ item.title }}</h4>
                    <p class="text-[11px] sm:text-xs text-[#626B45]/80 leading-relaxed">{{ item.desc }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class WhyUsComponent {
  keyPoints = [
    {
      title: 'FTA-Registered & Authorized Tax Agents',
      desc: 'All advisory and filing procedures are managed directly by licensed UAE tax professionals.'
    },
    {
      title: 'Dedicated Senior Client Manager',
      desc: 'Direct WhatsApp and email access to your assigned finance specialist — no ticketing delays.'
    },
    {
      title: 'Guaranteed Transparent Fixed-Fee Pricing',
      desc: 'Know your exact monthly investment upfront with zero hidden surprise retainers.'
    }
  ];
}
