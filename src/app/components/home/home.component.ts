import {
  Component,
  HostListener,
  ModuleWithProviders,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { CommonModule } from '@angular/common';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    NgbCarouselModule,
    LottieComponent,
    CarouselModule,
    CommonModule,
    NgCircleProgressModule,
  ],
  providers: [
    (
      NgCircleProgressModule.forRoot() as ModuleWithProviders<NgCircleProgressModule>
    ).providers!,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  items: any[] = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];

  options: AnimationOptions = {
    path: 'assets/images/Animation.json',
  };
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    margin: 40,
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 7,
      },
    },
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
  };

  counter: number = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY;
    const scrollTopButtonVisibility = yOffset > 3850;
    if (scrollTopButtonVisibility) {
      this.counter = 90;
    }
  }
}
