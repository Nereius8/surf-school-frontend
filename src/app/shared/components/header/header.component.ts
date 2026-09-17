import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private translate = inject(TranslateService);
  isMenuOpen = false;
  isDarkMode = false;
  currentLang = 'en';

  constructor() {
    // 1. Idioma
    const savedLang = localStorage.getItem('lang') || 'en';
    this.currentLang = savedLang;
    this.translate.use(savedLang);

    // 2. Modo Oscuro / Claro
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme(this.isDarkMode);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme(this.isDarkMode);
  }

  private applyTheme(dark: boolean) {
    if (dark) {
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
    }
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(id: string) {
    this.isMenuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}