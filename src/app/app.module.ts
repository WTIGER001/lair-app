import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { WorkspaceLaunchComponent } from './workspace-launch/workspace-launch.component';
import { WorkspaceCodingComponent } from './workspace-coding/workspace-coding.component';
import { WorkspaceDetailOverviewComponent } from './workspace-detail-overview/workspace-detail-overview.component';
import { WorkspaceDetailBundlesComponent } from './workspace-detail-bundles/workspace-detail-bundles.component';
import { WorkspaceDetailDetailsComponent } from './workspace-detail-details/workspace-detail-details.component';
import { BannerTopComponent } from './banner-top/banner-top.component';
import { BannerBottomComponent } from './banner-bottom/banner-bottom.component';
import { NavComponent } from './nav/nav.component';
import { ImageBtnComponent } from './image-btn/image-btn.component';
import { WorkspaceSearchComponent } from './workspace-search/workspace-search.component';
import { WorkspaceExitDialogComponent } from './workspace-exit-dialog/workspace-exit-dialog.component';
import { ExitMenuComponent } from './controls/exit-menu/exit-menu.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from './icon-library';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { NavItemComponent } from './controls/nav-item/nav-item.component';
import { NavUsermenuComponent } from './controls/nav-usermenu/nav-usermenu.component';
import { ApiModule } from './swagger/api.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WorkspacesComponent,
    WorkspaceComponent,
    WorkspaceLaunchComponent,
    WorkspaceCodingComponent,
    WorkspaceDetailOverviewComponent,
    WorkspaceDetailBundlesComponent,
    WorkspaceDetailDetailsComponent,
    BannerTopComponent,
    BannerBottomComponent,
    NavComponent,
    ImageBtnComponent,
    WorkspaceSearchComponent,
    WorkspaceExitDialogComponent,
    ExitMenuComponent,
    DropdownComponent,
    NavItemComponent,
    NavUsermenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    new Icons(library);
  }

 }
