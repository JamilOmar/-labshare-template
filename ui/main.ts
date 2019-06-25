import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NewappModule} from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(NewappModule)
  .catch(err => console.error(err));
