/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
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
			"biopic" : "images/fry.jpg"};

 var formattedName = HTMLheaderName.replace(
 	"%data%", bio.name);
 $("header").prepend(formattedName);


 var formattedRole = HTMLheaderRole.replace(
 	"%data%", bio.role);
 $("header").prepend(formattedRole);

var contact : "Contact";
var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
$("topContacts").prepend(formattedContact);

var formattedMobile = HTMLmobile.replace("%mobile%", "mobile " + bio.contacts{mobile});
$("topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%email%", "email " + bio.contacts{email});
$("topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%twitter%", "twitter " + bio.contacts{twitter});
$("topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%github%", "github " + bio.contacts{github});
$("topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%location%", "location " + bio.contacts{location});
$("topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("topContacts").append(formattedPic);

var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("topContacts").append(formattedMsg);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("topContacts").append(formattedSkills);






var work = {
 			"jobs" : [{"employer": "Digerati Girls", "title": "UI/Front End Developer", "location": "Los Angeles, California", "dates" :"2012-2017", "description" :"Ensures that website is User friendly and logically functional, as well as appealing to the eyes."}];
 		}


var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[employer]);
$("workExperience").append(formattedEmployer);

var formattedWTitle = HTMLworkTitle.replace("%data%", work.jobs[title]);
$("workExperience").append(formattedWTitle);

var formattedWDates= HTMLworkDates.replace("%data%", work.jobs[dates];
$("workExperience").append(formattedWDates);

var formattedWLocation = HTMLworkLocation.replace("%data%", work.jobs[location]);
$("workExperience").append(formattedWLocation);

var formattedWDescription = HTMLworkDescription.replace("%data%", work.jobs[description]);
$("workExperience").append(formattedWDescription);





var projects = { 	
			"projects" : [{"title" : "Solo", "dates": "2016", "description" : "Craziness but Awesomeness!", "images" : ["images/197x148.gif", "images/197x148.gif"]}];
		}


var formattedPTitle = HTMLprojectTitle.replace("%data%", projects.projects[{title}]);
$("projects").append(formattedPTitle);

var formattedPDates = HTMLprojectDates.replace("%data%", projects.projects[{dates}]);
$("projects").append(formattedPDates);

var formattedPDescription = HTMLprojectDescription.replace("%data%", projects.projects[{description}]);
$("projects").append(formattedPDescription);

var formattedPImage = HTMLprojectImage.replace("%data%", projects.projects.[{images}]);
$("projects").append(formattedPImage);



 		

var education = {
			"schools" : [ { "name": "Berkeley High School", "location" : "Berkeley, CA", "degreee" :"High School Diploma", "majors" :"General Education", "dates" :"2004-2008"},{"name" :"University of California-Berkeley", "location" :"Berkeley, CA", "degree": "Bachelors of Science", "majors" :"Computer and Information Science", "dates" : "Fall 2008-Spring 2012"}],
 			"onlineCourses" : [{"title": "Front End Web Development", "school" : "Udacity", "dates" :"June 2016 - January 2017", "url" :"www.udacity.com"}];

 		}

var formattedMobile = HTMLmobile.replace("%mobile%", "mobile " + bio.mobile);
$("topContacts").append(formattedMobile);







    $("#main").append(work.position);
    $("#main").append(education.name);
           	
			
 	
 
 	
  

