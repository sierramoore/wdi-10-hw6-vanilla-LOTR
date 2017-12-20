console.log("the right file");

// Dramatis Personae
let hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

let buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

let lands = ['The Shire', 'Rivendell', 'Mordor'];
let body = document.body;


let makeMiddleEarth = function () {
    // create a section tag with an id of `middle-earth`
    let newSection = document.createElement('section');
    newSection.setAttribute('id', 'middle-earth');

    console.log(newSection);

    for(i=0; i < lands.length; i++){
        // make article tags for each h1
       let newArticle = document.createElement('article');
        // make h1
       let hOne = document.createElement('h1');
       // put the text from land array into h1
        hOne.innerText = lands[i];
        // put h1 inside article tags
       newArticle.appendChild(hOne);
        // put the article inside one section created ealier
        newSection.appendChild(newArticle);

        console.log(newArticle);
    }
    // let shire = document.querySelector('h1')
    body.appendChild(newSection);

    // inside each `article` tag include an `h1` with the name of the land
    // let newh1 = document.createElement('h1');
    // let newh2 = document.createElement('h1');
    // let newh3 = document.createElement('h1');
    // lands.appendChild(newh1);
    // lands.appendChild(newh2);
    // lands.appendChild(newh3);
    //-------did all of above in one line below------

    // lands.innerHTML = '<h1>The Shire</h1><h1>Rivendell</h1><h1>Mordor</h1>';
    // append `middle-earth` to your document `body`

};
// console.log()
makeMiddleEarth();


let makeHobbits = function () {
    // place everything in one article
    // let artTag = document.createElement('article');

    // create ul once and place all li inside
    let ulist = document.createElement('ul');

    for(i=0; i < hobbits.length; i++){

        // create li
        let list = document.createElement('li');
        // give each li tag a class of hobbit
        list.setAttribute('class', 'hobbit');
        // add content from array to list tag
        list.innerText = hobbits[i];
        // put li inside ul
        ulist.appendChild(list);
        // ulist.appendChild(artTag);


    }
    // find article where the shire is
    let getArticle = document.querySelector('article');
    // put the hobbits in the shire
    getArticle.appendChild(ulist)

};
makeHobbits();



let keepItSecretKeepItSafe = function () {
    // create a div with an id of `'the-ring'`
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'the-ring');

    // give the div a class of `'magic-imbued-jewelry'`
    newDiv.setAttribute('class', 'magic-imbued-jewlry');

    // add the ring as a child of `Frodo`
    let froto = document.querySelector('li');
    froto.appendChild(newDiv)

    // get frodo from the dom

    //append ring to frodo

};

keepItSecretKeepItSafe();



let makeBuddies = function () {
    // create an `aside` tag
    let aside = document.createElement('aside');
    // attach an `unordered list` of the `'buddies'` in the aside
    let ul = document.createElement('ul');

    for(i=0; i <buddies.length; i++){
        //create li for all buddies
        let li = document.createElement('li');
        // put text of buddies in li
        li.innerText = buddies[i];
        // put all the li in ul
        ul.appendChild(li)
    }
    // put the ul in aside tag
    aside.appendChild(ul);
    //check if it came out right
    console.log(aside)

    //find rivendell
    let rivendale = document.querySelectorAll('article')[1];
    // insert  aside as a child element of `rivendell`
    rivendale.appendChild(aside)

};
makeBuddies();


let beautifulStranger = function () {
    // find strider
    let strider = document.getElementsByTagName("li");
    // change the `'Strider'` text to `'Aragorn'`
    strider[7].innerText = "Aragon";
};
beautifulStranger();


let leaveTheShire = function () {
    // assemble the `hobbits` and move them to `rivendell`
    // let hobbits = document.getElementsByClassName('hobbits');
    // console.log(hobbits)

    // let hobbits = document.querySelector('ul')[0];
    // let rivendale = document.getElementsByTagName('article');
    // rivendale[1].appendChild(hobbits)

    let hobbits = document.getElementsByTagName("ul")[0];
    let rivendale = document.getElementsByTagName("article");
    rivendale[1].appendChild(hobbits);

};
leaveTheShire();


let forgeTheFellowShip = function () {
    // create a new div called `'the-fellowship'` within `rivendell`
    let rivendale = document.getElementsByTagName('article')[1];
    console.log(rivendale)

    let div = document.createElement('div')
    div.setAttribute('class', 'the-fellowship')
    div.appendChild(rivendale)
    // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
    for(i=0; i <hobbits.length; i++){
        div.appendChild(hobbits[i]);
        // after each character is added make an alert that they // have joined your party
        console.log(hobbits[i] + " has joined the party!")
    }
    for(i=0; i <buddies.length; i++){
        div.appendChild(buddies[i]);
        // after each character is added make an alert that they // have joined your party
        console.log(buddies[i] + " has joined the party!")
    }


};
// forgeTheFellowShip();


//8
let theBalrog = function () {
    // change the `'Gandalf'` text to `'Gandalf the White'`
    let gandolf = document.getElementByTagName('ul')[0];
    gandolf.innerText = 'Gandalf the White';
    gandolf.backgroundColor = 'white';
    gandolf.borderColor = 'grey';
    // apply the following style to the element, make the // background 'white', add a grey border
};
// theBalrog()

//9
let hornOfGondor = function () {
    // pop up an alert that the horn of gondor has been blown
    alert("The horn of gondor has been blown");
    // Boromir's been killed by the Uruk-hai!
    // Remove `Boromir` from the Fellowship
    // let boromir = document.getElementsByTagName('ul')[4];

    li.removeChild(list.childNodes[4])
};
// hornOfGondor();

//10
let itsDangerousToGoAlone = function (){
    // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
    // add a div with an id of `'mount-doom'` to `Mordor`
};


//11
let weWantsIt = function () {
    // Create a div with an id of `'gollum'` and add it to Mordor
    // Remove `the ring` from `Frodo` and give it to `Gollum`
    // Move Gollum into Mount Doom
};

//12
let thereAndBackAgain = function () {
    // remove `Gollum` and `the Ring` from the document
    // Move all the `hobbits` back to `the shire`
};