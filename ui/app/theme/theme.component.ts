import {
  ApplicationRef,
  Component,
  Optional,
  SkipSelf,
  Input,
  forwardRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  StatefulComponent,
  StatefulParent,
  StatefulService,
} from '@labshare/ngx-stateful';

export const STATE = () => ({
  selectedItem: `LABSHARE_ON_SELECTED`,
  sectionItems: [
    {
      name: 'First leftmost item',
      id: 'first-item',
      icon: 'http://placekitten.com/50/50',
    },
    {
      name: 'Second leftmost item',
      id: 'second-item',
      icon: 'http://placekitten.com/80/80',
    },
  ],
  items: [
    {name: 'Dashboard', link: 'tenant.landing', icon: 'th'},
    {name: 'Tenant', link: 'tenant.details', icon: 'th-large'},
    {name: 'Apps', link: 'tenant.apps', icon: 'rocket'},
    {name: 'Providers', link: 'tenant.providers', icon: 'sliders'},
    {name: 'APIs', link: 'tenant.api', icon: 'puzzle-piece'},
    {name: 'Users', link: 'tenant.users', icon: 'user'},
    {name: 'User Groups', link: 'tenant.user-groups', icon: 'users'},
    {name: 'Roles', link: 'tenant.roles', icon: 'warning'},
    {name: 'Permissions', link: 'tenant.permissions', icon: 'warning'},
  ],
});

export const UTILS = {};

export const PROPS = {};

@Component({
  selector: 'sc-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: StatefulParent,
      useExisting: forwardRef(() => ThemeComponent),
    },
  ],
})
export class ThemeComponent extends StatefulComponent {
  updateProps = {};

  constructor(
    public inj: ChangeDetectorRef,
    @Optional() @SkipSelf() public statefulParent: StatefulParent,
    public statefulService: StatefulService,
    public appRef: ApplicationRef,
  ) {
    super(inj, STATE, statefulParent, statefulService, appRef);
  }
}
