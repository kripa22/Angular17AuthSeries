import { Routes } from '@angular/router';
import { AdminlayoutsComponent } from '../layouts/adminlayouts/adminlayouts.component';

export const DASHBOARD_ROUTES: Routes = [

    {
        path:'',
        component:AdminlayoutsComponent,
        children:[
            {
                path:'',
                loadComponent:()=> import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
            }
        ]
        
    }

    

];
