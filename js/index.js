import("../styles.scss");

import { Renderer } from "./renderer.js";
import { getCourses } from "./data-fetcher.js";

const ALL_TAG = "all";

class CourseManager {
  allCourses = [];

  _category = ALL_TAG;
  _search = "";

  constructor() {
    this.container = document.getElementById("courses");
    this.tagsContainer = document.getElementById("tags");

    this.searchInput = document.querySelector(".navbar__search-input");

    this.fetchData();

    this.searchInput.addEventListener("input", this.onSearchChange);
  }

  init(cards) {
    this.allCourses = cards;

    this.updateCategoryCounts(this.allCourses);
    this.render(this.allCourses);
  }

  fetchData() {
    getCourses(this._page).then((cards) => {
      this.init([...this.allCourses, ...cards]);
    });
  }

  onSearchChange = (event) => {
    const searchTerm = event.currentTarget.value.toLowerCase();

    this._search = searchTerm.toLowerCase();

    this.filter();
  };

  onTagClick = (event) => {
    const item = event.currentTarget;

    const category = this.getCategory(item);
    this.highlightActiveCategory(item);

    this._category = category;

    this.filter();
  };

  filter() {
    let cards = this.allCourses;

    cards = this.filterCoursesByCategory(cards);
    cards = this.filterCoursesBySearchTerm(cards);

    this.render(cards);
  }

  getCategory(item) {
    return item.textContent.trim().toLowerCase().replace(/\d/g, "");
  }

  countCategories(courses) {
    return courses.reduce((accumulator, course) => {
      const tag = course.tag;
      if (accumulator[tag]) {
        accumulator[tag]++;
      } else {
        accumulator[tag] = 1;
      }
      return accumulator;
    }, {});
  }

  updateCategoryCounts(courses) {
    const categoryCounts = {
      All: courses.length,
      ...this.countCategories(courses),
    };

    this.tagsContainer.textContent = "";

    this._tagElements = Object.entries(categoryCounts).map(([name, count]) => {
      const tag = Renderer.createTag(name, count);

      tag.addEventListener("click", this.onTagClick);

      return tag;
    });

    this._tagElements.forEach((tag) => this.tagsContainer.appendChild(tag));
  }

  filterCoursesByCategory(cards) {
    if (this._category === ALL_TAG) {
      return cards;
    }

    return cards.filter((card) => card.tag.toLowerCase() === this._category);
  }

  filterCoursesBySearchTerm(cards) {
    return cards.filter((card) =>
      card.name.toLowerCase().includes(this._search)
    );
  }

  highlightActiveCategory = (activeItem) => {
    this._tagElements.forEach((item) => {
      item.classList.remove("active");
    });
    activeItem.classList.add("active");
  };

  render(courses) {
    this.container.textContent = "";

    courses.forEach((course) => {
      const elem = Renderer.createCourseElement(course);

      this.container.appendChild(elem);
    });
  }

  destroy() {
    this._tagElements.forEach((tag) =>
      tag.removeEventLister("click", this.onTagClick)
    );

    this.searchInput.removeEventListener("input", this.onSearchChange);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CourseManager();
});
