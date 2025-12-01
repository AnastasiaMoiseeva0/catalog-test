const tagToColor = {
    'Marketing': 'green',
    'HR & Recruiting': 'yellow',
    'Development': 'purple',
    'Design': 'pink',
    'Management': 'blue',
}

export class Renderer {
    static createCourseElement(course) {
        const article = document.createElement('article');
        article.className = 'course';

        const img = document.createElement('img');
        img.className = 'course__img';
        img.src = course.img;
        img.alt = 'course image';

        const courseContainer = document.createElement('div');
        courseContainer.className = 'course__container';

        const tag = document.createElement('div');
        tag.className = `course__tag ${tagToColor[course.tag]}`;
        tag.textContent = course.tag;

        const courseName = document.createElement('h2');
        courseName.className = 'course__name';
        courseName.textContent = course.name;

        const description = document.createElement('div');
        description.className = 'course__description';

        const price = document.createElement('span');
        price.className = 'course__price';
        price.textContent = course.price;

        const slash = document.createElement('span');
        slash.className = 'course__slash';
        slash.textContent = '|';

        const instructor = document.createElement('div');
        instructor.className = 'course__instructor';
        instructor.textContent = course.instructor;

        description.appendChild(price);
        description.appendChild(slash);
        description.appendChild(instructor);

        courseContainer.appendChild(tag);
        courseContainer.appendChild(courseName);
        courseContainer.appendChild(description);

        article.appendChild(img);
        article.appendChild(courseContainer);

        return article;
    }
    
    static createTag(tag, count, isActive) {
        const navbarItem = document.createElement('p');
        navbarItem.className = `navbar__item ${isActive ? 'active' : ''}`; 
        navbarItem.textContent = tag;
    
        const tagCount = document.createElement('sup');
        tagCount.className = `tag-count`;
        tagCount.textContent = count;
    
        navbarItem.appendChild(tagCount);
    
        return navbarItem;
    }
}