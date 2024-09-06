import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CuentaComponent } from './componentes/cuenta/cuenta.component';
import { InfoComponent } from './componentes/info/info.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { InstagramComponent } from './componentes/instagram/instagram.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';
import { RegaloComponent } from './componentes/regalo/regalo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CuentaComponent,
    InfoComponent,
    CarrouselComponent,
    InstagramComponent,
    ResumenComponent,
    RegaloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
