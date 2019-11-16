const card = document.querySelectorAll('.card')
const modal = document.querySelector('.modal-overlay')

for (let i of card) {
  i.addEventListener('click', () => {
    // input
    const img = i.querySelector('.card__img > img').getAttribute('src')
    const title = i.querySelector('.card__title').innerHTML
    const author = i.querySelector('.card__author').innerHTML
    // output
    const imgModal = modal.querySelector('.modal__content > img')
    const titleModal = modal.querySelector('.modal__content > h1')
    const authorModal = modal.querySelector('.modal__content > p')

    modal.classList.add('active')
    imgModal.src = img
    titleModal.innerHTML = title
    authorModal.innerHTML = author
  })
}

modal.querySelector('.modal__btn-close').addEventListener('click', () => {
  modal.classList.remove('active')
})
