import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './leftbody/banner/banner.component';
import { EnquiryformComponent } from './rightbody/enquiryform/enquiryform.component';
import { HomeComponent } from './routes/home/home.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OffersComponent } from './routes/offers/offers.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { CourseService } from './course.service';
import { ReviewService } from './review.service';
import { EnquiryService } from './enquiry.service';
import { OfferService } from './offer.service';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';
import { ReviewlistComponent } from './routes/reviews/reviewlist/reviewlist.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { OffercodePipe } from './offercode.pipe';
import { FiltercoursePipe } from './filtercourse.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { OfferbannerDirective } from './directives/offerbanner.directive';

const routes=[
{path:"",component:HomeComponent},
{path:"offices",component:OfficesComponent},
{path:"newcourses",component:NewcoursesComponent},
{path:"reviews",component:ReviewsComponent},
{path:"offers",component:OffersComponent},
{path:"virtualclass",component:VirtualclassComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnquiryformComponent,
    HomeComponent,
    NewcoursesComponent,
    ReviewsComponent,
    OffersComponent,
    OfficesComponent,
    VirtualclassComponent,
    CourselistComponent,
    CourseComponent,
    ReviewlistComponent,
    ReviewComponent,
    OffercodePipe,
    FiltercoursePipe,
    HighlightDirective,
    OfferbannerDirective
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [CourseService,ReviewService,EnquiryService,OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
