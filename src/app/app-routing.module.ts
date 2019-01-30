import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path:'', redirectTo:'/content', pathMatch:'full' },
  { path:'content', component: ContentComponent  },
  { path:'Angular/:name', component: FeaturesComponent  },
  { path:'Angular/:name', component: DocsComponent  },
  { path:'Angular/:name', component: ResourcesComponent  },
  { path:'Angular/:name', component: EventsComponent  },
  { path:'Angular/:name', component: BlogComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
