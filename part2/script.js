/*
Write your code for this exercise in this file beneath this long comment. Please
be certain to use only syntax and techniques covered in the assigned
freeCodeCamp courses.

1. Write a function named createMovie that expects to receive three arguments:
title, duration, and quote. This function should return an object. The object it
returns should have properties that are also named title, duration, and
quote. The values assigned to these properties should be the values that are
passed to the function. Additionally, the object that createMovie returns should
have two methods:

    isLongerThan - a function that accepts one movie object as a parameter and
        returns true if the movie is longer than the one that is passed to it as
        an argument and false otherwise.

    logQuote - a function that logs the value of the movie object's quote
        property to the console.

2. Create a variable named movies and assign to it an array. This array should
contain six objects that are created by calling the createMovie function. The
values you should pass to the createMovie function to create these objects are:

title              | duration | line
----------------------------------------------------------------------------
Star Wars          |   121    | If there's a bright center to the universe,
                   |          | you're on the planet that it's farthest from.
                   |          |
Pulp Fiction       |   154    | Do you know what they call a Quarter Pounder
                   |          | with Cheese in France?
                   |          |
Dirty Dancing      |   100    | Nobody puts Baby in a corner.
                   |          |
Forrest Gump       |   142    | Life is like a box of chocolates.
                   |          |
The Wizard of Oz   |   101    | Lions and tigers and bears, oh my!
                   |          |
Cabaret            |   124    | Life is a cabaret, old chum, so come to the
                   |          | cabaret.

3. Write the following two functions, both of which use the movies array to
determine what to return.

    getMovieByTitle - this function expects a string as a parameter and
        returns the object in the movies array whose title property is equal to
        the string that is passed to it (if there is one).

    getAverageDuration - this function returns the average duration of all the
        movies in the array.

You can test your code by opening index.html in Chrome and using the console
(see http://jsforcats.com/ for instructions on using the console). After you
correct any errors you see when you open the console, you can run commands such
as those below and verify the output.

var starWars = getMovieByTitle('Star Wars');
var pulpFiction = getMovieByTitle('Pulp Fiction');

pulpFiction.isLongerThan(starWars);

pulpFiction.logQuote();

getAverageDuration();
*/

// 2.
var movies = [];

// 1.
function createMovie(_title, _duration, _quote) {
	return {
		title: _title,
		duration: _duration,
		quote: _quote,
		isLongerThan: function(arg) {
			return _duration > arg.duration ? true : false;
		},
		logQuote: function() {
			console.log(_quote);
		}
	}
}

// 2.
movies.push(createMovie("Star Wars", 121, "If there's a bright center to the universe, you're on the planet that it's farthest from."));
movies.push(createMovie("Pulp Fiction", 154, "Do you know what they call a Quarter Pounder with Cheese in France?"));
movies.push(createMovie("Dirty Dancing", 100, "Nobody puts Baby in a corner."));
movies.push(createMovie("Forrest Gump", 142, "Life is like a box of chocolates."));
movies.push(createMovie("The Wizard of Oz", 101, "Lions and tigers and bears, oh my!"));
movies.push(createMovie("Cabaret", 100, "Life is a cabaret, old chum, so come to the cabaret."));

// 3.
function getMovieByTitle(_title) {
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].title === _title) {
            return movies[i];
        }
    }
}

// 3.
function getAverageDuration() {
	var sum = 0;

	for (var i = 0; i < movies.length; i++) {
        sum += movies[i].duration;
    }

    return sum / movies.length;
}
