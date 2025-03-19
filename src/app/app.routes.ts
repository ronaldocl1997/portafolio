import { Routes } from '@angular/router';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';

export const routes: Routes = [
    { path: '', component: PresentacionComponent }, // Ruta por defecto
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'habilidades', component: HabilidadesComponent },
    { path: '**', redirectTo: '' }, // Redirige a la ruta por defecto si la ruta no existe
];
