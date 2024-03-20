var button = document.getElementById('evaluate')
button.addEventListener('click', evaluation);

function evaluation() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    if (isNaN(age)) {
    alert("Ops! Age must be a valid number.");
    return;
    }

    if (age < 18) {
        document.getElementById('remarks').innerHTML = `${capitalizeString(name)}, your age is ${age}. You are still a minor!`;
    } else {
    document.getElementById('remarks').innerHTML = `${capitalizeString(name)}, your age is ${age}. You are an adult!!`
    }
 }

 function capitalizeString(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
 }
