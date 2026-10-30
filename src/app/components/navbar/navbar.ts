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
        <a href="#home" class="flex items-center gap-3 group focus:outline-none">
          <div class="w-8 h-8 rounded border border-[#626B45]/25 flex items-center justify-center transition-all duration-300 group-hover:border-[#626B45] group-hover:bg-[#FAF8F2]">
            <svg class="w-4 h-4 text-[#626B45] transition-transform duration-300 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M4 14L12 7L20 14" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 19L12 12L20 19" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="text-[#626B45] tracking-wider text-base leading-none">
            <span class="font-bold">FMS</span>
            <span class="font-light tracking-[0.22em] ml-1.5 text-[#626B45]/75 text-xs">CREST</span>
          </div>
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

          <button 
            (click)="openModal.emit()"
            class="btn-primary !py-2.5 !px-5 !text-xs">
            Book Consultation
          </button>
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
          <button 
            (click)="mobileMenuOpen.set(false); openModal.emit()"
            class="w-full btn-primary !py-3 !text-xs mt-2">
            Book Consultation
          </button>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  openModal = output<void>();

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
