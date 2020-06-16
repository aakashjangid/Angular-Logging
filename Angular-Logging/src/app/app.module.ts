import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggerModule.forRoot({ serverLoggingUrl: '/loggingApi/logging/getLogs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.DEBUG }),
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
