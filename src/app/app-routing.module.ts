import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewStoriesComponent } from './pages/new-stories/new-stories.component';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';

const routes: Routes = [
  { path: '', component: TopStoriesComponent },
  { path: 'top-stories', component: TopStoriesComponent },
  { path: 'new-stories', component: NewStoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
