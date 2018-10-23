import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndraCoreModule, LoggerService, ERROR_LEVEL } from 'src/indra-core';
import { ClientesModule } from './clientes/clientes.module';
import { CommonAppModule } from './common-app/common-app.module';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IndraCoreModule, ClientesModule, CommonAppModule,
  ],
  providers: [LoggerService,
    { provide: ERROR_LEVEL, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }