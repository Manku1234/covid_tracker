import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndiaComponent } from "./india/india.component";
import { StatecodeComponent } from "./statecode/statecode.component";
import { AuthService } from "./auth.service";
//import { IndiacounComponent } from './indiacoun/indiacoun.component';

@NgModule({
  declarations: [AppComponent, IndiaComponent, StatecodeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
