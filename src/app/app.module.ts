import { BrowserModule } from '@angular/platform-browser';
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
    BannerBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
