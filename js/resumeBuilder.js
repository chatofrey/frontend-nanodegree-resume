var bio = {
    "name": "Joey Doe",
    "role": "student",
    "contact": {
        "email": "jkanmogne@gmail.com",
        "mobile": "0102030405",
        "twitter": "@DJoey",
        "github": "DJoey",
        "loc": "Paris"
    },
    "welcomeMsg": "Hello, I'm Joey. I'm 23 years old and I live in Paris",
    "skills": ['Java', ' SQL', ' JUnit', ' Hadoop', ' HBase', ' MapReduce'],
    "bioPic": "./images/fry.jpg",

    display: function() {
        var headerName = HTMLheaderName.replace('%data%', this.name);
        var headerRole = HTMLheaderRole.replace('%data%', this.role);
        var WelcomeMsg = HTMLWelcomeMsg.replace('%data%', this.welcomeMsg);
        var mobile = HTMLmobile.replace('%data%', this.contact.mobile);
        var email = HTMLemail.replace('%data%', this.contact.email);
        var twitter = HTMLtwitter.replace('%data%', this.contact.twitter);
        var github = HTMLgithub.replace('%data%', this.contact.github);
        var hlocation = HTMLlocation.replace('%data%', this.contact.loc);

        var pic = HTMLbioPic.replace('%data%', this.bioPic);

        $('#header').prepend(WelcomeMsg);
        $('#header').prepend(headerRole);
        $('#header').prepend(headerName);

        $('#header').append(pic);
        $('#topContacts').append(mobile);
        $('#topContacts').append(email);
        $('#topContacts').append(twitter);
        $('#topContacts').append(github);
        $('#topContacts').append(hlocation);

        if (this.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            var formattedSkill;
            var skill;

            for (skill in this.skills) {
                formattedSkill = HTMLskills.replace("%data%", this.skills[skill]);
                $('#skills').append(formattedSkill);
            }
        }
    }
};

//
// Work
////////////
var works = {
    "jobs": [
        {
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012 - May 2013",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ],

    display: function() {
        for (job in this.jobs) {
            $('#workExperience').append(HTMLworkStart);

            var title = HTMLworkTitle.replace("%data%", this.jobs[job].title);
            var employer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
            var dates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
            var description = HTMLworkDescription.replace("%data%", this.jobs[job].description);

            var titEmployer = employer + title;
            $('.work-entry:last').append(titEmployer);
            $('.work-entry:last').append(dates);
            $('.work-entry:last').append(description);
        }
    }
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
    ],

    display: function() {
        for (var project in this.projects) {
            $('#projects').append(HTMLprojectStart);
            console.log(projects.projects);
            var title = HTMLprojectTitle.replace('%data%', this.projects[project].title);
            var dates = HTMLprojectDates.replace('%data%', this.projects[project].dates);
            var description = HTMLprojectDescription.replace('%data%', this.projects[project].description);

            $('.project-entry:last').append(title);
            $('.project-entry:last').append(dates);
            $('.project-entry:last').append(description);

        }
    }
};
// 
//education
///////////
var education = {
    "schools": [
        {
            "name": "tpt",
            "location": "Paris",
            "major": "software engineer",
            "degree": "2nd year",
            "dates": "2013 - Today"
        },

        {
            "name": "ucp",
            "location": "Cergy-Pontoise",
            "major": "Physics",
            "degree": "bachelor",
            "dates": "2009 - 2012"
        }
    ],
    "onlineClasses": [
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
    ],

    display: function() {
        for (school in this.schools) {
            $('#education h2:last').append(HTMLschoolStart);
            var name = HTMLschoolName.replace('%data%', this.schools[school].name);
            var degree = HTMLschoolDegree.replace('%data%', this.schools[school].degree);
            var dates = HTMLschoolDates.replace('%data%', this.schools[school].dates);
            var loc = HTMLschoolLocation.replace('%data%', this.schools[school].location);
            var major = HTMLschoolMajor.replace('%data%', this.schools[school].major);

            var nameDegree = name + degree;
            $('.education-entry:last').append(nameDegree);
            $('.education-entry:last').append(loc);
            $('.education-entry:last').append(dates);
            $('.education-entry:last').append(major);
        }

        $('#education h2').append(HTMLonlineClasses);
        for (online in this.onlineClasses) {
            var title = HTMLonlineTitle.replace('%data%', this.onlineClasses[online].title);
            var school = HTMLonlineSchool.replace('%data%', this.onlineClasses[online].school);
            var dates = HTMLonlineDates.replace('%data%', this.onlineClasses[online].dates);
            var url = HTMLonlineURL.replace('%data%', this.onlineClasses[online].url);

            var titleSchool = title + school;
            $('#education h2 h3').append(titleSchool);
            $('#education h2 h3').append(dates);
            $('#education h2 h3').append(url);
        }

    }
};

// Display all the objects
bio.display();
works.display();
projects.display();
education.display();

// append Internationalize Button to main div
$('#main').append(internationalizeButton);
// append google maps
$('#mapDiv').append(googleMap);
