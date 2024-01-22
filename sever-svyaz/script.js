const burgerMenu = document.querySelector('.burger-menu')
const cross = document.querySelector('.cross')
const burgerIcon = document.querySelector('.burger')

burgerIcon.addEventListener('click', function(){
  burgerMenu.classList.add('vision')
  }
)

cross.addEventListener('click', function(){
  burgerMenu.classList.remove('vision')
})