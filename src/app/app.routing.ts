//Imports necesarios
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

//Definir rutas
const appRoutes: Routes = [
	{path: '', component:HomeComponent},
	{path: 'inicio', component:HomeComponent},
	{path: 'login', component:LoginComponent},
	{path: 'registro', component:RegisterComponent},
	{path: '**', component: ErrorComponent}
]; 

//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);