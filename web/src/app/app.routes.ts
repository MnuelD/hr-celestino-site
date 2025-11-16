import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Candidato } from './pages/candidato/candidato';
import { Empresa } from './pages/empresa/empresa';
import { Formacao } from './pages/formacao/formacao';
import { Blog } from './pages/blog/blog';
import { Contacto } from './pages/contacto/contacto';
import { Orcamento } from './pages/orcamento/orcamento';


export const routes: Routes = [
  {
    path: '',component: Home,   // rota padrão
  },
  {
    path: 'candidato',component: Candidato,   // rota padrão
  },
  {
    path: 'empresa',component: Empresa,   // rota padrão
  },
  {
    path: 'formacao',component: Formacao,   // rota padrão
  },
  {
    path: 'blog',component: Blog,   // rota padrão
  },
  {
    path: 'contacto',component: Contacto,   // rota padrão
  },
  {
    path: 'orcamento',component: Orcamento,   // rota padrão
  },
  {
    path: '**',
    redirectTo: '',             // caso a rota não exista → volta ao home
  }
];
