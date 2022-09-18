import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NavBarMainComponent } from "../components/nav-bar-main/components/nav-bar-main.component";


import { WelcomeDashComponent } from "../components/welcome-dash/components/welcome-dash.component";
import { NgxModule } from "./ngx.module";


@NgModule({
  declarations: [
    NavBarMainComponent,
    WelcomeDashComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxModule
  ],
  exports: [
    NavBarMainComponent,
    WelcomeDashComponent,
  ],
  providers: []
})

export class SharedModule {

}
