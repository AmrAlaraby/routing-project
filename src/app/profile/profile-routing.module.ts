import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';

import { GraphicComponent } from './graphic/graphic.component';
import { SoftwareComponent } from './software/software.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent,
    children:[{path:'graphic',component:GraphicComponent},
      {path:'software',component:SoftwareComponent},
      {path:'application',component:ApplicationComponent},
    ]},
  {path:'skills',component:SkillsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
