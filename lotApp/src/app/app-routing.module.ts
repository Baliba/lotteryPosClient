import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './pages/home/home.component';
import { PTirajComponent } from './pages/p-tiraj/p-tiraj.component';
import { AuthGuard } from './_helper/AuthGuard';
import { TicketComponent } from './pages/ticket/ticket.component';
import { GamesComponent } from './pages/games/games.component';
import { ModegamesComponent } from './pages/modegames/modegames.component';
import { SitewebComponent } from './siteweb/siteweb.component';
import { PvComponent } from './pages/pv/pv.component';
import { ConfigComponent } from './pages/config/config.component';
import { UserComponent } from './pages/user/user.component';
const routes: Routes = [
    {
    path: 'admin',
    redirectTo: 'admin/home',
    pathMatch: 'full',
    },
    {
    path: 'admin/login',
    component: LoginComponent
    },
     {
    path: 'admin/user',
    component: UserComponent,
    canActivate: [AuthGuard],
    },
    {
    path: 'admin/bank',
    component: PvComponent,
    canActivate: [AuthGuard],
    },
    {
    path: 'admin/home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    },
    {
    path: 'admin/config',
    component: ConfigComponent,
    canActivate: [AuthGuard],
    },
    {
    path: 'admin/tiraj',
    component: PTirajComponent,
    canActivate: [AuthGuard],
   },
    {
    path: 'admin/games',
    component: GamesComponent,
    canActivate: [AuthGuard],
   },
     {
    path: 'admin/modegames',
    component: ModegamesComponent,
    canActivate: [AuthGuard],
   },
    {
    path: 'admin/wingame',
    component: ModegamesComponent,
    canActivate: [AuthGuard],
   },
   {
    path: 'admin/tickets/:id',
    component: TicketComponent,
    canActivate: [AuthGuard],
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// tslint:disable-next-line:eofline
export class AppRoutingModule { }