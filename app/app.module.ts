import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LOCALE_ID } from "@angular/core";
import ptBr from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

import { AppComponent } from "./app.component";
import { CurrencyMaskDirective } from "./currency-mask.directive";
import { CurrencyI18nDirective } from "./currency-i18n.directive";

registerLocaleData(ptBr);

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CurrencyMaskDirective, CurrencyI18nDirective],
  exports: [CurrencyMaskDirective],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt"
    }
  ]
})
export class AppModule {}
