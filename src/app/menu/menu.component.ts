import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-menu',
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    CommonModule,
    InputTextModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  items: MenuItem[] | undefined;

  constructor() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/', // Navega a la ruta por defecto
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-folder',
        routerLink: '/proyectos', // Navega a la ruta de proyectos
      },
      {
        label: 'Habilidades',
        icon: 'pi pi-star',
        routerLink: '/habilidades', // Navega a la ruta de habilidades
      },
    ];
  }
}
