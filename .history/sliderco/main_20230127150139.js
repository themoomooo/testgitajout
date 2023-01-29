const images = [
    { src: 'img1.jpg', title: 'WindWaker' },
    { src: 'imag2.jpg', title: 'Breath of the wild' },
    { src: 'images/6.jpg', title: 'Link\'s awakening' }
];

const slider = new Slider({
    images: images,
    area: document.querySelector('div.slider')
});

