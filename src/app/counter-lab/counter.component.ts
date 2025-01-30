import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `<div>
    Counter Stuff Goes Here
    <br />
    <ul class="menu menu-lg bg-base-200 rounded-box w-56">
      <li><a routerLink="ui" class="link">UI</a></li>
      <li><a routerLink="prefs" class="link">Prefs</a></li>
    </ul>

    <router-outlet />
  </div> `,
  styles: ``,
})
export class CounterComponent {}
