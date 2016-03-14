statslist = localStorage.getItem("orders");
var shopList = JSON.parse(statslist);


var obj = {};

for (var i = 0, j = shopList.length; i < j; i++) {
    if (obj[shopList[i].namn]) {
        obj[shopList[i].namn]++;
    }
    else {
        obj[shopList[i].namn] = 1;

    }
}
$(document).ready(function () {
    for (var property in obj) {
            element ="";
                element +=
                    "<tr><th>" + property + "</th>" +
                    "<th>" + obj[property] + "</th></tr>";
        $('#inventory tr:last').after(element);
        }






            // Append each product name to the DOM



    // Append each product name to the DOM
    });



