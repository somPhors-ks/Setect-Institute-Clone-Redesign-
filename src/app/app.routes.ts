import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { AcademicPage } from './Pages/academic-page/academic-page';
import { AboutUs } from './Pages/about-us/about-us';
import { Internship } from './Pages/internship/internship';
import { Facilities } from './Pages/facilities/facilities';
import { Structure } from './Pages/structure/structure';
import { AiAssistant } from './Pages/ai-assistant/ai-assistant';
import { PageNotFound } from './Pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'academic', component: AcademicPage },
  { path: 'aboutUs', component: AboutUs },
  { path: 'internship', component: Internship },
  { path: 'facilities', component: Facilities },
  { path: 'structure', component: Structure },
  { path: 'aiAssistant', component: AiAssistant },
  { path: '**', component: PageNotFound },
];
