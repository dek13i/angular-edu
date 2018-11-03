import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { SampleAddressFormComponent } from './sample-address-form/sample-address-form.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTreeModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleNavComponent } from './sample-nav/sample-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { SampleTreeComponent } from './sample-tree/sample-tree.component';
import { SampleDragDropComponent } from './sample-drag-drop/sample-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SamplesComponent } from './samples.component';

@NgModule({
  declarations: [SampleAddressFormComponent, SampleNavComponent, SampleTableComponent, SampleDashboardComponent, SampleTreeComponent, SampleDragDropComponent, SamplesComponent],
  imports: [
    CommonModule,
    SamplesRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule
  ]
})
export class SamplesModule { }
