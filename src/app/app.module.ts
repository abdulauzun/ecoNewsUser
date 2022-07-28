import { UserModule } from './componentModules/modules/user/user.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './componentModules/news/news.component';
import { ProductComponent } from './componentModules/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentModules/header/header.component';
import { NotFoundComponent } from './componentModules/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ProductComponent,
    HeaderComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
