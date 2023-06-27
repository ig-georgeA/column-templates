import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { IgxGridModule, IgxAvatarModule, IgxSelectModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxSliderModule, IgxCheckboxModule, IgxActionStripModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { GridWithTemplatesComponent } from './grid-with-templates/grid-with-templates.component';
import { GridSliderSwitchComponent } from './grid-slider-switch/grid-slider-switch.component';
import { DetailsComponent } from './details/details.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BasicGridComponent,
    GridWithTemplatesComponent,
    GridSliderSwitchComponent,
    DetailsComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    FormsModule,
    IgxAvatarModule,
    IgxSelectModule,
    IgxChipsModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxCheckboxModule,
    IgxActionStripModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
