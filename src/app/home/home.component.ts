import { Component } from '@angular/core';
import { Announcement } from '../other/announcement';
import { Category } from '../other/category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'notifications-app';

  announcementsFromApp: Announcement[];

  filteredAnnouncements: Announcement[];

  //method for filtering
  filterAnnouncements(selectedCategory: Category) {
    //we filter the announcementsFromApp based on the selectedCategory.id
    if (selectedCategory == undefined) {
      this.filteredAnnouncements = this.announcementsFromApp;
      return;
    }
    this.filteredAnnouncements = this.announcementsFromApp.filter(
      (announcement) => announcement.categoryId == selectedCategory.name
    );
    //sau this.announcementsFromApp.filter(announcement=>announcement.categoryObject.id==selectedCategory.id);
  }

  constructor(private announcementService: AnnouncementService) {
    //work is done in ngOnInit
  }

  ngOnInit() {
    //subscribe to the observable
    this.announcementService.getAnnouncements().subscribe((announcements) => {
      this.announcementsFromApp = announcements;
      console.log(announcements);
    });
  }
}
