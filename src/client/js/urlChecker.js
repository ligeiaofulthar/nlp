function checkUrl(inputText) {
    console.log("::: Running checkForName :::", inputText);

    // https://stackoverflow.com/questions/30970068/js-regex-url-validation
    var regex = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if(regex.includes(inputText)) {
        return true;
    } else {
        return false;
    }
}

export { checkUrl }