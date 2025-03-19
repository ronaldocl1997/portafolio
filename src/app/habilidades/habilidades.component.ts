import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-habilidades',
  imports: [CommonModule,PanelModule,FieldsetModule,TagModule,Breadcrumb,CardModule,ButtonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css',
  animations: [
    // Animación de Fade In
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // Estado inicial (invisible)
      transition(':enter', [
        animate('500ms ease-out', style({ opacity: 1 })) // Animación al aparecer
      ]),
    ]),
    // Animación de Slide In
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)', opacity: 0 })), // Estado inicial (fuera de la pantalla)
      transition(':enter', [
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })) // Animación al aparecer
      ]),
    ]),
  ],
})
export class HabilidadesComponent implements OnInit{
  frontSkills: string[] = [
    'Angular',
    'Ionic',
    'Angular Material',
    'PrimeNG',
    'Nebula'
  ];

  // Lista de habilidades Back
  backSkills: string[] = [
    'Spring Boot',
    'NestJS',
    'Node.js'
  ];

  // Lista de habilidades Bases de Datos
  dbSkills: string[] = [
    'MySQL',
    'SQL Server',
    'PostgreSQL'
  ];

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
        { label: 'Habilidades Técnicas' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  };

  data = [
    {
      image: 'certificados/programacion.png',
      pdfUrl: 'assets/certificados/programacion.pdf',
      pdfName: 'ronaldo_programacion.pdf',
      title:'fundamentos de programacion'
    },
    {
      image: 'certificados/curador_datos.png',
      pdfUrl: 'assets/certificados/curador.pdf',
      pdfName: 'ronaldo_curador_datos.pdf',
      title: 'curador de datos'
    },
    {
      image: 'certificados/po.png',
      pdfUrl: 'assets/certificados/objetos.pdf',
      pdfName: 'ronaldo_poo.pdf',
      title: 'poo'
    },
    {
      image: 'certificados/redes.png',
      pdfUrl: 'assets/certificados/redes.pdf',
      pdfName: 'ronaldo_redes.pdf',
      title:'redes'
    },
  ];

  // Método para descargar el PDF
  downloadPdf(url: string, name: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
  };

}
