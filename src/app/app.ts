import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';
import { WhyUsComponent } from './components/why-us/why-us';
import { CtaBannerComponent } from './components/cta-banner/cta-banner';
import { FooterComponent } from './components/footer/footer';
import { ConsultationModalComponent } from './components/consultation-modal/consultation-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    WhyUsComponent,
    CtaBannerComponent,
    FooterComponent,
    ConsultationModalComponent
  ],
  template: `
    <app-navbar (openModal)="modalOpen.set(true)" />
    <main>
      <app-hero (openModal)="modalOpen.set(true)" />
      <app-services />
      <app-why-us />
      <app-cta-banner (openModal)="modalOpen.set(true)" />
    </main>
    <app-footer />
    <app-consultation-modal [isOpen]="modalOpen()" (close)="modalOpen.set(false)" />
  `
})
export class App {
  modalOpen = signal(false);
}
export { App as AppComponent };