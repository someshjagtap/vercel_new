import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home'
      },
      {
        label: 'Analytics',
        icon: 'pi pi-chart-bar'
      },
      {
        label: 'Agents',
        icon: 'pi pi-users'
      },
      {
        label: 'Enterprise',
        icon: 'pi pi-building'
      },
      {
        label: 'Resources',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Documentation',
            icon: 'pi pi-file'
          },
          {
            label: 'API',
            icon: 'pi pi-code'
          }
        ]
      }
    ];
  }
}