import { Routes, RouterModule } from '@angular/router'
import { CadastroPageComponent } from './pages/cadastro-page/cadastro.component';
import { HomePageComponent } from './pages/home-page/home.component';
const routes: Routes = [
    //home
    {
        path: 'Home',
        component: HomePageComponent
    },
    //Products
    {
        path: 'Cadastro',
        component: CadastroPageComponent
    }   
];
export const RoutingModule = RouterModule.forRoot(routes);