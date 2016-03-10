$(document).ready(function () {

    var inventory;

    /**
     * asynchrones call to webservice to fetch the inventory data
     */
    $.ajax({
        method: "GET",
        url: "http://pub.jamaica-inn.net/fpdb/api.php",
        data: {name: "jorass", password: "jorass", action: "inventory_get"},
        dataType: "json"
    }).done(function (data) {
        console.log(data);
        inventory = data.payload;
        length = inventory.length;
        element = "";
        for(i = 0; i < length; i++) {
            beverage = inventory[i];
            if (beverage.namn != "") {
                element += 
                    "<tr><th>" + beverage.beer_id + "</th>" +
                    "<th>" + beverage.namn + "</th>" +
                    "<th>" + beverage.count + "</th></tr>";
            }
        }

        $('#inventory tr:last').after(element);

    });
});