import { useState } from "react";
import copy from "copy-to-clipboard";

import "./App.css";

function App() {
  const [isCopy, setIsCopy] = useState(false);

  const clipboardHandle = () => {
    if(!isCopy) {
      copy("REFBNK8Q");
      setIsCopy(true);
      //ym('000','reachGoal','copy')
    } else {
      setIsCopy(false);
    }
  };

  const changeTooltip = () => {
    setIsCopy(false);
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="head">
            <h1>
              Промокод&nbsp;на 1000&nbsp;рублей в&nbsp;приложении Делимобиль
            </h1>
          </div>
          <div className="content">
            <div className="promo">
              <span>REFBNK8Q</span>
            </div>
            <div className="copy">
              <div className="tooltip">
                <span
                  type="button"
                  name="button"
                  onClick={clipboardHandle}
                  onMouseOut={changeTooltip}
                  className="button"
                >
                {!isCopy ? "скопировать" : "получилось!"}  
                </span>
              </div>
            </div>
          </div>
          <div className="main-text">
            <p>
              Вам зачислится 1000 рублей в&nbsp;приложении Делимобиль после ввода&nbsp;промокода.
              Вы&nbsp;платите только&nbsp;50% от&nbsp;стоимости поездки! 
              Новым клиентам.
            </p>
            <p>
              <span className="attention">Внимание! </span>
              Бонусы зачисляются не&nbsp;сразу, дело в&nbsp;том, что Делимобиль
              около часа проверяет промокод, поэтому нужно подождать, иначе
              не&nbsp;сработает!
            </p>
          </div>
          <div className="download">
            <div className="android">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=com.carshering&hl=ru&gl=US"
                className="buttons"
              >
                android
              </a>
            </div>
            <div className="ios">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://apps.apple.com/ru/app/делимобиль-твой-каршеринг/id1038254296"
                className="buttons"
              >
                iOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
