// Selectors
var HTMLheader = '#header';

// Bio
var bio = {
  'name': 'Petar Mihaylov',
  // 'role': '',
  'contacts': {
    'mobile': '561.342.1678',
    'email': 'petar.m@studio350.com',
    'github': 'petarmihaylov',
    'location': 'Smyrna, GA'
  },
  'welcomeMessage': '',
  'skills': ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Bootstrap', 'jQuery', 'Grunt'],
  'traits': ['Detail riented', 'Highly energetic', 'Customer focused', 'Self starter'],
  'biopic': 'https://secure.gravatar.com/avatar/0eb64bd927318821e4494ec004cd5623?size=400px'
};

/**
 * @description Displays the contacts information
 */
bio.display = function () {
  // Header
  // $(HTMLheader).prepend(HTMLheaderRole.replace('%data%', bio.role));
  $(HTMLheader).prepend(HTMLheaderName.replace('%data%', bio.name));
  $('#name').wrap('<a href="../.."></a>');

  $(HTMLheader).append(HTMLbioPic.replace('%data%', bio.biopic));
  $(HTMLheader).append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

  // Iterate through the contacts
  for (var key in bio.contacts) {
    if (bio.contacts.hasOwnProperty(key)) {
      var contact = HTMLcontactGeneric.replace('%contact%', key);
      $('#topContacts').append(contact.replace('%data%', obfuscateContact(bio.contacts[key])));
      $('#footerContacts').append(contact.replace('%data%', obfuscateContact(bio.contacts[key])));
      if (key == 'github') {
         var tobeWrapped = $("span:contains('github')").siblings('.white-text').children('.obfuscate');
         tobeWrapped.wrap('<a class=\'white-text\' href="https://www.github.com/' + bio.contacts[key] + '?tab=repositories"></a>');
      }
    }
  }

  // Display the skills
  if (bio.skills.length > 0) {
    $(HTMLheader).append(HTMLskillsStart);
    // An example of using a for loop to iterate over items in an array
    var len = bio.skills.length;
    for (var indexCount = 0; indexCount < len; indexCount++) {
      $('#skills').append(
        HTMLskills.replace('%data%', bio.skills[indexCount]));
    }
  }

  // Display the traits
  if (bio.traits.length > 0) {
    $(HTMLheader).append(HTMLtraitsStart);
    var len = bio.traits.length;
    for (var indexCount = 0; indexCount < len; indexCount++) {
      $('#traits').append(
        HTMLtraits.replace('%data%', bio.traits[indexCount]));
    }
  }
};

// Work Experience
var work = {
  'jobs': [
    {
      'employer': 'Ultimate Software',
      'title': 'Core Systems Specialist',
      'location': 'Weston, FL',
      'dates': 'May 2016 - Present',
      'description': 'Help clients troubleshoot workflow and security issues. Ensur that customers receive a holistic solution that satisfies their needs resolves their issue.'
    },
    {
      'employer': 'Ultimate Software',
      'title': 'Rapid Response Professional',
      'location': 'Weston, FL',
      'dates': 'September 2015 - May 2016',
      'description': 'Helped clients troubleshoot payroll critical issues. Ensured that customers achieve their business goals by helping them navigate and configure, as well as troubleshoot and maintain their UltiPro Core product.'
    },
    {
      'employer': 'Ultimate Software',
      'title': 'Rising Stars - Customer Success Specialist',
      'location': 'Weston, FL',
      'dates': 'May 2015 - September 2015',
      'description': 'Successfully completed 40+ courses in UltiUniversity and secured a Rapid Response Professional position even before graduating from the program.'
    },
    {
      'employer': 'Depace Insurance and Financial Services, Inc',
      'title': 'Account Manager (Auto and Personal Umbrella)',
      'location': 'Coral Springs, FL',
      'dates': 'October 2012 - May 2015',
      'description': 'Managed client\'s personal auto and umbrella insurance needs. Provided exceptional service through personalized attention and individual recommendations. Managed over 300 auto and umbrella policies each year.'
    }
  ]
};

/**
 * @description Displays the work experience
 */
work.display = function () {
  var len = work.jobs.length;
  for (var iJob = 0; iJob < len; iJob++) {
    var workEntryLast = '.work-entry:last';
    $('#workEntries-container').append(HTMLworkStart);
    // Chrome automatically adds a </a> tag after the HTMLworkEmployer append, so Employer and Title need to be concatenated and added with one append()
    $(workEntryLast).append(
      HTMLworkEmployer.replace('%data%', work.jobs[iJob].employer) +
      HTMLworkTitle.replace('%data%', work.jobs[iJob].title)
    );
    $(workEntryLast).append(
      HTMLworkDates.replace('%data%', work.jobs[iJob].dates)
    );
    $(workEntryLast).append(
      HTMLworkLocation.replace('%data%', work.jobs[iJob].location)
    );
    $(workEntryLast).append(
      HTMLworkDescription.replace('%data%', work.jobs[iJob].description)
    );
  }
};

// Projects
var projects = {
  'projects': [
    {
      'title': 'Yencies.com',
      'dates': 'January 2013',
      'description': 'Created a WordPress powered promotional website for Yencies - a company that makes hand made jewelry and accessories. The website promotes their hand-made, unique jewelry designs.',
      'images': ['images/projects/yencies.com-thumb.png'],
      'link': 'http://yencies.com'
    },
    {
      'title': 'MishelFit.com',
      'dates': 'May 2015',
      'description': 'Fully custom and responsive design of a landing page for MishelFit.com. Simple, elegant, and effective. The page includes a newsletter sign up form and an Instagram feed.',
      'images': ['images/projects/mishelfit.com-thumb.png'],
      'link': 'http://mishelfit.com'
    },
    {
      'title': 'QuoteRush.com',
      'dates': 'December 2014',
      'description': 'Fully custom and responsive design for QuoteRush.com. Redesigned the entire website from the ground up. <p><strong>Note:</strong> The customer maintains the website and has now made changes to the original design and content, which has broken some of the functionality and visual elements.</p>',
      'images': ['images/projects/quoterush.com-thumb.png'],
      'link': 'http://quoterush.com'
    },
    {
      'title': 'Classic Arcade Game Clone',
      'dates': 'January 2016',
      'description': 'A clone of the classic Frogger arcade game. Written purely in JavaScript. The point of the project is to highlight object orientation and parametarization.',
      'images': ['images/projects/classic-arcade-game-clone-thumb.png'],
      'link': '../classic-arcade-game-clone'
    },
    {
      'title': 'Website Optimization',
      'dates': 'July 2016',
      'description': 'Optimization of the Critical Rendering Path (CRP) and JavaScript code optimization to maintain a refresh rate of 60 frames per second.',
      'images': ['images/projects/website-optimization-thumb.png'],
      'link': '../website-optimization'
    },
    {
      'title': 'Neighborhood Map',
      'dates': 'November 2016',
      'description': 'Utilizes the Google Maps API as well as FourSquare APIs to pull data. Firebase backed. Built with KnockoutJS and RequireJS for modularity and separation of concerns in mind.',
      'images': ['images/projects/neighborhood-map-thumb.png'],
      'link': '../neighborhood-map'
    }
  ]
};

/**
 * @description Displays the completed projects
 */
projects.display = function () {
  var selectorProjectEntryLast = '.project-entry:last';

  var len = projects.projects.length;
  for (var iProject = 0; iProject < len; iProject++) {
    $('#projectEntries-container').append(HTMLprojectStart);
    $(selectorProjectEntryLast).append(
      HTMLprojectTitle.replace(
        '%data%', projects.projects[iProject].title).replace(
        '%link%', projects.projects[iProject].link)
    );
    $(selectorProjectEntryLast).append(
      HTMLprojectDates.replace('%data%', projects.projects[iProject].dates)
    );
    $(selectorProjectEntryLast).append(
      HTMLprojectDescription.replace('%data%', projects.projects[iProject].description)
    );

    for (var image = 0; image < projects.projects[iProject].images.length; image++) {
      $(selectorProjectEntryLast).append(
        HTMLprojectImage.replace(
          '%data%', projects.projects[iProject].images[image]).replace(
          '%link%', projects.projects[iProject].link)
      );
    }
  }
};

// Education
var education = {
  'schools': [
    {
      'name': 'Florida Atlantic University',
      'location': 'Boca Raton, FL',
      'degree': 'Pursued a Bachelor\s Degree - Not Completed',
      'majors': ['International Economics'],
      'dates': 'May 2005 - December 2008',
      'url': 'http://www.fau.edu'
    },
    {
      'name': 'Broward College',
      'location': 'Coconut Creek, FL',
      'degree': 'Pursued an Associate\s Degree - Not Completed',
      'majors': ['Computer Science'],
      'dates': 'December 2012 - May 2013',
      'url': 'http://www.broward.edu'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Intro to Ajax',
      'school': 'Udacity',
      'date': 'June 2016',
      'url': 'http://udacity.com'
    },
    {
      'title': 'Browser Rendering Optimization',
      'school': 'Udacity',
      'date': 'June 2016',
      'url': 'http://udacity.com'
    },
    {
      'title': 'Website performance Optimization',
      'school': 'Udacity',
      'date': 'June 2016',
      'url': 'http://udacity.com'
    },
    {
      'title': 'HTML5 Canvas',
      'school': 'Udacity',
      'date': 'June 2016',
      'url': 'http://udacity.com'
    },
    {
      'title': 'Object Oriented JavaScript',
      'school': 'Udacity',
      'date': 'June 2016',
      'url': 'http://udacity.com'
    },
    {
      'title': 'Intro to jQuery',
      'school': 'Udacity',
      'date': 'June 2016',
      'url': 'http://udacity.com'
    },
    {
      'title': 'JavaScript Basics',
      'school': 'Udacity',
      'date': 'May 2016',
      'url': 'http://udacity.com'
    },
    {
      'title': 'Responsive Images',
      'school': 'Udacity',
      'date': 'May 2016',
      'url': 'http://udacity.com'
    },
    {
      'title': 'Responsive Web Design Fundamentals',
      'school': 'Udacity',
      'date': 'May 2016',
      'url': 'http://udacity.com'
    },
    {
      'title': 'Intro to HTML and CSS',
      'school': 'Udacity',
      'date': 'December 2015',
      'url': 'http://udacity.com'
    }
  ]
};

/**
 * @description Displays the higher education schools experience
 */
education.display = function () {
  var selectorEducation = '#educationEntries-container';
  var selectorEducationLast = '.education-entry:last';

  var len = education.schools.length;
  for (var iSchool = 0; iSchool < len; iSchool++) {
    $(selectorEducation).append(HTMLschoolStart);
    $(selectorEducationLast).append(
      HTMLschoolName.replace('%data%', education.schools[iSchool].name) +
      HTMLschoolDegree.replace('%data%', education.schools[iSchool].degree)
    );
    $(selectorEducationLast).append(
      HTMLschoolLocation.replace('%data%', education.schools[iSchool].location)
    );
    $(selectorEducationLast).append(
      HTMLschoolDates.replace('%data%', education.schools[iSchool].dates)
    );

    if (education.schools[iSchool].majors.length > 0) {
      // An example of using a for loop to iterate over items in an array
      for (var iMajor = 0, lenMajors = education.schools[iSchool].majors.length; iMajor < lenMajors; iMajor++) {
        $(selectorEducationLast).append(
          HTMLschoolMajor.replace('%data%', education.schools[iSchool].majors[iMajor]));
      }
    }
  }

//  $(selectorEducation).append(HTMLonlineClasses);
  var selectorOnlineCourse = '#onlineCoursesEntries-container';
  var selectorOnlineCourseLast = '.onlineCourse-entry:last';

  var lenOnlineClasses = education.onlineCourses.length;
  for (var iOnlineClass = 0; iOnlineClass < lenOnlineClasses; iOnlineClass++) {
    $(selectorOnlineCourse).append(HTMLonlineClassStart);
    $(selectorOnlineCourseLast).append(
      HTMLonlineTitle.replace('%data%', education.onlineCourses[iOnlineClass].title) +
      HTMLonlineSchool.replace('%data%', education.onlineCourses[iOnlineClass].school)
    );
    $(selectorOnlineCourseLast).append(
      HTMLonlineDates.replace('%data%', education.onlineCourses[iOnlineClass].date)
    );
    $(selectorOnlineCourseLast).append(
      HTMLonlineURL.replace('%data%', education.onlineCourses[iOnlineClass].url)
    );
  }
};

// Other Functions
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
bio.display();
work.display();
projects.display();
education.display();

// Map
$('#mapDiv').append(googleMap);
