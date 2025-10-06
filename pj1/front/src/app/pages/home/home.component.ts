import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDarkMode = false;

  constructor() { }

  ngOnInit(): void {
    // Detecta preferência do usuário
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = prefersDark;
    this.applyMode();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyMode();
  }

  applyMode() {
    const root = document.documentElement;
    if (this.isDarkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
  }
}
