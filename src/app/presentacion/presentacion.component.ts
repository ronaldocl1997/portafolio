import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CardModule } from 'primeng/card';
import { NgStyle } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { DividerModule } from 'primeng/divider';




@Component({
  selector: 'app-presentacion',
  imports: [ButtonModule,CardModule,NgStyle,Breadcrumb,DividerModule],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // Estado inicial (invisible)
      transition(':enter', [animate('1000ms ease-in', style({ opacity: 1 }))]), // Animación de entrada
    ]),
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })), // Estado inicial (invisible y desplazado)
      transition(':enter', [animate('1000ms 200ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))]), // Animación de entrada con retraso
    ]),
  ],
})
export class PresentacionComponent {

  
  items: MenuItem[] | undefined;
  
  home: MenuItem | undefined;

  descargarCV() {
    const url = 'assets/cv/cv_ronaldo.pdf';
    const nombreArchivo = 'RONALDO_CV.pdf';

    const link = document.createElement('a');
    link.href = url;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  ngOnInit() {
    this.items = [
        { label: 'Inicio' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  };

  redirigirWhatsApp() {
    window.open('https://wa.me/522283114787', '_blank');
  }
}
