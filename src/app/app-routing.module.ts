import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CadastroPageComponent } from "./pages/cadastro-page/cadastro.component";
import { HomePageComponent } from "./pages/home-page/home.component";
import { ListaPageComponent } from "./pages/lista/lista.component";



const routes: Route[] = [
    {
        path: 'cadastro',
        component: CadastroPageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'lista',
        component: ListaPageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule    
    ]
})

export class AppRoutingModule{}