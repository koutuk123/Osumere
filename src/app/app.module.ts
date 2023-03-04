import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdComponent } from './pages/ad/ad.component';
import { FeaturesComponent } from './pages/features/features.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { InfoComponent } from './pages/info/info.component';
import { LocatComponent } from './pages/locat/locat.component';
import { ServicComponent } from './pages/servic/servic.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LinkserviceComponent } from './pages/linkservice/linkservice.component';

@NgModule({
  declarations: [
    AppComponent,
    AdComponent,
    FeaturesComponent,
    SidebarComponent,
    InfoComponent,
    LocatComponent,
    ServicComponent,
    BlogComponent,
    PartnersComponent,
    ContactsComponent,
    LinkserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
