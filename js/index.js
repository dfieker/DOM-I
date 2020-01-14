const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navBar = document.querySelectorAll('a');
console.log(navBar);
navBar[0].textContent = "Services";
navBar[1].textContent = "Product";
navBar[2].textContent = "Vision";
navBar[3].textContent = "Features";
navBar[4].textContent = "About";
navBar[5].textContent = "Contact";
navBar.forEach(element => {
  element.style.color = "green";
});

const H1 = document.querySelector('h1');
console.log(H1);
H1.textContent = "DOM Is Awesome";

const Button = document.querySelector('button');
console.log(Button);
Button.textContent = "Get Started";


const codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', siteContent['cta']["img-src"]);
console.log(codeImg);

const Features = document.getElementsByTagName('h4')[0];
console.log(Features);
Features.textContent = "Features";

const featuresContent = document.getElementsByTagName('p')[0];
featuresContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const About = document.getElementsByTagName('h4')[1];
About.textContent = "About";

const aboutContent = document.getElementsByTagName('p')[1];
aboutContent.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const Services = document.getElementsByTagName('h4')[2];
Services.textContent = "Services";

const servicesContent = document.getElementsByTagName('p')[2];
servicesContent.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const Product = document.getElementsByTagName('h4')[3];
Product.textContent = "Product";

const productContent = document.getElementsByTagName('p')[3];
productContent.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const Vision = document.getElementsByTagName('h4')[4];
Vision.textContent = "Vision";

const visionContent = document.getElementsByTagName('p')[4];
visionContent.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
console.log(middleImg);

const Contact = document.getElementsByTagName('h4')[5];
Contact.textContent = "Contact";

const contactInfo1 = document.getElementsByTagName('p')[5];
contactInfo1.textContent = "123 Way 456 Street Somewhere, USA";

const contactInfo2 = document.getElementsByTagName('p')[6];
contactInfo2.textContent = "1 (888) 888-8888";

const contactInfo3 = document.getElementsByTagName('p')[7];
contactInfo3.textContent = "sales@greatidea.io";

const Footer = document.getElementsByTagName('p')[8];
console.log(Footer);
Footer.textContent = "Copyright Great Idea! 2018";

const Prepend = document.createElement("a");
Prepend.textContent = "Blog";
Prepend.style.color = "green";

const firstContent = document.querySelector('nav');
firstContent.prepend(Prepend);

const Append = document.createElement("a");
Append.textContent = "About Me";
Append.style.color = "green";
const secondContent = document.querySelector('nav');
secondContent.append(Append);

