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

  // announcementsURL = "https://newsapi20221108120432.azurewebsites.net/api/Announcements";
  // categorieisURL = "https://newsapi20221108120432.azurewebsites.net/api/Categories";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  announcementsFromService: Announcement[] = [
    {
      title: 'Course Example',
      message: 'The course is postponed until next week',
      author: 'Course professor',
      categoryId: 'Course',
      imageUrl: 'https://www.coursearc.com/wp-content/uploads/2016/12/WebDesign.jpg',
      id: '1',
    },
    {
      title: 'General Example',
      message: 'I wish you all a happy new year',
      author: 'Random person',
      categoryId: 'General',
      imageUrl: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2019/12/happy-new-year.jpeg',
      id: '2',
    },
    {
      title: 'Laboratory Example',
      message: 'Next time we will learn about the new technology',
      author: 'Laboratory professor',
      categoryId: 'Laboratory',
      imageUrl: 'https://www.homecareinsight.co.uk/2020/07/connected-technology.jpg',
      id: '3',
    },
  ];

  listOfCategories: Category[] = [
    { id: '1', name: 'Course' },
    { id: '2', name: 'General' },
    { id: '3', name: 'Laboratory' },
  ];

  //OFFLINe
  getListOfCategories(): Observable<Category[]> {
    console.log(this.listOfCategories)
    return of(this.listOfCategories);
  }

  getAnnouncements(): Observable<Announcement[]> {
    console.log(this.announcementsFromService)
    return of(this.announcementsFromService);
  }

  addAnnouncement(newAnnouncement: Announcement) {
    newAnnouncement.id = (Math.max(...this.announcementsFromService.map(a => Number(a.id))) + 1).toString();
    this.announcementsFromService.push(newAnnouncement);
    console.log(newAnnouncement)
  }


  editAnnouncement(editedAnnouncement) {
    this.announcementsFromService = this.announcementsFromService.map(announcement => announcement.id == editedAnnouncement.id ? editedAnnouncement : announcement);
    console.log(editedAnnouncement)
  }

  deleteAnnouncement(deletedAnnouncement) {
    this.announcementsFromService = this.announcementsFromService.filter(announcement => announcement.id != deletedAnnouncement.id);
    console.log(deletedAnnouncement)
  }

  //API
  // getListOfCategories(): Observable<Category[]> {
  //   return this.httpClient.get<Category[]>(this.categorieisURL, this.httpOptions);
  // }

  // getAnnouncements(): Observable<Announcement[]> {
  //   return this.httpClient.get<Announcement[]>(this.announcementsURL, this.httpOptions);
  // }

  // addAnnouncement(newAnnouncement: Announcement) {
  //   this.httpClient.post<Announcement>(this.announcementsURL, newAnnouncement, this.httpOptions).subscribe();

  //   console.log(newAnnouncement)
  // }

  // editAnnouncement(editedAnnouncement) {
  //   this.httpClient.put(this.announcementsURL + '/' + editedAnnouncement.id, editedAnnouncement, this.httpOptions).subscribe();

  //   console.log(editedAnnouncement)
  // }

  // deleteAnnouncement(deletedAnnouncement) {
  //   this.httpClient.delete(this.announcementsURL + '/' + deletedAnnouncement.id, this.httpOptions).subscribe();
  // }

}
