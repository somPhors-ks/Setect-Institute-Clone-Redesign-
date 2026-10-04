import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  logo: any = 'Images/SETEC_Logo.svg';
}
