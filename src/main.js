document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');

    const heroSection = document.querySelector('.hero');
    const alturaHero =  heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const positionNow =  window.scrollY;

        if(positionNow < alturaHero){
            hiddenHeaderElement();
        }else{
            showHeaderElement();
        }
    })

    // Seção de atraçoes, Programação das abas
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const tabTarget = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            hideAllTabs();
            tab.classList.add('show__list--is-active');
            removeButtonActive()
            botao.target.classList.add('show__tabs__button--is-active');
        })
    }

    // Seção faq, acordion
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', openOrClose);
    }
})

function hiddenHeaderElement(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElement(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrClose(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function removeButtonActive(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('show__tabs__button--is-active');
    }
}

function hideAllTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('show__list--is-active');
    }
}