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
  'bioPic': 'https://secure.gravatar.com/avatar/0eb64bd927318821e4494ec004cd5623?size=400px'
};

/**
* @description Displays the contacts information
* @constructor
* @param {string} contactType - The tipe of contact to be displayed
*/
bio.displayContacts = function (contactType) {
  var contact = HTMLcontactGeneric.replace('%contact%', contactType);
  $('#topContacts').append(contact.replace('%data%', obfuscateContact(bio.contacts[contactType])));
  $('#footerContacts').append(contact.replace('%data%', obfuscateContact(bio.contacts[contactType])));
}

/**
* @description Displays the skills in the bio object
* @constructor
*/
bio.displaySkills = function () {
  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    // An example of using a for loop to iterate over items in an array
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
      $('#skills').append(
        HTMLskills.replace('%data%', bio.skills[indexCount]));  
    }
  };
}

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
      'description': 'Helped clients troubleshoot payroll critical issues. Ensured that customers achieve their business goals by helping them navigate and configure, as well as troubleshoot and maintain their Ultipro Core product.'
    }
  ]
};

/**
* @description Displays the work experience
* @constructor
* @param {object} element - content of the index (dependings on the object on which this function is executed)
* @param {integer} index - the current index
* @param {array} array - the array on which this function is called
*/
work.display = function (element, index, array) {
  $('#workExperience').append(HTMLworkStart);
  // Chrome automatically adds a </a> tag after the HTMLworkEmployer append, so Employer and Title need to be concatenated and added with one append()
  $('.work-entry:last').append(
    HTMLworkEmployer.replace('%data%', work.jobs[index].employer) +
    HTMLworkTitle.replace('%data%', work.jobs[index].title)
    );
  $('.work-entry:last').append(
    HTMLworkDates.replace('%data%', work.jobs[index].dates)
    );
  $('.work-entry:last').append(
    HTMLworkLocation.replace('%data%', work.jobs[index].location)
    );
  $('.work-entry:last').append(
    HTMLworkDescription.replace('%data%', work.jobs[index].description)
    );
}

// Edication
var education = {
  'schools': [
    {
      'name': 'Flroida Atlantic University',
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
* @constructor
* @param {object} element - content of the index (dependings on the object on which this function is executed)
* @param {integer} index - the current index
* @param {array} array - the array on which this function is called
*/
education.displaySchools = function (element, index, array) {
  $('#education').append(HTMLschoolStart);
  $('.education-entry:last').append(
    HTMLschoolName.replace('%data%', education.schools[index].name) +
    HTMLschoolDegree.replace('%data%', education.schools[index].degree)
  );
  $('.education-entry:last').append(
    HTMLschoolLocation.replace('%data%', education.schools[index].location)
  );
  $('.education-entry:last').append(
    HTMLschoolDates.replace('%data%', education.schools[index].dates)
  );

  if (education.schools[index].majors.length > 0) {
    // An example of using a for loop to iterate over items in an array
    for (var indexCount = 0; indexCount < education.schools[index].majors.length; indexCount++) {
      $('.education-entry:last').append(
        HTMLschoolMajor.replace('%data%', education.schools[index].majors[indexCount]));  
    }
  };
}

/**
* @description Displays the completed online courses
* @constructor
* @param {object} element - content of the index (dependings on the object on which this function is executed)
* @param {integer} index - the current index
* @param {array} array - the array on which this function is called
*/
education.displayOnlineCourses = function (element, index, array) {
  $('#education').append(HTMLschoolStart);
  $('.education-entry:last').append(
    HTMLonlineTitle.replace('%data%', education.onlineCourses[index].title) +
    HTMLonlineSchool.replace('%data%', education.onlineCourses[index].school)
  );
  $('.education-entry:last').append(
    HTMLonlineDates.replace('%data%', education.onlineCourses[index].date)
  );
  $('.education-entry:last').append(
    HTMLonlineURL.replace('%data%', education.onlineCourses[index].url)
  );
}

var projects = {
  'projects' : [
  {
    'title': 'Yencies.com',
    'dates': 'January 2013',
    'description': 'Created a WordPress powered promotional website for Yencies - a company that makes hand made jewelry and accessories. The website promotes their hand-made, unique jewelry designs.',
    'images': [
      'images/projects/yencies.com-thumb.png'
    ]
  },
  {
    'title': 'MishelFit.com',
    'dates': 'May 2015',
    'description': 'Fully custom and responsive design of a landing page for MishelFit.com. Simple, elegant, and effective. The page includes a newsletter sign up form and an insagram feed.',
    'images': [
      'images/projects/mishelfit.com-thumb.png'
    ]
  },
  {
    'title': 'QuoteRush.com',
    'dates': 'December 2014',
    'description': 'Fully custom and responsive design for QuoteRush.com. Redesigned the entire website from the ground up. The customer maintains the website and has now made changes to the original design and content.',
    'images': [
      'images/projects/quoterush.com-thumb.png',
    ]
  }
  ]
};

/**
* @description Displays the completed projects
* @constructor
* @param {object} element - content of the index (dependings on the object on which this function is executed)
* @param {integer} index - the current index
* @param {array} array - the array on which this function is called
*/
projects.display = function(element, index, array) {
  $('#projects').append(HTMLprojectStart);
  $('.project-entry:last').append(
    HTMLprojectTitle.replace('%data%', projects.projects[index].title)
  );
  $('.project-entry:last').append(
    HTMLprojectDates.replace('%data%', projects.projects[index].dates)
  );
  $('.project-entry:last').append(
    HTMLprojectDescription.replace('%data%', projects.projects[index].description)
  );

  for (var image = 0; image < projects.projects[index].images.length; image++) {
    $('.project-entry:last').append(
    HTMLprojectImage.replace('%data%', projects.projects[index].images[image])
    );
  };
}


// Other Functions
/**
* @description Internationalizes the name where it capitalized the first letter of the firs name and the entire last name. Hides the Internationalize button and makes the Originalize button available, so the name can be returned to the original way it was capitalized.
* @constructor
*/
function inName() {
  var names = bio.name.trim().split(' ');
  var firstName = names[0].toLowerCase();
  var firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
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
*/
function orName() {
  var originalName = bio.name;

  $('#internationalizeButton').css({'display': 'inline'});
  $('#originalizeButton').css({'display': 'none'});

  return originalName;
}

/**
* @description Obfuscates a string by encapsulating it in a obfuscate class (which is set o display: none trough css) and inserts random <span>***</span> elements at random intervals in the e-mail address where *** represents a random string of characters between 1 and 16. The purpose of the fuction is to make it more difficult for contact information to be scraped off the page by a spambot.
* @constructor
* @param {string} str - the string to obfuscated 
*/
function obfuscateContact(str) {
  // Generate a rendom number of segments
  var segments = Math.floor((Math.random() * (str.length - 3) + 1)); 
  var charSplit = Math.floor((str.length / segments) + 2);
  var lastChar = 0;
  var parts = [];

  while ((lastChar + charSplit) < (str.length - 1)) {
    // The Math pert helps generate a random string of characters between 1 and 16 so the pattern is harder to discern. 
    parts.push(str.slice(lastChar, (lastChar + charSplit)) + '<span>' + Math.random().toString(36).substring((Math.random() * 16) + 1) + '</span>'); 
    lastChar = lastChar + charSplit;
  }

  parts.push(str.slice((lastChar)));

  return '<span class="obfuscate">' + parts.join('') + '</span>'
}

// INSERT ELEMENTS
// Header
$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
$('#header').prepend(internationalizeButton);
$('#header').prepend(originalizeButton);

// Contacts (within header)
for (key in bio.contacts) {
  if (bio.contacts.hasOwnProperty(key)) {
    bio.displayContacts(key);
  }
  //bio.contacts.hasOwnProperty(key) ? bio.displayContacts(key) : console.log("Nothing to Show"); //equivalent to above statement
}

// Header - append
$('#header').append(HTMLbioPic.replace('%data%', bio.bioPic));
$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

// Skills
bio.displaySkills();

// Work Experience
work.jobs.forEach(work.display);

// Projects
projects.projects.forEach(projects.display);

// Education
education.schools.forEach(education.displaySchools);
$('#education').append(HTMLonlineClasses);
education.onlineCourses.forEach(education.displayOnlineCourses);

// Map
$('#mapDiv').append(googleMap);
