// Create an empty make object
// Create an array with all the tags as a string
// Loop through array creating an element with each tag.
// Used a for loop going to using RxJs soon.

var make = {};
var tags = ["a", "div", "span", "form", "h1", "h2", "h3", "h4", "h5", "h6"];

for (var i = 0; i < tags.length; i++) {
    (function(tag) {
        make[tag] = function() {
            return document.createElement(tag);
        };
    })(tags[i]);
}
