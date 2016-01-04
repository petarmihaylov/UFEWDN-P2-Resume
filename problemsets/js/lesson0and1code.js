// Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// Contact Info
var formattedContactMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedContactEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedContactGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedContactLocation = HTMLlocation.replace("%data%", bio.contact.location);

// Bio
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

// Skills
var formattedSkill0 = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[2]);

// Work Experience
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);

// Contact Info - Display
$("#topContacts").append(formattedContactMobile);
$("#topContacts").append(formattedContactEmail);
$("#topContacts").append(formattedContactGithub);
$("#topContacts").append(formattedContactLocation);

// Bio - Display
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);

// Work Experience - Display
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedWorkEmployer);
