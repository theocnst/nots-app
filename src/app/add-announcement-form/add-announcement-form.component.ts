import { Component } from '@angular/core';
import { Category } from '../other/category';
import { Announcement } from '../other/announcement';
import { AnnouncementService } from '../services/announcement.service';


@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {

  newAnnouncement: Announcement = {
    title: '',
    message: '',
    author: '',
    category: '',
    imageUrl: '',
    id: '',
  };

  listOfCategories: Category[];

  constructor(private announcementService: AnnouncementService) {
    //work is done in ngOnInit
  }

  ngOnInit() {
    this.announcementService.getListOfCategories().subscribe((categories) => {
      this.listOfCategories = categories;
    });
  }

  addAnnouncement() {
    this.announcementService.addAnnouncement(this.newAnnouncement);
    console.log("Announcement added");
  }

  canExit() {
    if (this.newAnnouncement.title || this.newAnnouncement.message || this.newAnnouncement.author || this.newAnnouncement.category || this.newAnnouncement.imageUrl) {
      return confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    else return true;
  }
}


