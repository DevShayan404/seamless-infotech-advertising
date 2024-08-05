import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css',
})
export class ScrollToTopComponent {
  showScrollToTop: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY;
    const scrollTopButtonVisibility = yOffset > 200;
    this.showScrollToTop = scrollTopButtonVisibility;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
