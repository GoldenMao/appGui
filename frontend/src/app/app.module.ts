import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpsService } from './network/https.service';
import { HomeComponent } from './component/home/home.component';
import { ShebaoComponent } from './components/shebao/shebao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShebaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
