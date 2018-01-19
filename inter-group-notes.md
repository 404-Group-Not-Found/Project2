## Thursday 18 Jan Goals for ABF
* button for api calls to Zomato
* home/return/buttons for navigating through site on each page
    * is a navbar in order? I eliminated the jumbotron in a previous commit, this can of course be restored. It seemed too large for our needs right now but a subtle (even transparent) navbar might be a good option with typical "hamburger" (think three horizontal lines stacked on top of each other) dropdown menu to represent the buttons that move from each page to another AND show the restaurant "category" selection that we have discussed
* maybe consider a different button styling for the "login"
    * some kind of hover effect, color change, a different shape, etc.
* display restaurant images
    * button for specific restaurant categories
* some kind of message to show the login is “free”, or “easy” or noncommittal or whatever
* develop the ideal path that our users will follow:
    * will they be forced to login?
    * can you swipe freely to try the app before signing up?
* For the API, it seems we will have to query the users each time for what city they want to search. We could save and use their first preference as database column called maybe "preferredLocale" or something. It seems to lack some kind of 'this.location' from the API data but digging into some of the NPM modules available, we can query that data and save it after the user chooses the preferred option. See:
    * https://github.com/jayeshsolanki93/zomato.js
    * https://www.npmjs.com/package/zomato
    * Basically all of the Zomato API widget, web and mobile app UI expect some kind of user input or confirmation for the city. The Widget the Zomato people offer has a default city derived from something, if we have another NPM module we might be able to get the city of te specific user and offer the option to search another city in another input or something.