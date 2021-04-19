// ###################################
// ####### Header Animation ##########
// ###################################
const hamBtn = document.querySelector('.header__ham');
const mainLogo = document.querySelector('.header__logo img');
const overlay = document.querySelector('.header__overlay');
const mobMenu = document.querySelector('.header__overlayMenu');
const addRemoveMobMenu = document.querySelectorAll('.addRemoveMobMenu');
addRemoveMobMenu.forEach((addRemove) => {
    addRemove.addEventListener('click', e => {
        // Ham Animation
        hamBtn.classList.toggle('hamAnimation');
        // Hiding the main bookmark logo on mobile
        mainLogo.classList.toggle('hidden');
        // toggling overlay
        overlay.classList.toggle('activeOverlay');
        // making body overflow hidden when overlay appears
        document.body.classList.toggle('overflow-hidden');
        // hiding the mob menu
        mobMenu.classList.toggle('activeMobMenu');
    })
})


// ################################################
// ####### Feature section Functionality ##########
// ################################################
const featureData = [
    {
        id : 1,
        image: './images/illustration-features-tab-1.svg',
        heading:`Bookmark in one click`,
        content : `Organize your bookmarks however you like. Our simple drag-and-drop interface
                    gives you complete control over how you manage your favourite sites.`,
    },
    
    {
        id: 2,
        image: './images/illustration-features-tab-2.svg',
        heading: `Intelligent search`,
        content: `Our powerful search feature will help you find saved sites in no time at all.
                    No need to trawl through all of your bookmarks.`,
    },

    {
        id: 3,
        image: './images/illustration-features-tab-3.svg',
        heading: `Share your bookmarks`,
        content: `Easily share your bookmarks and collections with others. Create a shareable
                    link that you can send at the click of a button.`,
    }
]

const featureWrapper = document.querySelector('.features__wrapper');  // feature section wrapper
const displayFeature = function(data) {
    const contentContainer = document.createElement('div');
    contentContainer.className = 'features__wrapper__content flex';
    contentContainer.innerHTML = 
    `
        <div class="features__wrapper__content__image">
            <img src=${data.image} alt="tab-1-image">
        </div>

        <div class="features__wrapper__content__description">
            <h2>
                ${data.heading}
            </h2>

            <p>
                ${data.content}
            </p>

            <div class="cta">
                <button class="btn btn-info">
                    More Info
                </button>
            </div>
        </div>
    `;
    featureWrapper.appendChild(contentContainer);
}


// feature changer buttons 
const buttonContainer = document.querySelector('.features__wrapper__changer');  // contains 3 feature changer buttons
buttonContainer.addEventListener('click', e => {
    const featureChangerBtns = document.querySelectorAll('.button');   // all 3 feature changer buttons

    // dealing with showing active buttons in feature section 
    featureChangerBtns.forEach(btn => {
        btn.id === e.target.id ? btn.classList.add('active') : btn.classList.remove('active');
    })

    // dealing with removing and adding changed feature content as per buttons clicked
    const currentFeature = document.querySelector('.features__wrapper__content');  // getting the currently displayed feature from UI
    featureWrapper.removeChild(currentFeature)    // removing the current feature before adding new one
    featureData.forEach(feature => {   
        if (feature.id === +e.target.dataset.tab) {
            displayFeature(feature)
        }
    })
})



// ################################################
// ####### FAQ section Functionality ##############
// ################################################
const faqItemsButton = document.querySelectorAll('.faq-button');
faqItemsButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const faqItem = e.target.parentElement;

        if (e.target.getAttribute('aria-expanded') === 'true') {
            e.target.setAttribute('aria-expanded', false)
            faqItem.classList.remove('pb-39');
        }
        else {
            faqItemsButton.forEach(btn => {
                if (btn === e.target) {
                    btn.setAttribute('aria-expanded', true)
                    faqItem.classList.add('pb-39');
                }else{
                    btn.setAttribute('aria-expanded', false)
                    faqItem.classList.remove('pb-39');
                }
            })
        }
    })
})


// ################################################
// ####### Contact section Functionality ##########
// ################################################
const contactForm = document.querySelector('.contact__wrapper__form');
const emailField = document.querySelector('#email');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let userEmail = emailField.value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailRegex.test(userEmail)) {
        emailField.parentElement.classList.remove('error')
        emailField.value = '';
        emailField.blur();
    }
    else{
        emailField.parentElement.classList.add('error')
    }
})


// ################################################
// ####### Attribution Functionality ##############
// ################################################
const attrImg = document.querySelector('#attr');
const attrWrapper = document.querySelector('.attribution');
attrImg.addEventListener('click', e => {
    attrWrapper.classList.toggle('attr-statement')
})