import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Services } from '../../service';
import { Resolvers } from '../../provider';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ...Services,
    ...Resolvers
  ]
})
export class CommonModules {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: CommonModules};
  }
}
