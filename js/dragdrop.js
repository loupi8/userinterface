/**
 * Created by ludwing on 2016-03-09.
 */
name = localStorage.getItem("name");
credit = localStorage.getItem("credit");
var totalAmount = 0;
document.getElementById("totalAmount").innerText = "Total Amount " + totalAmount + " kr";

function checkout() {
    if (localStorage.getItem("name")) {
    document.getElementById("totalAmount").innerText = "Total Amount " + totalAmount + " kr";
    var x = Number(credit)-totalAmount;
    alert("Dear " + name +  ", the order is now sent to the bartender. Your new credit will be " + x + "." );
    window.location.href= "intro.html";
    localStorage.removeItem("name");
    localStorage.removeItem("credit");
} else {
    alert("You are not registered, please go to the bartender and become a part of our family!");
        window.location.href= "intro.html";
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById("tableImage").className = "highlightDropArea";
}

function dragEnd(ev) {
    document.getElementById("tableImage").className = "";
}

function getTableColumnValues(col) {
    var columnValues = [];
    $('table[id]').each(function () {
        var tableId = this.id;
        $('tr>td:nth-child(' + col + ')', $(this)).each(function () {
            columnValues.push($(this).text());
        });
    });
    return columnValues;
    console.log(columnValues);
}

function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("text");
    object = document.getElementById(id);
    val = object.getElementsByTagName('p');
    console.log(val);

    strName = val[0].innerHTML;
    strPrice = val[1].innerHTML;


    table = document.getElementById("orderList");

    var vals = getTableColumnValues(2);
    /*console.log(vals);*/



    if (!(vals.indexOf(strName) > -1)) {
        row = table.insertRow(-1);
        row.insertCell(0).innerHTML = 1;
        row.insertCell(1).innerHTML = strName;
        row.insertCell(2).innerHTML = strPrice;

        optionCol = row.insertCell(3);
        optionCol.innerHTML = "<button type='button' onclick='removeItem(event)'>delete</button>";
        optionCol.innerHTML += "<button type='button' onclick='increaseItem(event)'>+</button>";
        optionCol.innerHTML += "<button type='button' onclick='decreaseItem(event)'>-</button>";
    } else {
        index = vals.indexOf(strName);
        quantity = table.rows[index+1].cells[0].innerHTML;
        table.rows[index+1].cells[0].innerHTML = ++quantity;
    }


    intPrice = parseInt(strPrice.split('kr')[0]);
    if (intPrice) {
        totalAmount += intPrice;
        document.getElementById("totalAmount").innerHTML = "Total Amount " + totalAmount + " kr";
    }
}

function increaseItem(ev) {
    var p = ev.target.parentNode.parentNode;
    console.log(p);
    quantity = p.children[0].innerHTML;
    p.children[0].innerHTML = ++quantity;
    strPrice = p.children[2].innerHTML;
    intPrice = parseInt(strPrice.split('kr')[0]);

    if (increaseItem) {
        totalAmount += intPrice;
        document.getElementById("totalAmount").innerHTML = "Total Amount " + totalAmount + " kr";
    }


}

function decreaseItem(ev) {
    var p = ev.target.parentNode.parentNode;
    quantity = p.children[0].innerHTML;
    p.children[0].innerHTML = --quantity;
    strPrice = p.children[2].innerHTML;
    intPrice = parseInt(strPrice.split('kr')[0]);

    if (decreaseItem) {
        totalAmount -= intPrice;
        document.getElementById("totalAmount").innerHTML = "Total Amount " + totalAmount + " kr";
    }

    if (quantity == 0) {
        p.parentNode.removeChild(p);
    }
}


function removeItem(ev) {
    var p = ev.target.parentNode.parentNode;
    p.parentNode.removeChild(p);

    /*element = document.getElementById("totalAmount");
     strTotalAmount = element.innerHTML;
     intTotalAmount = parseInt(strTotalAmount.split(" ")[2]);*/

    quantity =  p.children[0].innerHTML;
    strPrice = p.children[2].innerHTML;
    intPrice = parseInt(strPrice.split('kr')[0]);

    if (intPrice) {
        totalAmount = totalAmount - (intPrice*quantity);
        document.getElementById("totalAmount").innerHTML = "Total Amount " + totalAmount + " kr";
    }
}

