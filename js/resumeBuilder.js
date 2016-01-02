/*
This is empty on purpose! Your code to build the resume will go here.
*/

// Bio
var bio = {
  "name": "Petar Mihaylov",
  "role": "Web Developer",
  "contacts": {
    "mobile": "561.342.1678",
    "email": "petar.m@studio350.com",
    "github": "petarmihaylov",
    "location": "North Lauderdale, FL"
  },
  "skills": ["HTML5", "CSS3", "JavaScript"],
  "bioPic": "https://secure.gravatar.com/avatar/0eb64bd927318821e4494ec004cd5623?size=400px",
  "welcomeMsg": "Welcome to my Interactive Resume"
};

bio.displayContacts = function (contactType) {
  var contact = HTMLcontactGeneric.replace("%contact%", contactType);
  $("#topContacts").append(contact.replace("%data%", bio.contacts[contactType]));
  $("#footerContacts").append(contact.replace("%data%", bio.contacts[contactType]));
}


bio.displaySkills = function () {
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    // An example of using a for loop to iterate over items in an array
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
      $("#skills").append(
        HTMLskills.replace("%data%", bio.skills[indexCount]));  
    }
  };
}

// Work Experience
var work = {
  "jobs": [
    {
      "employer": "Depace Insurance and Financial Services, Inc", 
      "title": "Account Manager (Auto and Personal Umbrella)",
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

work.display = function (element, index, array) {
  $("#workExperience").append(HTMLworkStart);
  // Chrome automatically adds a </a> tag after the HTMLworkEmployer append, so Employer and Title need to be concatenated and added with one append()
  $(".work-entry:last").append(
    HTMLworkEmployer.replace("%data%", work.jobs[index].employer) +
    HTMLworkTitle.replace("%data%", work.jobs[index].title)
    );
  $(".work-entry:last").append(
    HTMLworkDates.replace("%data%", work.jobs[index].dates)
    );
  $(".work-entry:last").append(
    HTMLworkLocation.replace("%data%", work.jobs[index].location)
    );
  $(".work-entry:last").append(
    HTMLworkDescription.replace("%data%", work.jobs[index].description)
    );
}

// Edication
var education = {
  "schools": [
    {
      "name": "Flroida Atlantic University",
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

education.displaySchools = function (element, index, array) {
  $("#education").append(HTMLschoolStart);
  $(".education-entry:last").append(
    HTMLschoolName.replace("%data%", education.schools[index].name) +
    HTMLschoolDegree.replace("%data%", education.schools[index].degree)
  );
  $(".education-entry:last").append(
    HTMLschoolLocation.replace("%data%", education.schools[index].location)
  );
  $(".education-entry:last").append(
    HTMLschoolDates.replace("%data%", education.schools[index].dates)
  );

  if (education.schools[index].majors.length > 0) {
    // An example of using a for loop to iterate over items in an array
    for (var indexCount = 0; indexCount < education.schools[index].majors.length; indexCount++) {
      $(".education-entry:last").append(
        HTMLschoolMajor.replace("%data%", education.schools[index].majors[indexCount]));  
    }
  };
}

education.displayOnlineCourses = function (element, index, array) {
  $("#education").append(HTMLschoolStart);
  $(".education-entry:last").append(
    HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title) +
    HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school)
  );
  $(".education-entry:last").append(
    HTMLonlineDates.replace("%data%", education.onlineCourses[index].date)
  );
  $(".education-entry:last").append(
    HTMLonlineURL.replace("%data%", education.onlineCourses[index].url)
  );
}

var projects = {
  "projects" : [
  {
    "title": "Yencies.com",
    "dates": "January 2013",
    "description": "Created a WordPress powered promotional website for Yencies - a company that makes hand made jewelry and accessories.",
    "images": [
      "images/projects/yencies.com-thumb.png",
      "images/projects/yencies.com-branding-banner.png"
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
      "images/projects/quoterush.com-thumb.png",
    ]
  }
  ]
};

projects.display = function(element, index, array) {
  $("#projects").append(HTMLprojectStart);
  $(".project-entry:last").append(
    HTMLprojectTitle.replace("%data%", projects.projects[index].title)
  );
  $(".project-entry:last").append(
    HTMLprojectDates.replace("%data%", projects.projects[index].dates)
  );
  $(".project-entry:last").append(
    HTMLprojectDescription.replace("%data%", projects.projects[index].description)
  );

  for (var image = 0; image < projects.projects[index].images.length; image++) {
    $(".project-entry:last").append(
    HTMLprojectImage.replace("%data%", projects.projects[index].images[image])
    );
  };
}


// Other Functions
function inName() {
  var names = bio.name.trim().split(" ");
  var firstName = names[0].toLowerCase();
  var firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  var lastName = names[1].toUpperCase();
  var formattedNames = [firstName, lastName];
  var internationalizedName = formattedNames.join(" ");

  $("#internationalizeButton").css({"display": "none"});
  $("#originalizeButton").css({"display": "inline"});

  return internationalizedName;
}

function orName() {
  var originalName = bio.name;

  $("#internationalizeButton").css({"display": "inline"});
  $("#originalizeButton").css({"display": "none"});

  return originalName;
}

// INSER ELEMENTS
// Header
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(internationalizeButton);
$("#header").prepend(originalizeButton);

// Contacts (within header)
for (key in bio.contacts) {
  if (bio.contacts.hasOwnProperty(key)) {
    bio.displayContacts(key);
  }
}

// Header - append
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

// Skills
bio.displaySkills();

// Work Experience
work.jobs.forEach(work.display);

// Projects
projects.projects.forEach(projects.display);

// Education
education.schools.forEach(education.displaySchools);
$("#education").append(HTMLonlineClasses);
education.onlineCourses.forEach(education.displayOnlineCourses);

// Map
$("#mapDiv").append(googleMap);
