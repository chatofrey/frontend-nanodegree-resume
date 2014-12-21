var bio = {
    "name": "Joey",
    "role": "student",
    "contact": {
        "email": "jkanmogne@gmail.com",
        "mobile": "0102030405",
        "twitter": "@Joey",
        "github": "Joey",
        "loc": "Paris"
    },
    "welcomeMsg": "Hello, I'm Joey. I'm 23 years old and I live in Paris",
    "skills": ['Java', ' SQL', ' JUnit', ' Hadoop', ' HBase', ' MapReduce'],
    "bioPic": "./images/fry.jpg"
};

//
// Work
////////////
var works = {
	"jobs":[
		{
		    "title": "Intern",
		    "employer": "Dassault Systèmes",
		    "year": "6 months",
		    "dates": "July 01st - December 19, 2014",
		    "city": "Velizy-Villacoublay",
		    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},

		{
		    "title": "Intern",
		    "employer": "Qarnot Computing",
		    "year": "1 month",
		    "dates": "July 01st - August 08, 2013",
		    "city": "Montrouge",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]
};

//
// projects
/////////////////

var projects = {
    "projects": [
        {
            "title": "Interface Blender Python",
            "dates": "07/07 - 08/07",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        },

        {
            "title": "Index Inverse avec HDFS",
            "dates": "07/07 - 08/07",
           "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        },

        {
            "title": "Index Inverse avec HBase",
            "dates": "07/07 - 08/07",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        }
    ]
};
// 
//education
///////////
var education = {
    "schools": [
        {
            "name": "tpt",
            "city": "Paris",
            "major": "software engineer",
            "graduation": "2nd years"
        },

        {
            "name": "ucp",
            "city": "Cergy-Pontoise",
            "majors": "Physics",
            "minors": "Mathematics",
            "graduation": "bachelor"
        }
    ],
    "online": [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "12/15 - 12/21",
            "url": "http://www.udacity.com"
        },

        {
            "title": "How to use git and github",
            "school": "Udacity",
            "dates": "12/15 - 12/19",
            "url": "http://www.udacity.com"
        },

        {
            "title": "Computer Science",
            "school": "Udacity",
            "dates": "12/15 - 12/21",
            "url": "http://www.udacity.com"
        },

        {
            "title": "Algorithms and Analysis",
            "school": "Coursera",
            "dates": "12/15 - 12/21",
            "url": "http://www.coursera.org"
        }
    ]
};
var headerName = HTMLheaderName.replace('%data%',bio.name);
var headerRole = HTMLheaderRole.replace('%data%',bio.role);
var WelcomeMsg = HTMLWelcomeMsg.replace('%data%',bio.welcomeMsg);
var mobile = HTMLmobile.replace('%data%',bio.contact.mobile);
var email = HTMLemail.replace('%data%',bio.contact.email);
var twitter = HTMLtwitter.replace('%data%',bio.contact.twitter);
var github = HTMLgithub.replace('%data%',bio.contact.github);
var hlocation = HTMLlocation.replace('%data%',bio.contact.loc);
// var skills = HTMLskills.replace('%data%',bio.skills);
var pic = HTMLbioPic.replace('%data%',bio.bioPic);

var bioSkills = bio.skills;

// console.log('Before if statement');
$('#header').prepend(WelcomeMsg);
$('#header').prepend(headerRole);
$('#header').prepend(headerName);

$('#header').append(pic);
$('#topContacts').append(mobile);
$('#topContacts').append(email);
$('#topContacts').append(twitter);
$('#topContacts').append(github);
$('#topContacts').append(hlocation);

if(bioSkills.length > 0){
	$('#header').append(HTMLskillsStart);
	
	/*var skillFormat = HTMLskills.replace("%data%", bioSkills[0]);
	$('#skills').append(skillFormat);

	skillFormat = HTMLskills.replace("%data%", bioSkills[1]);
	$('#skills').append(skillFormat);
	
	skillFormat = HTMLskills.replace("%data%", bioSkills[2]);
	$('#skills').append(skillFormat);
	skillFormat = HTMLskills.replace("%data%", bioSkills[3]);
	$('#skills').append(skillFormat);
	skillFormat = HTMLskills.replace("%data%", bioSkills[4]);
	$('#skills').append(skillFormat);
	skillFormat = HTMLskills.replace("%data%", bioSkills[5]);
	$('#skills').append(skillFormat);*/
	/*var skillFormat = HTMLskills.replace("%data%", bioSkills);
	$('#skills').append(skillFormat);*/

	var formattedSkill;
	for(skill in bioSkills)
	{
		formattedSkill = HTMLskills.replace("%data%", bioSkills[skill]);
		$('#skills').append(formattedSkill);	
	}
}

// console.log('After if statement');
for(job in works.jobs)
{
	$('#workExperience').append(HTMLworkStart);
	console.log(works.jobs)
	console.log(job);

	var title = HTMLworkTitle.replace("%data%", works.jobs[job]['title']);
	var employer = HTMLworkEmployer.replace("%data%", works.jobs[job]['employer']);
	var dates = HTMLworkDates.replace("%data%",  works.jobs[job].dates);
	var description = HTMLworkDescription.replace("%data%",  works.jobs[job].description);

	var titEmployer = employer + title;
	$('.work-entry:last').append(titEmployer);
	$('.work-entry:last').append(dates);
	$('.work-entry:last').append(description);
}





















/*education["name"] = "Universite de Cergy Pontoise";
education["time"] = "3 years";
education["city"] = "Cergy Pontoise";

//
// Bio
/////////////////////
var headerName = HTMLheaderName.replace('%data%',bio.name);
var headerRole = HTMLheaderRole.replace('%data%',bio.role);
var WelcomeMsg = HTMLWelcomeMsg.replace('%data%',bio.welcomeMsg);
var mobile = HTMLmobile.replace('%data%',bio.contact.mobile);
var email = HTMLemail.replace('%data%',bio.contact.email);
var twitter = HTMLtwitter.replace('%data%',bio.contact.twitter);
var github = HTMLgithub.replace('%data%',bio.contact.github);
var hlocation = HTMLlocation.replace('%data%',bio.contact.loc);
var skills = HTMLskills.replace('%data%',bio.skills);

$('#header').prepend(WelcomeMsg);
$('#header').prepend(headerRole);
$('#header').prepend(headerName);

$('#topContacts').append(mobile);
$('#topContacts').append(email);
$('#topContacts').append(twitter);
$('#topContacts').append(github);
$('#topContacts').append(hlocation);
$('#topContacts').append(skills);


//
// work
//////////////////
var wtitle = HTMLworkTitle.replace('%data%', work["position"]);
$('#workExperience').append(wtitle);
var schoolName = HTMLschoolName.replace('%data%', education.name);
$('#education').append(schoolName);*/
