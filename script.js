// Nathan Shulkin
// Basic Template script


const app = document.getElementById('root');


// drop down button click
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownClick() {
  document.getElementById("myDropdown").classList.toggle("show");
  var animate = createKeyframeAnimation();
  document.getElementById("myDropdown").setAttribute(animate);  
  
  document.getElementById("myDropdown").animate({
                                                  opacity:'+=0.2',
                                                  height: '+=50px',
                                                  margin: '-=20px',
                                                });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function calculateCollapsedScale () {
  // The menu title can act as the marker for the collapsed state.
  const collapsed = ddown.getBoundingClientRect();
  // Whereas the menu as a whole (title plus items) can act as
  // a proxy for the expanded state.
  const expanded = ddown.getBoundingClientRect();
  return {
    x: collapsed.width / expanded.width,
    y: collapsed.height / expanded.height
  };
}

function ease (v, pow=4) {
  return 1 - Math.pow(1 - v, pow);
}

function createKeyframeAnimation () {
  // Figure out the size of the element when collapsed.
  let {x, y} = calculateCollapsedScale();
  let animation = '';
  let inverseAnimation = '';
  
  for (let step = 0; step <= 100; step++) {

    // Remap the step value to an eased one.
    let easedStep = ease(step / 100);

    // Calculate the scale of the element.
    const xScale = x + (1 - x) * easedStep;
    const yScale = y + (1 - y) * easedStep;

    animation += `${step}% {
      transform: scale(${xScale}, ${yScale});
    }`;

    // And now the inverse for the contents.
    const invXScale = 1 / xScale;
    const invYScale = 1 / yScale;
    inverseAnimation += `${step}% {
      transform: scale(${invXScale}, ${invYScale});
    }`;

  }

  return `
  @keyframes menuAnimation {
    ${animation}
  }

  @keyframes menuContentsAnimation {
    ${inverseAnimation}
  }`;
}


function twitOpen() {
  window.open("https://twitter.com");
}

function fbOpen() {
  window.open("https://facebook.com/");
}

function instaClick() {
  window.open("https://instagram.com/");
}

function joinClick() {
  alert("Thank You For Wanting To Join the Revolution.");
}

function usClick() {
  window.scrollTo(0, 1775);
}

function learnClick() {
  alert("Books to Read.");
}

function aboutClick() {
  alert("working on the About Us page.");
}


function favClick() {
  window.scrollTo(0, 2100);
}


// containers for differnt pages
const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container');

const anotherContainer = document.createElement('div');
anotherContainer.setAttribute('class', 'container');



// create clickable menu for webpage, add it to dropdown 
const menuDDown = document.createElement('div');
menuDDown.setAttribute('id', 'myDropdown');
menuDDown.setAttribute('class', 'dropdown-content');

const custom = document.createElement('div');
custom.setAttribute('class', 'menuCard');

custom.addEventListener("click", joinClick);

const customTxt = document.createElement('p');
customTxt.textContent="Join Us";

const cater = document.createElement('div');
cater.setAttribute('class', 'menuCard');
const caterTxt = document.createElement('p');
caterTxt.textContent="Learn More";

cater.addEventListener("click", learnClick);


const about = document.createElement('div');
about.setAttribute('class', 'menuCard');
const aboutTxt = document.createElement('p');
aboutTxt.textContent="About Us";

about.addEventListener("click", aboutClick);


const favorites = document.createElement('div');
favorites.setAttribute('class', 'menuCard');
const favTxt = document.createElement('p');
favTxt.textContent="Our Favorites";

favorites.addEventListener("click", favClick);


const us = document.createElement('div');
us.setAttribute('class', 'menuCard');
const usTxt = document.createElement('p');
usTxt.textContent="Find Us Online";

us.addEventListener("click", usClick);


//add menu
menuDDown.appendChild(custom);
menuDDown.appendChild(cater);
menuDDown.appendChild(about);
menuDDown.appendChild(favorites);
menuDDown.appendChild(us);
custom.appendChild(customTxt);
cater.appendChild(caterTxt);
favorites.appendChild(favTxt);
us.appendChild(usTxt);
about.appendChild(aboutTxt);


// create drop down
const ddown = document.createElement('div');
ddown.setAttribute('class', 'dropbtn');
ddown.addEventListener("click", dropdownClick);
ddown.textContent="Ride or Die";

// put menu in dropdown
ddown.appendChild(menuDDown);


// add elements to page
app.appendChild(ddown);
app.appendChild(mainContainer);

