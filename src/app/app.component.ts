import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products_test';
  isMenuOpen = true;
  home: string = '/home'; 
  menuItems = [
    { title: 'Dashboard', subMenu: null, isOpen: false, link: '/dashboard' },
    { title: 'Report', subMenu: null, isOpen: false, link: '/report' },  
    // { title: 'Reports', subMenu: ['Report 1', 'Report 2'], isOpen: false },
    { title: 'Database', subMenu: null, isOpen: false, link: '/database' },
    { title: '.NET Developer Test', subMenu: null, isOpen: false, link: '/crudtest' } 
  ];

  userProfile = {
    name: 'John Doe',
    initials: 'JD'
  };

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  onLogout(): void {
    localStorage.removeItem('isLoggedIn');
    window.location.reload(); // Force refresh to show the login page
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu(item: any): void {
    item.isOpen = !item.isOpen;
  }
}
