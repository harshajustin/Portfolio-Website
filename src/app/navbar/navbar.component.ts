import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    const menu = document.querySelector('.menu-links') as HTMLElement;
    const icon = document.querySelector('.hamburger-icon') as HTMLElement;

    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }
}