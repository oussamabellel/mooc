import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Chart } from 'chart.js';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { DataTableModule } from "angular-6-datatable";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ParentComponent } from './components/parent/parent.component';
import { StudentComponent } from './components/student/student.component';
import { NavbarHomeComponent } from './components/home/navbar_home/navbar-home.component';
import { MenuStudentComponent } from './components/student/menu-student/menu-student.component';
import { NavbarStudentComponent } from './components/student/navbar-student/navbar-student.component';
import { MescoursComponent } from './components/student/mescours/mescours.component';
import { NouveauteComponent } from './components/student/nouveaute/nouveaute.component';
import { AuthGuard } from './auth.guard';
import { ModuleContentComponent } from './components/student/ModuleContent/module-content.component';
import { BuycoursComponent } from './components/student/buycours/buycours.component';
import { SchoolmoovComponent } from './components/schoolmoov/schoolmoov.component';
import { DashboardComponent } from './components/student/dashboard/dashboard.component';
import { ProgressionComponent } from './components/student/progression/progression.component';
import { ResultsComponent } from './components/student/results/results.component';
import { ProfilComponent } from './components/student/profil/profil.component';
import { CoursComponent } from './components/student/cours/cours.component';
import { SidebarComponent } from './components/parent/sidebar/sidebar.component';
import { ChildconnexionComponent } from './components/parent/childconnexion/childconnexion.component';
import { ChildresultsComponent } from './components/parent/childresults/childresults.component';
import { ChildchartsComponent } from './components/parent/childcharts/childcharts.component';
import { CreateaccountComponent } from './components/parent/createaccount/createaccount.component';
import { AssochildComponent } from './components/parent/assochild/assochild.component';
import { HistoryComponent } from './components/parent/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';
import { ChildrenresultComponent } from './components/parent/childrenresult/childrenresult.component';
import { AddcreditsComponent } from './components/parent/addcredits/addcredits.component';
import { ResultsdetailsComponent } from './components/student/resultsdetails/resultsdetails.component';
import { SubscribeComponent } from './components/parent/subscribe/subscribe.component';
import { AbonnementComponent } from './components/parent/abonnement/abonnement.component';
import { SubscribtionComponent } from './components/student/subscribtion/subscribtion.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    TeacherComponent,
    ParentComponent,
    StudentComponent,
    NavbarHomeComponent,
    MenuStudentComponent,
    NavbarStudentComponent,
    MescoursComponent,
    NouveauteComponent,
    ModuleContentComponent,
    BuycoursComponent,
    SchoolmoovComponent,
    DashboardComponent,
    ProgressionComponent,
    ResultsComponent,
    ProfilComponent,
    CoursComponent,
    SidebarComponent,
    ChildconnexionComponent,
    ChildresultsComponent,
    ChildchartsComponent,
    CreateaccountComponent,
    AssochildComponent,
    HistoryComponent,
    LoginComponent,
    ChildrenresultComponent,
    AddcreditsComponent,
    ResultsdetailsComponent,
    SubscribeComponent,
    AbonnementComponent,
    SubscribtionComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
