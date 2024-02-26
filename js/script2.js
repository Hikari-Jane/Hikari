const galleryItems = document.querySelector('#gallery-items');

const barcelona1 = {
    img: 'barcelona1.JPG',
    place : 'Barcelona',
    year : '2014',
    desc : 'view from Guell Park',
};
const barcelona2 = {
    img: 'barcelona2.JPG',
    place : 'Barcelona',
    year : '2014',
    desc : 'Sagrada Familia',
};
const burano = {
    img: 'burano.JPG',
    place : 'Burano, Venezia',
    year : '2014',
    desc : 'view of the canal and buildings',
};
const granada = {
    img: 'granada.JPG',
    place : 'Granada',
    year : '2014',
    desc : 'The Alhambra Castle',
};
const london = {
    img: 'london.JPG',
    place : 'London',
    year : '2012',
    desc : 'The Big Ben',
};
const madrid = {
    img: 'madrid.JPG',
    place : 'Madrid',
    year : '2014',
    desc : 'Building of the Ministry of Agriculture',
};
const munich = {
    img: 'munich.JPG',
    place : 'Munich',
    year : '2013',
    desc : 'a market in Munich',
};
const newyork = {
    img: 'newyork.JPG',
    place : 'New York',
    year : '2013',
    desc : 'Ground Zero in New York',
};
const rome = {
    img: 'rome.JPG',
    place : 'Rome',
    year : '2014',
    desc : 'The Colosseum',
};

const lists = [
    barcelona1,
    barcelona2,
    burano,
    granada,
    london,
    madrid,
    munich,
    newyork,
    rome,
]

for (let i=0; i<=lists.length; i++) {
    const {img, place, year, desc} = lists[i];
    const content = `<div class="images"><img src="images/${img}" alt="${place}"><p>Location: ${place}</p><p>Year Visited: ${year}</p><p>Description: ${desc}</p></div>`;
    
    galleryItems.insertAdjacentHTML('beforeend', content);
    
    const images = document.querySelectorAll('.images');
    /* console.log(images); */
    
    const keyframes3 = {
        filter : ['blur(20px)','blur(0)'],
        };

    const options = {
        duration : 800,
        fill : 'forwards',
        delay : i*300,
    };
    
    images[i].animate(keyframes3, options);
};

