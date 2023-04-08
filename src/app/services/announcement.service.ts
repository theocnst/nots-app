import { Injectable } from '@angular/core';
import { Announcement } from '../other/announcement';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../other/category';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private httpClient: HttpClient) { }

  announcementsURL = "https://newsapi20221108120432.azurewebsites.net/api/Announcements";
  categorieisURL = "https://newsapi20221108120432.azurewebsites.net/api/Categories";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getListOfCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categorieisURL, this.httpOptions);
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.announcementsURL, this.httpOptions);
  }

  addAnnouncement(newAnnouncement: Announcement) {
    this.httpClient.post<Announcement>(this.announcementsURL, newAnnouncement, this.httpOptions).subscribe();

    console.log(newAnnouncement)
  }

  editAnnouncement(editedAnnouncement) {
    this.httpClient.put(this.announcementsURL + '/' + editedAnnouncement.id, editedAnnouncement, this.httpOptions).subscribe();

    console.log(editedAnnouncement)
  }

  deleteAnnouncement(deletedAnnouncement) {
    this.httpClient.delete(this.announcementsURL + '/' + deletedAnnouncement.id, this.httpOptions).subscribe();
  }

}
