function isValidURL(url) {
    let urlPattern = /^(http|https):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+\.+[a-zA-Z]+$/;
    
    if (urlPattern.test(url)) {
        return true; 
    } else {
        return false; 
    }
}

let urls = [
    "http://example.com",
    "https://www.example.com",
    "http://123example.com",
    "https://example123.com",
    "http://example.com/path/to/page",
    "https://example.com/?query=123",
    "ftp://example.com", 
    "http://example",
    "https://123example.com" 
];
urls.forEach(function(url) {
    if (isValidURL(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
});
