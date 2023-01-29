const images = [
    { src: 'img1.jpg', title: 'WindWaker' },
    { src: 'img2.jpg', title: 'Breath of the wild' },
    { src: 'img3.jpg', title: 'Link\'s awakening' }
];

const slider = new Slider({
    images: images,
    area: document.querySelector('div.slider')
});
const images = [
    { src: 'img1.jpg', title: 'WindWaker' },
    { src: 'img2.jpg', title: 'Breath of the wild' },
    { src: 'img3.jpg', title: 'Link\'s awakening' }
];
const slider2 = new Sliderauto({
    images: images,
    area: document.querySelector('div.slider2')
});

