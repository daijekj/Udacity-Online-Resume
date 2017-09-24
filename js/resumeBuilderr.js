/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {{
 			"name" : "DJ",
           "role":"Web Developer", 
           
           "contacts": { 
           	"mobile":"345-542-0867", 
           	"email":"dj@example.com", 
           	"github":"djthecodingninja", 
           	"twitter":"@djthecodingninja", 
           	"location":"LA", 
           },
    		
    		"welcomeMessage":"Take a look at who DJ the Coding Ninja is...",
			"skills" : ["Graphic Design", "Coding"],
			"biopic" : "images/fry.jpg"}, {
    "display" : function() {


 var formattedName = HTMLheaderName.replace(
 	"%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace(
  "%data%", bio.role);
var contact : "Contact"
var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
 var formattedMobile = HTMLmobile.replace("%mobile%", "mobile " + bio.contacts{mobile});
var formattedEmail = HTMLemail.replace("%email%", "email " + bio.contacts{email});
var formattedTwitter = HTMLtwitter.replace("%twitter%", "twitter " + bio.contacts{twitter});
var formattedGithub = HTMLgithub.replace("%github%", "github " + bio.contacts{github});
var formattedLocation = HTMLlocation.replace("%location%", "location " + bio.contacts{location});
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
 

 $("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#topContacts").prepend(formattedContact);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedPic);
$("#topContacts").append(formattedMsg);
$("#topContacts").append(formattedSkills); },

bio.display()}};








var work = {{
 			"jobs" : [{"employer": "Digerati Girls", "title": "UI/Front End Developer", "location": "Los Angeles, California", "dates" :"2012-2017", "description" :"Ensures that website is User friendly and logically functional, as well as appealing to the eyes."}];
 		}, {
"display" : function(){

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[employer]);
var formattedWTitle = HTMLworkTitle.replace("%data%", work.jobs[title]);
var formattedWDates= HTMLworkDates.replace("%data%", work.jobs[dates];
var formattedWLocation = HTMLworkLocation.replace("%data%", work.jobs[location]);
var formattedWDescription = HTMLworkDescription.replace("%data%", work.jobs[description]);

$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedWTitle);
$("#workExperience").append(formattedWDates);
$("#workExperience").append(formattedWLocation);
$("#workExperience").append(formattedWDescription); },

work.display()}};





var projects = {{ 	
			"projects" : [{"title" : "Solo", "dates": "2016", "description" : "Craziness but Awesomeness!", "images" : ["images/197x148.gif", "images/197x148.gif"]}];
		}, 

"display" : function() {


var formattedPTitle = HTMLprojectTitle.replace("%data%", projects.projects[{title}]);
var formattedPDates = HTMLprojectDates.replace("%data%", projects.projects[{dates}]);
var formattedPDescription = HTMLprojectDescription.replace("%data%", projects.projects[{description}]);
var formattedPImage = HTMLprojectImage.replace("%data%", projects.projects.[{images}]);

$("#projects").append(formattedPTitle);
$("#projects").append(formattedPDates);
$("#projects").append(formattedPDescription);
$("#projects").append(formattedPImage); },

projects.display()};



 		

var education = {{
			"schools" : [ { "name": "Berkeley High School", "location" : "Berkeley, CA", "degreee" :"High School Diploma", "majors" :"General Education", "dates" :"2004-2008"},{"name" :"University of California-Berkeley", "location" :"Berkeley, CA", "degree": "Bachelors of Science", "majors" :"Computer and Information Science", "dates" : "Fall 2008-Spring 2012"}],
 			"onlineCourses" : [{"title": "Front End Web Development", "school" : "Udacity", "dates" :"June 2016 - January 2017", "url" :"www.udacity.com"}];

 		}, 
      "1stdisplay" : function() {
var formattedSName = HTMLschoolName.replace("%data%", education.schools[{name}]);
var formattedSDegree = HTMLschoolDegree.replace("%data%", education.schools[{degree}]);
var formattedSDates = HTMLschoolDates.replace("%data%", education.schools[{dates}]);
var formattedSLocation = HTMLschoolLocation.replace("%data%", education.schools[{location}]);
var formattedSMajor = HTMLschoolMajor.replace("%data%", education.schools[{majors}]);

$("#education").append(formattedSName);
$("#education").append(formattedSDegree);
$("#education").append(formattedSDates);
$("#education").append(formattedSLocation);
$("#education").append(formattedSMajor); },

      "2nddisplay" : function() {
var formattedOTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[{title}]);
var formattedOSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[{school}]);
var formattedODates = HTMLonlineDates.replace("%data%", education.onlineCourses[{dates}]);
var formattedOUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[{url}]);


$("#education").append(formattedOTitle);
$("#education").append(formattedOSchool);
$("#education").append(formattedODates);
$("#education").append(formattedOUrl);

      },

education.display()};

$("#mapDiv").append(googleMap);





