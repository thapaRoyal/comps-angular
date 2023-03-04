import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'collections', component: CollectionHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
