var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var profilePictureInput = document.getElementById("profile-picture");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var DateOfBirth = document.getElementById("DateOfBirth").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    var displayResume = function (profileImageSrc) {
        var resumeHtml = "<h2><b>Dynamic Resume</b></h2>\n      <h3>Personal Information</h3>\n      ".concat(profileImageSrc
            ? "<img src=\"".concat(profileImageSrc, "\" alt=\"Profile Picture\" style=\"width:150px; height:150px; object-fit:cover;\"/>")
            : "", "\n      <p><b>Name:</b> ").concat(name, "</p>\n      <p><b>Email:</b> ").concat(email, "</p>\n      <p><b>Phone:</b> ").concat(phone, "</p>\n      <p><b>DateOfBirth:</b> ").concat(DateOfBirth, "</p>\n\n      <h3>Education:</h3>\n      <p>").concat(education, "</p>\n\n      <h3>Experience:</h3>\n      <p>").concat(experience, "</p>\n\n      <h3>Skills:</h3>\n      <p>").concat(skills, "</p>");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHtml;
        }
        else {
            console.error("The resume display element is missing.");
        }
    };
    if (profilePictureInput &&
        profilePictureInput.files &&
        profilePictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayResume((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        displayResume(null);
    }
});
