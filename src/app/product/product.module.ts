import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { ListboxModule } from 'primeng/listbox';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: PostDetailComponent }
  ];

@NgModule({
  declarations: [ProductListComponent, PostDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    FieldsetModule,
    ListboxModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductModule { }
