let elsFeaturesTabsItem = document.querySelectorAll('.description__item--wrapper');
let elsFeaturesTabsLink = document.querySelectorAll('.description__item-name');

elsFeaturesTabsLink.forEach(function (link) {
    link.addEventListener('click', function () {
        elsFeaturesTabsItem.forEach(function (item) {
            item.classList.remove('description__item__wrapper--active')
        })

        link.parentElement.classList.add('description__item__wrapper--active')
    })
})


let elsQA = document.querySelectorAll('.qa');
let elsQAToggler = document.querySelectorAll('.qa__toggler');

elsQAToggler.forEach(function (toggler) {
    toggler.addEventListener('click', function() {
        elsQA.forEach(function(qa) {
            qa.classList.remove('qa--active');
        })

        toggler.closest('.qa').classList.add('qa--active');
    })
})