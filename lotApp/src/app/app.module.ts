import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './popups/alert/alert.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helper/ErrorInterceptor';
import { JwtInterceptor } from './_helper/JWTInterceptor';
import { LoaderInterceptorService } from './_Services/loader-interceptor.service';
import { FormsModule } from '@angular/forms';
import { TirajComponent } from './components/tiraj/tiraj.component';
import { AddTirajComponent } from './components/add-tiraj/add-tiraj.component';
import { EditTirajComponent } from './components/edit-tiraj/edit-tiraj.component';
import { PTirajComponent } from './pages/p-tiraj/p-tiraj.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JCrumbsComponent } from './components/j-crumbs/j-crumbs.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { PgameComponent } from './pages/pgame/pgame.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { DelComponent } from './components/del/del.component';
import { LoaderComponent } from './loader/loader.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { BankComponent } from './pages/bank/bank.component';
import { AddGamesComponent } from './components/add-games/add-games.component';
import { GamesComponent } from './pages/games/games.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { EditGamesComponent } from './components/edit-games/edit-games.component';
import { ModegamesComponent } from './pages/modegames/modegames.component';
import { ModeGamesCtrlComponent } from './components/mode-games-ctrl/mode-games-ctrl.component';
import { WinGamesComponent } from './pages/win-games/win-games.component';
import { SitewebComponent } from './siteweb/siteweb.component';
import { PvComponent } from './pages/pv/pv.component';
import { UserComponent } from './pages/user/user.component';
import { ConfigComponent } from './pages/config/config.component';
import { MainComponent } from './Game/main/main.component';
import { LoginGameComponent } from './Game/login-game/login-game.component';
import { RegGameComponent } from './Game/reg-game/reg-game.component';
import { GameRoutingModule } from './game-routing.module';
import { MenuComponent } from './Game/menu/menu.component';
import { GameComponent } from './Game/game/game.component';
import { CartComponent } from './Game/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    TirajComponent,
    AddTirajComponent,
    EditTirajComponent,
    PTirajComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    JCrumbsComponent,
    LayoutComponent,
    ProfilComponent,
    PgameComponent,
    GamesComponent,
    EditGameComponent,
    DelComponent,
    LoaderComponent,
    TicketComponent,
    BankComponent,
    AddGamesComponent,
    ListGamesComponent,
    EditGamesComponent,
    ModegamesComponent,
    ModeGamesCtrlComponent,
    WinGamesComponent,
    SitewebComponent,
    PvComponent,
    UserComponent,
    ConfigComponent,
    MainComponent,
    LoginGameComponent,
    RegGameComponent,
    MenuComponent,
    GameComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
   // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
