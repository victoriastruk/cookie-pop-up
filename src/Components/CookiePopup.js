import "./CookiePopup.css";

export default function CookiePopup() {
  
  return (
        <div className="modal">
          <div className="overlay"></div>
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
              <button className="button button-accept" type="button">Прийняти</button>
              <button className="button button-decline" type="button">Відхилити</button>
              </div>
            </div>
          </div>
        </div>
  );
}
