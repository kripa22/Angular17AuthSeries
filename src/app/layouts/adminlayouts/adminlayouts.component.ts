import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminlayouts',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './adminlayouts.component.html',
  styleUrl: './adminlayouts.component.scss'
})
export class AdminlayoutsComponent {

}
