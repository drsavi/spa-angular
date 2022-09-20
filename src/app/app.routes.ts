import { Routes } from "@angular/router";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { TelaDeLoginComponent } from "./login/tela-de-login/tela-de-login.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'feature-data-binding', component: DataBindingComponent},
    { path: 'produtos', component: ListaProdutoComponent},
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent}, //ele vai saber que usa o id
    { path: 'login', component: TelaDeLoginComponent}
];