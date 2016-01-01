/*
This is empty on purpose! Your code to build the resume will go here.
*/

// Bio
var bio = {
  "name": "Petar Mihaylov",
  "role": "Web Developer",
  "contact": {
    "mobile": "561.342.1678",
    "email": "petar.m@studio350.com",
    "github": "https://github.com/petarmihaylov",
    "location": "North Lauderdale, FL"
  },
  "skills": ["HTML5", "CSS3", "JavaScript"],
  "bioPic": "https://secure.gravatar.com/avatar/0eb64bd927318821e4494ec004cd5623?size=400px",
  "welcomeMsg": "Welcome to my Interactive Resume"
};

// Work Experience
var work = {
  "jobs": [
    {
      "employer": "Depace Insurance and Financial Services, Inc", 
      "title": "Account Manager - Personal Auto and Umbrella",
      "location": "Coral Springs, FL",
      "dates": "October 2012 - May 2015",
      "description": "Manager client's personal auto and umbrella insurance needs."
    },
    {
      "employer": "Ultimate Software",
      "title": "Rapid Response Professional",
      "location": "Weston, FL",
      "dates": "May 2015 - Present",
      "description": "Helped clients troubleshoot payroll critical issues."
    }
  ]
};

// Edication
var education = {
  "schools": [
    {
      "name": "Flrida Atlantic University",
      "location": "Boca Raton, FL",
      "degree": "Bachelor's Degree",
      "majors": ["International Economics"],
      "dates": 2009,
      "url": "http://www.fau.edu"
    },
    {
      "name": "Broward College",
      "location": "Coconut Creek, FL",
      "degree": "Associates Degree",
      "majors": ["Computer Science"],
      "dates": 2012,
      "url": "http://www.broward.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "date": 2015,
      "url": "http://udacity.com"
    },
    {
      "title": "The Complete Web Developer Course",
      "school": "Udemy",
      "date": 2015,
      "url": "https://www.udemy.com/complete-web-developer-course/learn/"
    }
  ]
};

projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
var projects = {
  "projects" : [
  {
    "title": "Yencies.com",
    "dates": "January 2013",
    "description": "Created a WordPress powered promotional website for Yencies - a company that makes hand made jewelry and accessories.",
    "images": [
      "images/projects/yencies.com-branding-banner.png",
      "images/projects/yencies.com-thumb.png"
    ]
  },
  {
    "title": "MishelFit.com",
    "dates": "May 2015",
    "description": "Fully custom and responsive design of a landing page for MishelFit.com",
    "images": [
      "images/projects/mishelfit.com-thumb.png"
    ]
  },
  {
    "title": "QuoteRush.com",
    "dates": "December 2014",
    "description": "Fully custom and responsive design for QuoteRush.com. Redesigned the entire website from the ground up. The customer maintains the website and has now made changes to the original design and content.",
    "images": [
      "images/projects/yencies.com-branding-banner.png",
      "images/projects/yencies.com-thumb.png"
    ]
  }
  ]
};
