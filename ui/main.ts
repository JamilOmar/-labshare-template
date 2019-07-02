import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NewappModule} from './app/app.module';
import { enableProdMode } from '@angular/core';

if(ENABLE_PROD_MODE===true){
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(NewappModule)
  .catch(err => console.error(err));
