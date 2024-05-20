
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,

} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';



const HttpLoaderFactory = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

const httpCompilerFactory=()=> new TranslateMessageFormatCompiler();

const translateLoader: Provider = {
  provide: TranslateLoader,
  useFactory: HttpLoaderFactory,
  deps: [HttpClient],
};

const translateCompiler:Provider={
  provide:TranslateCompiler,
  useFactory:httpCompilerFactory,
}
const routes: Routes = [];

@NgModule({
  imports: [HttpClientModule, TranslateModule,CommonModule],

  exports: [RouterModule],

  providers: [],
})
export class AppTranslateModule {


  static forRoot(): ModuleWithProviders<AppTranslateModule> {
    return TranslateModule.forRoot({
      loader: translateLoader,
      compiler: translateCompiler,
      // loader: {
      //   provide: translateLoader,
      //   useFactory: HttpLoaderFactory,
      //   deps: [HttpClient],
      // },
    });
  }

  static forChild(): ModuleWithProviders<AppTranslateModule> {
    return TranslateModule.forRoot({
      loader: translateLoader,
      compiler: translateCompiler,
      isolate:false,
    });
  }
}
