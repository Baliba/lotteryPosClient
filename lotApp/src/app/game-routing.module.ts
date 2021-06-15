
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './Game/game/game.component';
import { LoginGameComponent } from './Game/login-game/login-game.component';
import { RegGameComponent } from './Game/reg-game/reg-game.component';
import { UserComponent } from './pages/user/user.component';
import { AppGuard } from './_helper/AppGuard';
const routes: Routes = [
    {
    path: '',
    redirectTo: 'game/home',
    pathMatch: 'full',
    },
   {
    path: 'game/login',
    component: LoginGameComponent
   },
   {
    path: 'game/register',
    component: RegGameComponent
   },
   {
    path: 'game/home',
    component: GameComponent,
    canActivate: [AppGuard]
  },
   {
    path: '**',
    component: LoginGameComponent,
   }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }