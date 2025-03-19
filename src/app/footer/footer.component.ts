import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports:[Toolbar, ButtonModule,InputTextModule],
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
export class FooterComponent {

  email: string = "ronaldocldev@gmail.com";
  currentYear: number = new Date().getFullYear();

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];
}

}
