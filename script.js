function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name.trim() === "") {
        alert("Name must be filled out");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    return true;
}
