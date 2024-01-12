const first = document.querySelector(".버튼1");
const second = document.querySelector('.버튼2');
const third = document.querySelector('.버튼3')
const bgcolor = document.querySelector('.버튼4')
const imgs = document.querySelector('.imgs')

let index  = 0;

first.addEventListener('click',() => {
    index = 0;
    imgs.style.transform = `translate3d(-${400 * index}px, 0, 0)`;

});

second.addEventListener('click',() => {
    index = 1;

    imgs.style.transform = `translate3d(-${400 * index}px, 0, 0)`;

});

third.addEventListener('click',() => {
    index = 2;

    imgs.style.transform = `translate3d(-${400 * index}px, 0, 0)`;

});


bgcolor.addEventListener('click', (e) => {
    document.body.style.backgroundColor = "Bisque";
});