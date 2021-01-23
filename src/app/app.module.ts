import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ManagementComponentComponent } from './management-component/management-component.component';
import { UserManagementComponentComponent } from './user-management-component/user-management-component.component';
import { ExitComponentComponent } from './exit-component/exit-component.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
import { ProINFOComponentComponent } from './pro-info-component/pro-info-component.component';
import { ProCONTROLComponentComponent } from './pro-control-component/pro-control-component.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { DlightComponent } from './dlight/dlight.component';
import { DwsComponent } from './dws/dws.component';
import { DfanComponent } from './dfan/dfan.component';
import { DacComponent } from './dac/dac.component';


const mgtChildrenRoutes: Routes = [
  { path: 'pro-info', component: ProINFOComponentComponent },
  { path: 'user', component: UserManagementComponentComponent },
  { path: 'exit', component: ExitComponentComponent },
  { path: 'proinfo', component: ProINFOComponentComponent },
  { path: 'dlight', component: DlightComponent },
  { path: 'dfan', component: DfanComponent },
  { path: 'dac', component: DacComponent },
  { path: 'dws', component: DwsComponent },
  { path: 'pro-control', component: ProCONTROLComponentComponent },
  { path: '', redirectTo: 'pro-info', pathMatch: 'full' },
];

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponentComponent },
  {
    path: 'management',
    component: ManagementComponentComponent,
    children: mgtChildrenRoutes,
    canActivate: [LoginGuard],
  },
  { path: 'proinfo', component: ProINFOComponentComponent },
  { path: 'dlight', component: DlightComponent },
  { path: 'dfan', component: DfanComponent },
  { path: 'dac', component: DacComponent },
  { path: 'dws', component: DwsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    ManagementComponentComponent,
    UserManagementComponentComponent,
    ExitComponentComponent,
    ProINFOComponentComponent,
    ProCONTROLComponentComponent,
    DlightComponent,
    DwsComponent,
    DfanComponent,
    DacComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  providers: [LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
