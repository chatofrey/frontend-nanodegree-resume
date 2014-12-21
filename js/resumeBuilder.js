var formattedName = HTMLheaderName.replace('%data%', 'Zoay');
var formattedRole = HTMLheaderRole.replace('%data%', 'Student');

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);