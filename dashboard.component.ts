import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: any;
  chartOptions: any;
  
  metrics = [
    { title: 'Active Agents', value: '24', icon: 'pi pi-users', trend: '+12%', color: '#4e46b4' },
    { title: 'Tasks Completed', value: '1,284', icon: 'pi pi-check-circle', trend: '+8%', color: '#3d8bfd' },
    { title: 'Success Rate', value: '94%', icon: 'pi pi-chart-line', trend: '+2%', color: '#20c997' },
    { title: 'Avg. Response Time', value: '1.2s', icon: 'pi pi-clock', trend: '-15%', color: '#fd7e14' }
  ];
  
  recentActivities = [
    { agent: 'Agent Alpha', action: 'Completed task', target: 'Data Processing', time: '2 minutes ago', avatar: 'A' },
    { agent: 'Agent Beta', action: 'Started workflow', target: 'Customer Onboarding', time: '15 minutes ago', avatar: 'B' },
    { agent: 'Agent Gamma', action: 'Updated knowledge base', target: 'Product Catalog', time: '1 hour ago', avatar: 'G' },
    { agent: 'Agent Delta', action: 'Resolved issue', target: 'Payment Processing', time: '3 hours ago', avatar: 'D' },
    { agent: 'Agent Epsilon', action: 'Generated report', target: 'Monthly Analytics', time: '5 hours ago', avatar: 'E' }
  ];

  ngOnInit() {
    this.initCharts();
  }

  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Agent Performance',
          data: [65, 59, 80, 81, 56, 55, 72],
          fill: false,
          borderColor: '#4e46b4',
          tension: 0.4
        },
        {
          label: 'Task Completion',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#3d8bfd',
          tension: 0.4
        }
      ]
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}