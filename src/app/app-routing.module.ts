import { LoginComponent } from './componentModules/modules/user/login/login.component';
import { NotFoundComponent } from './componentModules/not-found/not-found.component';
import { ProductComponent } from './componentModules/product/product.component';
import { UserComponent } from './componentModules/modules/user/user.component';
import { NewsComponent } from './componentModules/news/news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    redirectTo: '',
    path:'',
    pathMatch: 'full'
  },
  { path: 'user',
    component:UserComponent,
    children:[
      {
        component:LoginComponent,
        path:'login'
      }
    ]
    // loadChildren: () =>
    //   import('./componentModules/modules/user/user.module').then(m => m.UserModule)
  },
  { path: 'news',
    component: NewsComponent
  },
  { path: 'product',
    component: ProductComponent
  },
  {
    component: NotFoundComponent,
    path:'not-found'
  },
  {
    component: NotFoundComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
