import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module'; /*s*/

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);