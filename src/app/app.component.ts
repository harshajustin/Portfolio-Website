import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ProfileComponent } from "./profile/profile.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactComponent, RouterOutlet, ExperienceComponent, NavbarComponent, ProfileComponent, AboutComponent, FooterComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
