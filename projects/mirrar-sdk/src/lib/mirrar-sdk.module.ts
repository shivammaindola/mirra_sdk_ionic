
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { MirrarSdkService } from './mirrar-sdk.service';
import { MirrarSdkComponent } from './mirrar-sdk.component';
import { CustomSdkComponent } from './custom-sdk/custom-sdk.component';

export interface LibConfig {
  apiUrl: string;
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');


@NgModule({
  declarations: [
    MirrarSdkComponent,
    CustomSdkComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    MirrarSdkComponent,
    CustomSdkComponent
  ]
})
export class MirrarSdkModule {
  static forRoot(config: LibConfig): ModuleWithProviders<MirrarSdkModule>  {
    return {
      ngModule: MirrarSdkModule,
      providers: [
        MirrarSdkService,
        {
          provide: LibConfigService,
          useValue: config
        },
        InAppBrowser,
      ]
    };
  }
}
