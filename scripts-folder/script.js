var text = "Hi my name is Daniel. What I like to do is study computer programming and practice Brazilian Jiu Jitsu. Daniel enjoys drinking coffee at times. Daniel dates a girl named Patricia. They enjoy drinking coffee together. Daniel goes to school at San Francisco State University. Daniel is 23 years old and will graduate in May of 2017.";
var myName = "Daniel";
var hits = [];
for (i = 0; i < text.length; i++) {
    if ( text[i] === "D") {
        for (j = i; j < i + myName.length; j++);
        hits.push(myName);
        hits[0];
    }
};
if (hits.length === 0) {
    document.write("Your name wasn't found!");
} else {
    document.write(hits);
};