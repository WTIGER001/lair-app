import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { WorkspaceLaunchComponent } from './workspace-launch/workspace-launch.component';
import { WorkspaceCodingComponent } from './workspace-coding/workspace-coding.component';
import { WorkspaceSearchComponent } from './workspace-search/workspace-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'workspaces', component: WorkspacesComponent },
  { path: 'workspaces/new', component: WorkspaceComponent },
  { path: 'workspaces/search', component: WorkspaceSearchComponent },
  { path: 'workspace/:id', component: WorkspaceComponent },
  { path: 'workspace/:id/launching', component: WorkspaceLaunchComponent },
  { path: 'workspace/:id/coding', component: WorkspaceCodingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
