import { Component, Input } from '@angular/core';
import { Announcement } from '../other/announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement', //tag name
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent {

  displayEditForm: boolean = false;
  displayAnnouncement: boolean = true;

  toggleDisplayEditForm() {
    this.displayEditForm = !this.displayEditForm;
  }

  receiveHideEditForm($event) {
    this.displayEditForm = $event;
  }

  @Input() announcement: Announcement = {
    title: '',
    message: '',
    author: '',
    category: '',
    imageUrl: '',
    id: '',
  };

  constructor(private announcementService: AnnouncementService) {
    //work is done in ngOnInit
  }

  deleteAnnouncement(deletedAnnouncement) {
    this.announcementService.deleteAnnouncement(deletedAnnouncement);
    console.log("Announcement deleted");
    this.displayAnnouncement = false;
  }
}
