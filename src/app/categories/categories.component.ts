import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { Category } from '../other/category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  @Output() selectCategoryEmitter = new EventEmitter<Category>();

  selectedCategory: Category;

  listOfCategories: Category[];

  constructor(private announcementService: AnnouncementService) {
    //work is done in ngOnInit
  }

  ngOnInit() {
    this.announcementService.getListOfCategories().subscribe((categories) => {
      this.listOfCategories = categories;
    });
  }

  //button click method
  selectCategory(selectedCategory: Category) {
    this.selectedCategory = selectedCategory;
    this.emitSelectedCategory();
  }

  emitSelectedCategory() {
    this.selectCategoryEmitter.emit(this.selectedCategory);
  }

  resetFilter() {
    this.selectedCategory = undefined;
    this.emitSelectedCategory();
  }
}
