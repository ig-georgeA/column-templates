import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { GridWithTemplatesComponent } from './grid-with-templates/grid-with-templates.component';
import { GridSliderSwitchComponent } from './grid-slider-switch/grid-slider-switch.component';
import { DetailsComponent } from './details/details.component';
import { ChildViewComponent } from './child-view/child-view.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'basic-grid', component: BasicGridComponent, data: { text: 'Basic grid' } },
  { path: 'grid-with-templates', component: GridWithTemplatesComponent, data: { text: 'Grid with templates' } },
  { path: 'grid-slider-switch', component: GridSliderSwitchComponent, data: { text: 'Grid-slider-switch' } },
  { path: 'details', component: DetailsComponent, data: { text: 'Details' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
