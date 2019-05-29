// Make a valid HTML5 document

// Display "Hello, World" centered horizontally on the page

// Change the color of "World" to white, and give it a black background

// Using Javascript, add a greeting for each of your friends to the page, each on their own line and centered.

//     Ray, Oscar, Gwen, Bob, and Marie
//     red, orange, green, blue, and magenta

// Write each of their names in their favorite color respectively.

// Add a colored background to each of their names that provides reasonable contrast with their favorite color.

// Make the text bigger and add a couple of CSS styles of your choice.

// You don't want to show any favoritism: randomize the order that their names appear on the page each time the page is loaded.


//declare variable for element to manipulate
var fb = document.getElementById("friend");

//create array
var friends = ["Ray", "Oscar", "Gwen", "Bob", "Marie"]

//randomize array function (https://javascript.info/task/)
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
//randomize my array
shuffle(friends);

//loop through each item in array(friends)
friends.forEach(friend => {
    //create conditionals based on value[i]
    //set output for each condition
    if (friend == "Ray") {
        output = "<span class='ray'>Hello " + friend + "</span><br/>";
    }
    else if (friend == "Oscar") {
        output = "<span class='oscar'>Hello " + friend + "</span><br/>";
    }
    else if (friend == "Gwen") {
        output = "<span class='gwen'>Hello " + friend + "</span><br/>";
    }
    else if (friend == "Bob") {
        output = "<span class='bob'>Hello " + friend + "</span><br/>";
    }
    else if (friend == "Marie") {
        output = "<span class='marie'>Hello " + friend + "</span><br/>";
    }
    else {
        output = "<span>something went horribly badly.</span>";
    }
    //assign output to manipulated element
    fb.innerHTML = fb.innerHTML + output + "<br/>";
});