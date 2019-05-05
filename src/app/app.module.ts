import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ChloroplethComponent } from "./visualizations/chloropleth/chloropleth.component";

@NgModule({
  declarations: [AppComponent, ChloroplethComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
