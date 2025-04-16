import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss']
})
export class ActivityFeedComponent {
  @Input() activities: any[] = [];
}