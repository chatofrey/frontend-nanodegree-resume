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
    "skills": ['Java', ' SQL', ' JUnit', ' Hadoop', ' HBase', ' MapReduce']
};

//
// Work
////////////
var work = {
    "position": "Intern",
    "employer": "Dassault Systèmes",
    "year": 0.5,
    "city": "Velizy-Villacoublay",
    "description": "Creation d'un widget d'édition d'exigences avec contenu riche"
};

//
// projects
/////////////////

var projects = {
    "projects": [
        {
            "title": "Interface Blender Python",
            "dates": "07/07 - 08/07",
            "description": "Interface Blender Python"
        },

        {
            "title": "Index Inverse avec HDFS",
            "dates": "07/07 - 08/07",
            "description": "Construction d'un index Inverse avec MapReduce"
        },

        {
            "title": "Index Inverse avec HBase",
            "dates": "07/07 - 08/07",
            "description": "Construction d'un index Inverse avec MapReduce"
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
