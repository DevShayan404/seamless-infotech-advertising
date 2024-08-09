import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks: string[] = ['Home', 'About Us', 'Services', 'Contact Us'];
  activeLink: number = 0;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    const url = this.location.path();
    this.setActiveLinkByUrl(url);
  }

  setActiveLink(i: number, name: string) {
    this.activeLink = i;
    switch (name) {
      case 'Home':
        this.router.navigate(['']);
        break;
      case 'About Us':
        this.router.navigate(['about-us']);
        break;
      case 'Services':
        this.router.navigate(['']);
        break;
      case 'Contact Us':
        this.router.navigate(['contact-us']);
        break;

      default:
        break;
    }
  }
  setActiveLinkByUrl(url: string) {
    console.log(url);
    switch (url) {
      case ' ':
        this.activeLink = 0;
        break;
      case '/about-us':
        this.activeLink = 1;
        break;
      case '/services':
        this.activeLink = 2;
        break;
      case '/contact-us':
        this.activeLink = 3;
        break;
      default:
        this.activeLink = 0;
        break;
    }
  }
}
