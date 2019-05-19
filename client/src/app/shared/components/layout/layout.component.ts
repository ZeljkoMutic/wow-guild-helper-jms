import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {StateService} from '../../services/state/state.service';

@Component({
  selector: 'jms-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  constructor(
    public state: StateService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  sidebarExpanded = false;

  expandSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }

  logOut() {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
  }
}