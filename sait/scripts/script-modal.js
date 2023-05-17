//$(function () {
//    $('#callback-button').click(function () {
//      $('.modal').addClass('modal_active');
      // $('body').addClass('hidden');
//    });
   
//    $('.modal__close-button').click(function () {
//      $('.modal').removeClass('modal_active');
     // $('body').addClass('hidden');
//    });

//    $('.modal-button').click(function () {
//        $('.modal').removeClass('modal_active');
       // $('body').addClass('hidden');
//      });
//  });

  // Закрытие модального окна при клике вне его контентной области
 //$('.modal').mouseup(function (e) {
 //   let modalContent = $(".modal__content");
//   if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
//      $(this).removeClass('modal_active');
      // $('body').addClass('hidden');
//    }
//  });


document.addEventListener('DOMContentLoaded', () => {  
 
    // Кнопка по которой происходит клик
    let callBackButton = document.getElementById('callback-button');
   
    // Модальное окно, которое необходимо открыть
    let modal1 = document.getElementById('modal-1');
   
    // Кнопка "закрыть" внутри модального окна
    let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
   
    // Кнопка "закрыть и отправить" внизу модального окна
    let closeButtonFooter = modal1.getElementsByClassName('modal-button')[0];
    // Тег body для запрета прокрутки
    //let tagBody = document.getElementsByTagName('body');
   
    callBackButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      //tagBody.classList.add('hidden');
    }
   
    closeButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.remove('modal_active');
      //tagBody.classList.remove('hidden');
    }

    closeButtonFooter.onclick = function (e) {
        e.preventDefault();
        modal1.classList.remove('modal_active');
        //tagBody.classList.remove('hidden');
      }
   
    modal1.onmousedown = function (e) {
      let target = e.target;
      let modalContent = modal1.getElementsByClassName('modal-content')[0];
      if (e.target.closest('.' + modalContent.className) === null) {
        this.classList.remove('modal_active');
       // tagBody.classList.remove('hidden');
      }
    };

    // Вызов модального окна несколькими кнопками на странице
  let buttonOpenModal1 = document.getElementsByClassName('get-modal_1');
 
  for (let button of buttonOpenModal1) {
    button.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      //tagBody.classList.add('hidden');
    }
  }
  
  });

  document.addEventListener('DOMContentLoaded', function() {

    // получим кнопку id="btn" с помощью которой будем открывать модальное окно
    const btn = document.querySelector('#callback-button');
    // активируем контент id="modal" как модальное окно
    const modal = new bootstrap.Modal(document.querySelector('#modal-1'));
    // при нажатии на кнопку
    btn.addEventListener('callback-button', function() {
      // открываем модальное окно
      modal.show();
    });
  
  });