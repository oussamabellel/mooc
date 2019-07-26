import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ParentComponent } from './components/parent/parent.component';
import { StudentComponent } from './components/student/student.component';
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
import { ChildconnexionComponent } from './components/parent/childconnexion/childconnexion.component';
import { ChildresultsComponent } from './components/parent/childresults/childresults.component';
import { AssochildComponent } from './components/parent/assochild/assochild.component';
import { createComponent } from '@angular/compiler/src/core';
import { ChildchartsComponent } from './components/parent/childcharts/childcharts.component';
import { CreateaccountComponent } from './components/parent/createaccount/createaccount.component';
import { HistoryComponent } from './components/parent/history/history.component';
import { ChildrenresultComponent } from './components/parent/childrenresult/childrenresult.component';
import { AddcreditsComponent } from './components/parent/addcredits/addcredits.component';
import { SubscribeComponent } from './components/parent/subscribe/subscribe.component';
import { SubscribtionComponent } from './components/student/subscribtion/subscribtion.component';

const routes: Routes = [

  {
    path: 'student',
    component: StudentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'mescours', component: MescoursComponent },
      { path: 'nouveaute', component: NouveauteComponent },
      { path: 'mescours/:id', component: ModuleContentComponent },
      { path: 'buycours', component: BuycoursComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progression', component: ProgressionComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'cours', component: CoursComponent },
      { path: 'mysubs', component: SubscribtionComponent },
      { path: 'mysubs/:id', component: CoursComponent }
    ]
  },
  {
    path: 'parent',
    component: ParentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ChildresultsComponent, pathMatch: 'full' },
      { path: './:id', component: ChildrenresultComponent },
      { path: 'childconx', component: ChildconnexionComponent },
      { path: 'childresults', component: ChildresultsComponent },
      { path: 'childresults/:id', component: ChildrenresultComponent },
      { path: 'childcharts', component: ChildchartsComponent },
      { path: 'create', component: CreateaccountComponent },
      { path: 'associate', component: AssochildComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'addcredits', component: AddcreditsComponent },
      { path: 'subscribe', component: SubscribeComponent }
    ]
  },
  {
    path: 'schoolmoov',
    component: SchoolmoovComponent
  },

  {
    path: 'data',
    component: TestComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'student',
    component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
