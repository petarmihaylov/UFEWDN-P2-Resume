// Selectors
var HTMLheader = '#header';

// Bio
var bio = {
  'name': 'Petar Mihaylov',
  'role': 'Web Developer',
  'contacts': {
    'mobile': '561.342.1678',
    'email': 'petar.m@studio350.com',
    'github': 'petarmihaylov',
    'location': 'North Lauderdale, FL'
  },
  'welcomeMessage': 'Welcome to my Interactive Resume',
  'skills': ['HTML5', 'CSS3', 'JavaScript'],
  'biopic': 'https://secure.gravatar.com/avatar/0eb64bd927318821e4494ec004cd5623?size=400px'
};

/**
 * @description Displays the contacts information
 */
bio.display = function () {
  // Iterate through the contacts
  for (var key in bio.contacts) {
    if (bio.contacts.hasOwnProperty(key)) {
      var contact = HTMLcontactGeneric.replace('%contact%', key);
      $('#topContacts').append(contact.replace('%data%', obfuscateContact(bio.contacts[key])));
      $('#footerContacts').append(contact.replace('%data%', obfuscateContact(bio.contacts[key])));
    }
    //bio.contacts.hasOwnProperty(key) ? bio.displayContacts(key) : console.log("Nothing to Show"); //equivalent to above statement
  }
  // Display the skills
  if (bio.skills.length > 0) {
    $(HTMLheader).append(HTMLskillsStart);
    // An example of using a for loop to iterate over items in an array
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
      $('#skills').append(
        HTMLskills.replace('%data%', bio.skills[indexCount]));
    }
  }
};

// Education
var education = {
  'schools': [
    {
      'name': 'Florida Atlantic University',
      'location': 'Boca Raton, FL',
      'degree': 'Bachelor\'s Degree',
      'majors': ['International Economics'],
      'dates': 'May 2005 - December 2008',
      'url': 'http://www.fau.edu'
    },
    {
      'name': 'Broward College',
      'location': 'Coconut Creek, FL',
      'degree': 'Associates Degree',
      'majors': ['Computer Science'],
      'dates': 'December 2012 - May 2013',
      'url': 'http://www.broward.edu'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Intro to HTML and CSS',
      'school': 'Udacity',
      'date': 'December 2015',
      'url': 'http://udacity.com'
    },
    {
      'title': 'The Complete Web Developer Course',
      'school': 'Udemy',
      'date': 'May 2015',
      'url': 'https://www.udemy.com/complete-web-developer-course/learn/'
    }
  ]
};

/**
 * @description Displays the higher education schools experience
 */
education.display = function () {
  var selectorEducation = '#education';
  var selectorEducationLast = '.education-entry:last';
  for (var school in education.schools) {
    if (education.schools.hasOwnProperty(school)) {
      $(selectorEducation).append(HTMLschoolStart);
      $(selectorEducationLast).append(
        HTMLschoolName.replace('%data%', education.schools[school].name) +
        HTMLschoolDegree.replace('%data%', education.schools[school].degree)
      );
      $(selectorEducationLast).append(
        HTMLschoolLocation.replace('%data%', education.schools[school].location)
      );
      $(selectorEducationLast).append(
        HTMLschoolDates.replace('%data%', education.schools[school].dates)
      );

      if (education.schools[school].majors.length > 0) {
        // An example of using a for loop to iterate over items in an array
        for (var indexCount = 0; indexCount < education.schools[school].majors.length; indexCount++) {
          $(selectorEducationLast).append(
            HTMLschoolMajor.replace('%data%', education.schools[school].majors[indexCount]));
        }
      }
    }
  }

  $(selectorEducation).append(HTMLonlineClasses);
  for (var onlineCourse in education.onlineCourses) {
    if (education.onlineCourses.hasOwnProperty(onlineCourse)) {
      $(selectorEducation).append(HTMLschoolStart);
      $(selectorEducationLast).append(
        HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title) +
        HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school)
      );
      $(selectorEducationLast).append(
        HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].date)
      );
      $(selectorEducationLast).append(
        HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url)
      );
    }
  }
};

// Work Experience
var work = {
  'jobs': [
    {
      'employer': 'Depace Insurance and Financial Services, Inc',
      'title': 'Account Manager (Auto and Personal Umbrella)',
      'location': 'Coral Springs, FL',
      'dates': 'October 2012 - May 2015',
      'description': 'Managed client\'s personal auto and umbrella insurance needs. Provided exceptional service through personalized attention and individual recommendations. Managed over 300 auto and umbrella policies each year.'
    },
    {
      'employer': 'Ultimate Software',
      'title': 'Rapid Response Professional',
      'location': 'Weston, FL',
      'dates': 'May 2015 - Present',
      'description': 'Helped clients troubleshoot payroll critical issues. Ensured that customers achieve their business goals by helping them navigate and configure, as well as troubleshoot and maintain their UltiPro Core product.'
    }
  ]
};

/**
 * @description Displays the work experience
 */
work.display = function () {
  for (var job in work.jobs) {
    if (work.jobs.hasOwnProperty(job)) {
      var workEntryLast = '.work-entry:last';
      $('#workExperience').append(HTMLworkStart);
      // Chrome automatically adds a </a> tag after the HTMLworkEmployer append, so Employer and Title need to be concatenated and added with one append()
      $(workEntryLast).append(
        HTMLworkEmployer.replace('%data%', work.jobs[job].employer) +
        HTMLworkTitle.replace('%data%', work.jobs[job].title)
      );
      $(workEntryLast).append(
        HTMLworkDates.replace('%data%', work.jobs[job].dates)
      );
      $(workEntryLast).append(
        HTMLworkLocation.replace('%data%', work.jobs[job].location)
      );
      $(workEntryLast).append(
        HTMLworkDescription.replace('%data%', work.jobs[job].description)
      );
    }
  }

};

var projects = {
  'projects': [
    {
      'title': 'Yencies.com',
      'dates': 'January 2013',
      'description': 'Created a WordPress powered promotional website for Yencies - a company that makes hand made jewelry and accessories. The website promotes their hand-made, unique jewelry designs.',
      'images': ['images/projects/yencies.com-thumb.png']
    },
    {
      'title': 'MishelFit.com',
      'dates': 'May 2015',
      'description': 'Fully custom and responsive design of a landing page for MishelFit.com. Simple, elegant, and effective. The page includes a newsletter sign up form and an Instagram feed.',
      'images': ['images/projects/mishelfit.com-thumb.png']
    },
    {
      'title': 'QuoteRush.com',
      'dates': 'December 2014',
      'description': 'Fully custom and responsive design for QuoteRush.com. Redesigned the entire website from the ground up. The customer maintains the website and has now made changes to the original design and content.',
      'images': ['images/projects/quoterush.com-thumb.png']
    }
  ]
};

/**
 * @description Displays the completed projects
 */
projects.display = function () {
  var selectorProjectEntryLast = '.project-entry:last';
  for (var project in projects.projects) {
    if (projects.projects.hasOwnProperty(project)) {
      $('#projects').append(HTMLprojectStart);
      $(selectorProjectEntryLast).append(
        HTMLprojectTitle.replace('%data%', projects.projects[project].title)
      );
      $(selectorProjectEntryLast).append(
        HTMLprojectDates.replace('%data%', projects.projects[project].dates)
      );
      $(selectorProjectEntryLast).append(
        HTMLprojectDescription.replace('%data%', projects.projects[project].description)
      );

      for (var image = 0; image < projects.projects[project].images.length; image++) {
        $(selectorProjectEntryLast).append(
          HTMLprojectImage.replace('%data%', projects.projects[project].images[image])
        );
      }
    }
  }
};


// Other Functions
/**
 * @description Internationalizes the name where it capitalized the first letter of the firs name and the entire last name. Hides the Internationalize button and makes the Originalize button available, so the name can be returned to the original way it was capitalized.
 * @constructor
 * @return {string}
 */
function inName() {
  var names = bio.name.trim().split(' ');
  var firstName = names[0].toLowerCase();
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  var lastName = names[1].toUpperCase();
  var formattedNames = [firstName, lastName];
  var internationalizedName = formattedNames.join(' ');

  $('#internationalizeButton').css({'display': 'none'});
  $('#originalizeButton').css({'display': 'inline'});

  return internationalizedName;
}

/**
 * @description Returns the internationalized name back to the original. Hides the Originalize button and makes the Internationalized button available again, so the name can again be internationalized.
 * @constructor
 * @return {string}
 */
function orName() {
  var originalName = bio.name;

  $('#internationalizeButton').css({'display': 'inline'});
  $('#originalizeButton').css({'display': 'none'});

  return originalName;
}

/**
 * @description Obfuscates a string by encapsulating it in a obfuscate class (which is set o display: none trough css) and inserts random <span>***</span> elements at random intervals in the e-mail address where *** represents a random string of characters between 1 and 16. The purpose of the function is to make it more difficult for contact information to be scraped off the page by a spambot.
 * @param {string} str - the string to obfuscated
 */
function obfuscateContact(str) {
  // Inspired by: https://perishablepress.com/best-method-for-email-obfuscation/rr
  // Generate a random number of segments
  var segments = Math.floor((Math.random() * (str.length - 3) + 1));
  var charSplit = Math.floor((str.length / segments) + 2);
  var lastChar = 0;
  var parts = [];

  while ((lastChar + charSplit) < (str.length - 1)) {
    // The Math pert helps generate a random string of characters between 1 and 16 so the pattern is harder to discern. 
    // Source: http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
    parts.push(str.slice(lastChar, (lastChar + charSplit)) + '<span>' + Math.random().toString(36).substring((Math.random() * 16) + 1) + '</span>');
    lastChar = lastChar + charSplit;
  }

  parts.push(str.slice((lastChar)));

  return '<span class="obfuscate">' + parts.join('') + '</span>';
}

// INSERT ELEMENTS
// Header
$(HTMLheader).prepend(HTMLheaderRole.replace('%data%', bio.role));
$(HTMLheader).prepend(HTMLheaderName.replace('%data%', bio.name));
$(HTMLheader).prepend(internationalizeButton);
$(HTMLheader).prepend(originalizeButton);


// Header - append
$(HTMLheader).append(HTMLbioPic.replace('%data%', bio.biopic));
$(HTMLheader).append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

// Biographical Information
bio.display();

// Work Experience
work.display();

// Education
education.display();

// Projects
projects.display();

// Map
$('#mapDiv').append(googleMap);
