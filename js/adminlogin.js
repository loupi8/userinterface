/**
 * Created by ludwing on 2016-03-10.
 */
var adminList=[{
    "username": "hirchr",
    "first_name": "Hiram",
    "last_name": "Christopherson",
    "assets": "-105"
},{
    "username": "jorass",
    "first_name": "Jory",
    "last_name": "Assies",
    "assets": "-55"
}, {
    "username": "saskru",
    "first_name": "Sa�a",
    "last_name": "Kr�ger",
    "assets": "290"

}, {
    "username": "ervtod",
    "first_name": "Ervin",
    "last_name": "Todd",
    "assets": "255"
}, {
    "username": "svetor",
    "first_name": "Svetlana",
    "last_name": "Torres",
    "assets": "-774"
}];



var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var isUser = false;
    for (i in adminList){
        if ( username == adminList[i].username && password == adminList[i].username){
            isUser = true;
        }

    }

    if (isUser) {
        alert("Login successfully");
        window.location.href="admin.html";
        localStorage.setItem("name", username);
        return false;
    } else {
        attempt --;
        alert("You have left "+attempt+" attempt");
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }


}