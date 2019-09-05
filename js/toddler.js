const input = document.querySelector('.slider');
const number = document.querySelector('.number__item');

input.addEventListener('input', function () {
    const tmp = (input.value*100)/input.max;
    input.style.background = 'linear-gradient(to right, #f15d09 0% '+tmp +'%, #676363 ' + tmp + '%, #676363 100%)';
    input.style.background =' -webkit-gradient(linear, left top, right top, color-stop('+tmp+ '%,#f15d09), color-stop('+tmp+ '%,#333), color-stop('+tmp+ '%,#888))';
    number.innerHTML = input.value;
})
