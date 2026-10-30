import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface ServiceItem {
  num: string;
  title: string;
  description: string;
  deliverables: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgClass],
  template: `
    <section id="services" class="scroll-mt-20 py-16 sm:py-24 md:py-32 bg-[#EAE4D3]/40 border-t border-[#626B45]/15">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header -->
        <div class="max-w-2xl mb-12 sm:mb-16">
          <p class="text-[11px] font-bold tracking-[0.2em] uppercase text-[#626B45]/75 mb-2.5">
            WHAT WE DELIVER
          </p>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#3E442B] mb-3">
            End-to-End Tax & Financial Services
          </h2>
          <p class="text-xs sm:text-sm md:text-base text-[#626B45]/80 leading-relaxed">
            Tailored tax structures and financial clarity designed for UAE businesses. Click on any card to view deliverables.
          </p>
        </div>

        <!-- Responsive Card Grid: 1 col on mobile, 2 on tablet, 3 on desktop -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          @for (service of services; track service.num) {
            <div 
              (click)="toggleCard(service.num)"
              class="group relative bg-[#FAF8F2] border border-[#626B45]/15 rounded p-6 sm:p-8 cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#626B45]/35 hover:shadow-[0_12px_28px_rgba(98,107,69,0.08)] flex flex-col justify-between">
              
              <div>
                <!-- Top Row -->
                <div class="flex items-center justify-between mb-6 pb-3 border-b border-[#626B45]/10">
                  <span class="text-xl sm:text-2xl font-bold text-[#626B45]/35 group-hover:text-[#626B45] transition-colors duration-300 font-mono">
                    {{ service.num }}
                  </span>
                  <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#626B45]/20 flex items-center justify-center text-[#626B45] transition-all duration-300 group-hover:bg-[#626B45] group-hover:text-[#F5F1E6]">
                    <span class="text-xs leading-none font-bold">
                      {{ expandedCard() === service.num ? '−' : '+' }}
                    </span>
                  </div>
                </div>

                <!-- Title & Body -->
                <h3 class="text-sm sm:text-base font-bold text-[#3E442B] mb-2.5 group-hover:text-[#626B45] transition-colors duration-200">
                  {{ service.title }}
                </h3>
                <p class="text-xs sm:text-[13px] text-[#626B45]/80 leading-relaxed mb-4">
                  {{ service.description }}
                </p>
              </div>

              <!-- Collapsible Deliverables -->
              @if (expandedCard() === service.num) {
                <div class="pt-3.5 border-t border-[#626B45]/15 space-y-2 animate-fadeIn">
                  <p class="text-[10px] uppercase font-bold tracking-wider text-[#626B45]/60 mb-1.5">Deliverables:</p>
                  @for (point of service.deliverables; track point) {
                    <div class="flex items-start gap-2 text-xs text-[#3E442B] font-medium leading-normal">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#626B45] mt-1 shrink-0"></span>
                      <span>{{ point }}</span>
                    </div>
                  }
                </div>
              } @else {
                <span class="text-[11px] font-semibold text-[#626B45]/60 group-hover:text-[#626B45] transition-colors duration-200 pt-2">
                  Inspect deliverables →
                </span>
              }

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  expandedCard = signal<string | null>('01');

  services: ServiceItem[] = [
    {
      num: '01',
      title: 'Corporate Tax Compliance',
      description: 'Navigate the UAE Corporate Tax regime with certainty. From liability assessments to annual return submissions.',
      deliverables: ['Small Business Relief eligibility evaluation', 'Annual tax return computation & filing', 'Tax structuring for Free Zone persons']
    },
    {
      num: '02',
      title: 'VAT Registration & Returns',
      description: 'Accurate VAT returns and input tax recovery strictly aligned with FTA statutory timelines.',
      deliverables: ['Quarterly VAT return preparation', 'Input tax recovery audits', 'FTA audit representation & documentation']
    },
    {
      num: '03',
      title: 'Bookkeeping & Reconciliation',
      description: 'Meticulous day-to-day transaction records that ensure your books remain permanently audit-ready.',
      deliverables: ['Monthly bank & ledger reconciliation', 'Expense categorization & payroll records', 'Cloud accounting setup (Zoho, Xero, QuickBooks)']
    },
    {
      num: '04',
      title: 'Financial Statements & Reporting',
      description: 'Executive-level financial reports prepared to international standards for banks, investors, and leadership.',
      deliverables: ['Monthly Balance Sheet & P&L statements', 'Cash flow runway forecasts', 'Year-end financial package for statutory audit']
    },
    {
      num: '05',
      title: 'UAE Company Setup & Advisory',
      description: 'Expert corporate structuring guidance for mainland, free zone, and offshore entities across all Emirates.',
      deliverables: ['Jurisdiction & license selection advice', 'Corporate bank account assistance', 'Direct FTA registration upon incorporation']
    }
  ];

  toggleCard(num: string) {
    this.expandedCard.update(current => current === num ? null : num);
  }
}
