import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultation-modal',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/45 backdrop-blur-sm animate-fadeIn">
        <div class="relative w-full max-w-md max-h-[92vh] overflow-y-auto bg-[#FAF8F2] rounded border border-[#626B45]/20 p-6 sm:p-8 text-[#626B45] shadow-[0_20px_50px_rgba(98,107,69,0.18)]">
          
          <!-- Close Button -->
          <button 
            (click)="close.emit()"
            class="cursor-pointer absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded border border-[#626B45]/20 flex items-center justify-center text-[#626B45] hover:bg-[#626B45] hover:text-[#F5F1E6] transition-colors"
            aria-label="Close modal">
            ✕
          </button>

          @if (!submitted()) {
            <p class="text-[10px] font-bold tracking-[0.2em] uppercase text-[#626B45]/70 mb-1">
              FREE 30-MINUTE DISCOVERY
            </p>
            <h3 class="text-lg sm:text-xl font-bold mb-1.5 text-[#3E442B]">Book Your UAE Tax Consultation</h3>
            <p class="text-xs text-[#626B45]/80 mb-5 leading-relaxed">
              Speak directly with an accredited specialist regarding Corporate Tax, VAT, or bookkeeping.
            </p>

            <form (ngSubmit)="submitForm()" class="space-y-3.5">
              <div>
                <label class="block text-xs font-semibold text-[#3E442B] mb-1">Full Name</label>
                <input type="text" [(ngModel)]="name" name="name" required placeholder="Ahmed Al Mansoori"
                  class="w-full px-3 py-2.5 text-sm bg-[#F5F1E6] text-[#3E442B] placeholder-[#626B45]/40 border border-[#626B45]/25 rounded focus:outline-none focus:border-[#626B45] transition-colors" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-[#3E442B] mb-1">Business Email</label>
                <input type="email" [(ngModel)]="email" name="email" required placeholder="name@company.ae"
                  class="w-full px-3 py-2.5 text-sm bg-[#F5F1E6] text-[#3E442B] placeholder-[#626B45]/40 border border-[#626B45]/25 rounded focus:outline-none focus:border-[#626B45] transition-colors" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-[#3E442B] mb-1">Phone / WhatsApp (Optional)</label>
                <input type="tel" [(ngModel)]="phone" name="phone" placeholder="+971 50 123 4567"
                  class="w-full px-3 py-2.5 text-sm bg-[#F5F1E6] text-[#3E442B] placeholder-[#626B45]/40 border border-[#626B45]/25 rounded focus:outline-none focus:border-[#626B45] transition-colors" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-[#3E442B] mb-1">Primary Requirement</label>
                <select [(ngModel)]="service" name="service"
                  class="w-full px-3 py-2.5 text-sm bg-[#F5F1E6] text-[#3E442B] border border-[#626B45]/25 rounded focus:outline-none focus:border-[#626B45] transition-colors cursor-pointer">
                  <option>Corporate Tax Compliance & Filing</option>
                  <option>VAT Registration & Returns</option>
                  <option>Bookkeeping & Accounting</option>
                  <option>Mainland / Free Zone Company Setup</option>
                </select>
              </div>

              @if (errorMessage()) {
                <p class="text-xs text-red-600 font-medium">{{ errorMessage() }}</p>
              }

              <button 
                type="submit" 
                [disabled]="isSending()"
                class="btn-primary w-full !py-3.5 !mt-5 disabled:opacity-60">
                <span>{{ isSending() ? 'Sending Request...' : 'Confirm Consultation Request' }}</span>
              </button>
            </form>
          } @else {
            <div class="py-6 sm:py-8 text-center space-y-3">
              <div class="w-12 h-12 rounded-full bg-[#626B45]/15 text-[#626B45] flex items-center justify-center mx-auto font-bold text-lg">
                ✓
              </div>
              <h4 class="text-base sm:text-lg font-bold text-[#3E442B]">Request Confirmed</h4>
              <p class="text-xs text-[#626B45]/80 leading-relaxed max-w-xs mx-auto">
                Our senior tax advisor will review your request and contact <strong class="text-[#3E442B]">{{ email() }}</strong> within 4 business hours.
              </p>
              <button (click)="resetAndClose()" class="btn-secondary !py-2 !px-4 !text-xs !mt-4">
                Back to website
              </button>
            </div>
          }

        </div>
      </div>
    }
  `
})
export class ConsultationModalComponent {
  isOpen = input<boolean>(false);
  close = output<void>();

  submitted = signal(false);
  isSending = signal(false);
  errorMessage = signal('');

  name = signal('');
  email = signal('');
  phone = signal('');
  service = signal('Corporate Tax Compliance & Filing');

  // Insert your Web3Forms Access Key here:
  private accessKey = '3ec22527-073b-4c2a-b11b-2e5eaacc286b';

  async submitForm() {
    if (!this.name() || !this.email()) {
      this.errorMessage.set('Please provide both your name and email address.');
      return;
    }

    this.isSending.set(true);
    this.errorMessage.set('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: this.accessKey,
          subject: `New FMS Crest Consultation Request: ${this.name()}`,
          from_name: 'FMS Crest Website',
          name: this.name(),
          email: this.email(),
          phone: this.phone() || 'Not provided',
          service_required: this.service(),
        })
      });

      const result = await response.json();
      if (result.success) {
        this.submitted.set(true);
      } else {
        this.errorMessage.set(result.message || 'Submission failed. Please try again or email us directly.');
      }
    } catch (err) {
      this.errorMessage.set('Network error. Please check your connection or contact info@fmscrest.com.');
    } finally {
      this.isSending.set(false);
    }
  }

  resetAndClose() {
    this.submitted.set(false);
    this.name.set('');
    this.email.set('');
    this.phone.set('');
    this.errorMessage.set('');
    this.close.emit();
  }
}
