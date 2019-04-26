import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SampleServiceService } from './sample-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BasicHighlighter } from './app-highlighter.directive';
import { BetterDirective } from './better-directive.directive';

@NgModule({
  declarations: [AppComponent, BasicHighlighter, BetterDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SampleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
