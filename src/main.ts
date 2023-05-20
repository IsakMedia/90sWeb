// About page
const aboutPageEl = document.querySelector('#aboutEl')

// Main page
const mainBoxEl = document.querySelector('#mainBox')

// Mainpage clickers
const closeBtnEl = document.querySelector('#xBoxBtn')

const aboutLinkEl = document.querySelector('#aboutLink')

const ContactLinkEl = document.querySelector('#contactLink')

const ContactBtnEl = document.querySelector('#contact-btn')


aboutLinkEl?.addEventListener('click', () => {
    document.querySelector('#mainBox')?.classList.add('hide')
    document.querySelector('#aboutEl')?.classList.remove('hide')
})



document.querySelector('#checkout-btn')!.addEventListener('click', () => {
    // TRANSITION
    document.querySelector("#main-page")?.classList.add("hide");

    document.querySelector(".checkout-form")?.classList.remove("hide");

    // theDropDown!.classList.toggle("hide");
});
