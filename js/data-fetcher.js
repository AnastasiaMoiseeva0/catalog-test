const MOCK_DATA = [
  {
    img: "./images/task1.jpg",
    tag: "Marketing",
    name: "The Ultimate Google Ads Training Course",
    price: "$100",
    instructor: "by Jerome Bell",
  },
  {
    img: "./images/task2.jpg",
    tag: "Management",
    name: "Product Management Fundamentals",
    price: "$480",
    instructor: "by Marvin McKinney",
  },
  {
    img: "./images/task3.jpg",
    tag: "HR & Recruiting",
    name: "Management and Analytics",
    price: "$200",
    instructor: "by Leslie Alexander Li",
  },
  {
    img: "./images/task4.jpg",
    tag: "Marketing",
    name: "Brand Management & PR Communications",
    price: "$530",
    instructor: "by Kristin Watson",
  },
  {
    img: "./images/task5.jpg",
    tag: "Design",
    name: "Graphic Design Basic",
    price: "$500",
    instructor: "by Guy Hawkins",
  },
  {
    img: "./images/task6.jpg",
    tag: "Management",
    name: "Business Development Management",
    price: "$400",
    instructor: "by Dianne Russell",
  },
  {
    img: "./images/task7.jpg",
    tag: "Development",
    name: "Highload Software Architecture",
    price: "$600",
    instructor: "by Brooklyn Simmons",
  },
  {
    img: "./images/task8.jpg",
    tag: "HR & Recruiting",
    name: "Human Resources – Selection and Recruitment",
    price: "$150",
    instructor: "by Kathryn Murphy",
  },
  {
    img: "./images/task9.jpg",
    tag: "Design",
    name: "User Experience. Human-centered Design",
    price: "$240",
    instructor: "by Cody Fisher",
  },
];

export const getCourses = async () => {
  return MOCK_DATA;
};
