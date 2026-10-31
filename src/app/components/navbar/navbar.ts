import { Component, HostListener, output, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      [ngClass]="isScrolled() 
        ? 'bg-[#F5F1E6]/90 backdrop-blur-md py-4 border-b border-[#626B45]/15 shadow-[0_4px_20px_rgba(98,107,69,0.04)]' 
        : 'bg-transparent py-6 border-b border-transparent'">
      <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        <!-- Brand Logo -->
        <a href="#home" class="flex items-center group focus:outline-none" aria-label="FMS Crest Tax Consultancy">
          <img 
            src="/logo.png" 
            alt="FMS Crest Tax Consultancy" 
            class="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-9">
          @for (item of navItems; track item.id) {
            <a 
              [href]="'#' + item.id"
              (click)="activeSection.set(item.id)"
              class="relative text-xs font-semibold tracking-wide transition-colors duration-300 py-1"
              [ngClass]="activeSection() === item.id ? 'text-[#626B45]' : 'text-[#626B45]/70 hover:text-[#626B45]'">
              {{ item.label }}
              <span 
                class="absolute bottom-0 left-0 h-[1.5px] bg-[#626B45] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                [ngClass]="activeSection() === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'">
              </span>
            </a>
          }

          <a 
            [href]="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary !py-2.5 !px-5 !text-xs no-underline">
            Book Consultation
          </a>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button 
          (click)="mobileMenuOpen.set(!mobileMenuOpen())"
          class="md:hidden text-[#626B45] p-2 focus:outline-none"
          aria-label="Toggle navigation">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            @if (!mobileMenuOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            }
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Drawer -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden bg-[#FAF8F2] border-b border-[#626B45]/15 px-6 py-6 space-y-4 animate-fadeIn">
          @for (item of navItems; track item.id) {
            <a 
              [href]="'#' + item.id"
              (click)="mobileMenuOpen.set(false)"
              class="block text-sm font-medium text-[#626B45]/85 hover:text-[#626B45] py-1.5">
              {{ item.label }}
            </a>
          }
          <a 
            [href]="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            (click)="mobileMenuOpen.set(false)"
            class="w-full btn-primary !py-3 !text-xs mt-2 no-underline">
            Book Consultation
          </a>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  openModal = output<void>();

  whatsappUrl = 'https://wa.me/971543385034?text=' + encodeURIComponent('Hello FMS Crest, I would like to book a tax consultation.');

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeSection = signal('home');

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'Why FMS Crest' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }
}
