<?
  // *** Настройка обязательности полей, в случае если они присутствуют в вашей форме
 
  // Имя
  const NAMEISREQUIRED = true;
  const MSGSNAMEERROR = "Поле обязательно для заполнения";
 
  // Телефон
  const TELISREQUIRED = false;
  const MSGSTELERROR = "Поле обязательно для заполнения";
 
  // Email
  const EMAILISREQUIRED = false;
  const MSGSEMAILERROR = "Поле обязательно для заполнения";
  const MSGSEMAILINCORRECT = "Некорректный почтовый адрес";
 
  // Текстовое поле
  const TEXTISREQUIRED = false;
  const MSGSTEXTERROR = "Поле обязательно для заполнения";
 
  // Файл
  const FILEISREQUIRED = false;
  const MSGSFILEERROR = "Поле обязательно для заполнения";
 
  // Соглашение
  const AGGREMENTISREQUIRED = false;
  const MSGSAGGREMENTERROR = "Поле обязательно для заполнения"; 
 
  // Сообщение об успешной отправке
  const MSGSSUCCESS = "Сообщение успешно отправлено";
 
  // *** SMTP *** //
 
    require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
    const HOST = 'ssl://smtp.yandex.ru';
    const LOGIN = 'e90relena@yandex.ru';
    const PASS = 'le_ha_1006';
    const PORT = '465';
 
  // *** /SMTP *** //
 
        // Почта с которой будет приходить письмо
  const SENDER = 'e90relena@yandex.ru';
   
  // Почта на которую будет приходить письмо
  const CATCHER = 'e-e2402@mail.ru';
   
  // Тема письма
  const SUBJECT = 'Заявка с сайта';
   
  // Кодировка
  const CHARSET = 'UTF-8';