document.addEventListener("DOMContentLoaded", function () {

const generateBtn = document.getElementById("generateBtn");
const affiliateInput = document.getElementById("affiliateInput");
const resultBox = document.getElementById("result");

generateBtn.addEventListener("click", function () {

    const affiliate = affiliateInput.value;

    if (!affiliate) {
        resultBox.innerHTML = "Please enter MLM / Affiliate name.";
        return;
    }

    resultBox.innerHTML =
        "<h3>Generated Script</h3>" +
        "<p>Welcome to " + affiliate +
        ". This AI-powered business opportunity helps people grow faster using smart automation and digital marketing strategies.</p>";

}); ;({ fulltext });
