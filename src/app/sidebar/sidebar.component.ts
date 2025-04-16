import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { icon: 'pi pi-home', label: 'Dashboard', active: true },
    { icon: 'pi pi-chart-line', label: 'Analytics' },
    { icon: 'pi pi-cog', label: 'Agents' },
    { icon: 'pi pi-users', label: 'Teams' },
    { icon: 'pi pi-book', label: 'Knowledge Base' },
    { icon: 'pi pi-cog', label: 'Settings' }
  ];
}