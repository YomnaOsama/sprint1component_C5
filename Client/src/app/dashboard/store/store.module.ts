import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {StoreRoutingModule} from './store-routing.module';
import { FormsModule } from '@angular/forms';
import {ThemeModule} from '../../@theme/theme.module';
import { StoreService } from './store.service';


@NgModule({
  imports: [ ThemeModule, StoreRoutingModule, FormsModule],
  providers:[StoreService],
  declarations: [StoreComponent]
})
export class StoreModule { }