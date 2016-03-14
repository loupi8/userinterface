/**
 * Created by ludwing on 2016-03-09.
 */
document.getElementById("switchLang").onclick = function () {
    if (this.checked) {
        swedish();
    }
    else {
//            alert("Checkbox wasn't checked.");
        english();
    }
};