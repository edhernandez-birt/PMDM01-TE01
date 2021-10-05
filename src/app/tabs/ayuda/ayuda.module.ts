import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ayudaPage } from './ayuda.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ayudaPageRoutingModule } from './ayuda-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ayudaPage }]),
    ayudaPageRoutingModule,
  ],
  declarations: [ayudaPage]
})
export class ayudaPageModule {}
