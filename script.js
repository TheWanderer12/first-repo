const upperCasebutton = document.getElementById("upper-case");
const lowerCasebutton = document.getElementById("lower-case");
const properCasebutton = document.getElementById("proper-case");
const sentenceCasebutton = document.getElementById("sentence-case");
const filesaverButton = document.getElementById("save-text-file");
const text = document.querySelector("textarea");

upperCasebutton.addEventListener("click", function toUpper() {
    text.value = text.value.toUpperCase();
});

lowerCasebutton.addEventListener("click", function toLower() {
    text.value = text.value.toLowerCase();
});

properCasebutton.addEventListener("click", function toProper() {
    let words = text.value.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }
    text.value = words.join(" ");
});

sentenceCasebutton.addEventListener("click", function toSentence() {
    let arr = text.value.split(".");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
        arr[i] = " " + arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    text.value = arr.join(".").trim();
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

filesaverButton.addEventListener("click", function() {
    download("text.txt", text.value);
});
