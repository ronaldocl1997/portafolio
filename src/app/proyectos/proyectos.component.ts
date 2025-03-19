import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DialogModule } from 'primeng/dialog';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
  selector: 'app-proyectos',
  imports: [CardModule,CarouselModule,CommonModule,DialogModule,Breadcrumb],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
  animations: [
    trigger('scaleIn', [
      state('void', style({ transform: 'scale(0.8)', opacity: 0 })), 
      transition(':enter', [animate('500ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))]),
    ]),
    trigger('fadeInLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-30px)' })),
      transition(':enter', [animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))]),
    ]),
    trigger('fadeInRight', [
      state('void', style({ opacity: 0, transform: 'translateX(30px)' })),
      transition(':enter', [animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))]),
    ]),
  ],
})
export class ProyectosComponent implements OnInit{

  imagenSeleccionada: string = '';
  mostrarDialogo: boolean = false;
  responsiveOptions: any[] | undefined;

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  proyectos = [
    {
      nombre: 'Dr clinic',
      descripcion: [
      'Gráficos interactivos',
      'Exportación a Excel',
      'Agenda con FullCalendar',
      'WebSockets(Node) para llamadas en tiempo real con el SDK de Zoom',
      'Creación y modificación de APIs con Spring Boot (JPA)',
      'Implementación de seguridad con JWT'
      ],
      imagenes: [
        'assets/proyectos/drClinic/loginDr.png',
        'assets/proyectos/drClinic/calendarioDr.png',
        'assets/proyectos/drClinic/estadisticasDr.png',
        'assets/proyectos/drClinic/carritoDr.png',
        'assets/proyectos/drClinic/crudDr.png',
      ],
      tecnologias: ['Angular 12', 'Angular Material','Spring Boot','JPA','PostgreSQL'],
    },
    {
      nombre: 'Alfatek',
      descripcion: [
      'Gráficos interactivos',
      'Exportación a Excel',
      'Cruds para manejo de informacion',
      'Creación y modificación de APIs con Spring Boot (JPA)',
      'Implementación de seguridad con JWT'
      ],
      imagenes: [
        'assets/proyectos/alfatek/alfatekGrafica.png',
        'assets/proyectos/alfatek/alfatekCrud.png',
      ],
      tecnologias: ['Angular 16', 'Angular Material','Spring Boot','JPA','PostgreSQL'],
    },
    {
      nombre: 'Dr Clinic APP',
      descripcion: [
        'CRUDs para la gestión de información',
        'Escaneo y lectura de códigos QR',
        'Integración del SDK de Zoom para videollamadas',
        'Manejo de permisos de geolocalización, cámara y almacenamiento con Cordova',
        'Implementación de seguridad mediante JWT'
      ],
      imagenes: [
        'assets/proyectos/drClinicApp/loginDrApp.png',
        'assets/proyectos/drClinicApp/calendarioDrApp.png',
        'assets/proyectos/drClinicApp/listaDrApp.png',
        'assets/proyectos/drClinicApp/listaDrApp.png',
        'assets/proyectos/drClinicApp/menuDrApp.png',
        'assets/proyectos/drClinicApp/perfilDrApp.png',
        'assets/proyectos/drClinicApp/planesDrApp.png'
      ],
      tecnologias: ['Ionic 4', 'Cordova']
    },
    {
      nombre: 'WebPoss',
      descripcion: [
        'CRUDs para la gestión de información',
        'Creacion de mapa con mapbox'
      ],
      imagenes: [
        'assets/proyectos/webPoss/mapBox.png',
      ],
      tecnologias: ['Angular 18', 'Angular Material']
    },
    {
      nombre: 'Alfatek App',
      descripcion: [
        'CRUDs para la gestión de información.',
        'Manejo de permisos de Geolocalización, Cámara, Almacenamiento, Bluetooth y WiFi con Capacitor.',
        'Lectura del equipo conectado por Bluetooth.'
      ],
      imagenes: [
        'assets/proyectos/alfatekApp/alfa1.jpeg',
        'assets/proyectos/alfatekApp/alfa2.jpeg',
        'assets/proyectos/alfatekApp/alfa3.jpeg'
      ],
      tecnologias: ['Ionic 5', 'Capacitor']
    },
    {
      nombre: 'Docs',
      descripcion: [
        'CRUDs para la gestión de información.',
        'Consumo de API Market para información externa.',
        'Implementación de seguridad mediante JWT.',
        'Creación y modificación de APIs con Nest (TYPEORM)',
      ],
      imagenes: [
        'assets/proyectos/docs/docs1.png',
        'assets/proyectos/docs/docs2.png',
      ],
      tecnologias: ['Angular 18', 'PrimeNg','Nest','PostgreSQL','TypeOrm']
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      const prevButton = document.querySelector('.p-carousel-prev') as HTMLElement;
      const nextButton = document.querySelector('.p-carousel-next') as HTMLElement;
      
      if (prevButton) {
        prevButton.setAttribute('aria-label', 'Anterior');
      }
      if (nextButton) {
        nextButton.setAttribute('aria-label', 'Siguiente');
      }
    }, 500); // Esperamos un tiempo para que el carrusel se haya renderizado completamente
  }

  ngOnInit() {
    this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1,
        },
        {
          breakpoint: '380px',
          numVisible: 1,
          numScroll: 1,
      },
    ];

    this.items = [
      { label: 'Proyectos' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  };

  abrirDialogo(imagen: string) {
    this.imagenSeleccionada = imagen;
    this.mostrarDialogo = true;
  };

}
