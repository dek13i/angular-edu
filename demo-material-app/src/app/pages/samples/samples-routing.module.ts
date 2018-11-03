import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplesComponent } from './samples.component';

import { SampleAddressFormComponent } from './sample-address-form/sample-address-form.component';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { SampleDragDropComponent } from './sample-drag-drop/sample-drag-drop.component';
import { SampleNavComponent } from './sample-nav/sample-nav.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { SampleTreeComponent } from './sample-tree/sample-tree.component';

const routes: Routes = [
  {
    path: '',
    component: SamplesComponent,
    children: [
      { path: 'address-form', component: SampleAddressFormComponent },
      { path: 'dashboard', component: SampleDashboardComponent },
      { path: 'drag-drop', component: SampleDragDropComponent },
      { path: 'nav', component: SampleNavComponent },
      { path: 'table', component: SampleTableComponent },
      { path: 'tree', component: SampleTreeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
