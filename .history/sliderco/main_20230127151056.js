const images = [
    { src: 'img1.jpg', title: 'WindWaker' },
    { src: 'img2.jpg', title: 'Breath of the wild' },
    { src: 'img3.jpg', title: 'Link\'s awakening' }
];

const slider = new Slider({
    images: images,
    area: document.querySelector('div.slider')
});
const images2 = [
    { src: 'img1.jpg', title: 'WindWaker' },
    { src: 'img2.jpg', title: 'Breath of the wild' },
    { src: 'img3.jpg', title: 'Link\'s awakening' }
];
const slider2 = new Sliderplay({
    images: images2,
    area: document.querySelector('div.slider2')
});

