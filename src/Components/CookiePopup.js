import React, { useState } from 'react';
import "./CookiePopup.css";

export default function CookiePopup() {
  const [showModal, setShowModal] = useState( false );
  const [acceptedCookies, setAcceptedCookies] = useState( false );

  const toggleModal = () => {
    setShowModal( !showModal );
  };
  if ( showModal ) {
    document.body.classList.add( 'active-modal' )
  } else {
    document.body.classList.remove( 'active-modal' )
  }
  const handleAcceptCookies = () => {
    setAcceptedCookies( acceptedCookies );
    localStorage.setItem( 'cookieAccepted', 'true' );
    setShowModal( false );
  };

  const handleDeclineCookies = () => {
    setAcceptedCookies( acceptedCookies );
    localStorage.setItem( 'cookieAccepted', 'false' );
    setShowModal( false );
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Cookies
      </button>

      {showModal && <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <div>
            <h2>Використання cookies</h2>
            <p>
              Цей сайт використовує cookies з метою збору інформації про відвідувачів сайту та для покращення якості його роботи.
              Ми використовуємо електронну адресу
              для розсилки повідомлень на теми, які можуть бути вам цікаві. Дізнайтеся більше про
              те, як сайт збирає та використовує інформацію користувачів,
              а також про права користувачів відносно своїх персональних даних, натиснувши на посилання:
              <a href="https://mon.gov.ua/ua/privacy-policy"> Політика конфіденційності</a>
            </p>
            <p>Щоб дати згоду, натисніть кнопку «Прийняти». Скористайтеся кнопкою «Відхилити», щоб продовжити без прийняття.</p>
            <div className="button-wrap">
              <button className="button button-accept" type="button" onClick={handleAcceptCookies}>Прийняти</button>
              <button className="button button-decline" type="button" onClick={handleDeclineCookies}>Відхилити</button>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}
