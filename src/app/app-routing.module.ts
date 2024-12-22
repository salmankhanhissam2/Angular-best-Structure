import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'login', // Lazy-load Feature1Module
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
      },
    
      {
        path: '', // Default route
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**', // Wildcard route for 404
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
