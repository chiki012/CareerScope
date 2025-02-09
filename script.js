let activeField = null;
function toggleDetails(field) {
    if (activeField) {
        document.getElementById(activeField).style.display = "none";
    }
    if (activeField !== field) {
        document.getElementById(field).style.display = "block";
        activeField = field;
    } else {
        activeField = null;
    }
}
