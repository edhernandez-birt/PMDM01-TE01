import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ayudaPage } from './ayuda.page';

import { ayudaPageRoutingModule } from './ayuda-routing.module';
import { ComponentesModule } from 'src/app/shared/componentes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ayudaPage }]),
    ayudaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ayudaPage]
})
export class ayudaPageModule {}
