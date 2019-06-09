import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { FormCreateComponent } from './pages/form-create/form-create.component';

const routes: Routes = [
{path:'dashboard',component: DashboardComponent },
{path:'footer',component: AppfooterComponent },
{path:'layout/footer',component: AppmenuComponent },
{path:'formcreate',component: FormCreateComponent },

{path:'',redirectTo:'dashboard',pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
