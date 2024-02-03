function isValidLinkedInURL(url) {
    let urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    return urlPattern.test(url);
}

let profileURLs = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane_doe",
    "https://www.linkedin.com/in/johndoe-123",
    "https://www.linkedin.com/in/john123_doe",
    "https://www.linkedin.com/in/abc",
    "https://www.linkedin.com/in/johndoe",
    "https://www.linkedin.com/company/example",
    "https://www.linkedin.com/in/johndoe@",
    "https://www.linkedin.com/in/",
    "https://www.linkedin.com/in/johndoe123456789012345678901234567890" 
];

profileURLs.forEach(function(url) {
    if (isValidLinkedInURL(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
});
