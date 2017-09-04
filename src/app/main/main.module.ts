import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeatureComponent } from './feature/feature.component';
import { ExpertComponent } from './expert/expert.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CounterComponent } from './counter/counter.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, WelcomeComponent, FeatureComponent, ExpertComponent, TestimonialComponent, GalleryComponent, CounterComponent, ContactComponent],
  exports: [MainComponent]

})
export class MainModule { }
