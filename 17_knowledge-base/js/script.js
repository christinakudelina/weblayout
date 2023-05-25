const element = document.querySelector('.js-choice')

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false
});

// яндекс карта
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [48.87596424603295,2.3562195635070577],
    zoom: 14
  });

  var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/marker.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-16, -43]
  })

  myMap.geoObjects.add(myPlacemark);
}

// скролл
new SimpleBar(document.querySelector('.skroll'));

// форма
let validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF5C00'
  }
})
let selector = document.querySelector("#phone")
let im = new Inputmask("+7 (999) 999-99-99")
im.mask(selector)

validation.addField("#name", [
    {
      rule: 'required',
      errorMessage : 'Введите имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage : 'Минимум 2 символа'
    },
  ])
  .addField("#phone", [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length > 0)
      },
      errorMessage : 'Введите телефон'
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length === 10)
      },
      errorMessage : 'Неверно введён телефон'
    },
  ])
  .addField("#email", [
    {
      rule: 'required',
      errorMessage : 'Введите почту'
    },
    {
      rule: 'email',
      errorMessage : 'Неверно указана почта'
    },
  ])




