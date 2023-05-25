import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Category } from '../other/category';
import { Announcement } from '../other/announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent {

  constructor(private announcementService: AnnouncementService) { }


  @Input() announcement: Announcement = {
    title: '',
    message: '',
    author: '',
    categoryId: '',
    imageUrl: '',
    id: '',
  };

  listOfCategories: Category[];

  ngOnInit() {
    this.announcementService.getListOfCategories().subscribe((categories) => {
      this.listOfCategories = categories;
    });
  }

  @Output() isShowingEditForm = new EventEmitter<boolean>();

  hideEditForm() {
    this.isShowingEditForm.emit(false);
  }


  editAnnouncement(editedAnnouncement) {
    this.announcementService.editAnnouncement(editedAnnouncement);
    console.log("Announcement edited");
    this.hideEditForm();
  }
}
