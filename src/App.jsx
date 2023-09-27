import { useState } from "react";
import { YMInitializer } from "react-yandex-metrika";
import copy from "copy-to-clipboard";

import "./App.css";

function App() {
  const [isCopy, setIsCopy] = useState(false);

  const clipboardHandle = () => {
    if (!isCopy) {
      copy("REFBNK8Q");
      setIsCopy(true);
    } else {
      setIsCopy(false);
    }
  };

  const changeTooltip = () => {
    setIsCopy(false);
  };

  return (
    <>
      <YMInitializer accounts={[95042949]} />
      <div className="main-container">
        <div className="container">
          <div className="head">
            <h1>
              Промокод&nbsp;на 1000&nbsp;рублей в&nbsp;приложении Делимобиля{" "}
            </h1>
          </div>
          <div className="content">
            <div className="promo">
              <span onClick={clipboardHandle}>REFBNK8Q</span>
            </div>
            <div className="copy">
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
          <div className="main-text">
            <p>
              <span className="attention">Внимание!</span> Код нужно вводить
              до&nbsp;первой аренды в&nbsp;разделе &laquo;Бонусы
              и&nbsp;промокоды&raquo;. 1000&#8381; зачислится не&nbsp;сразу,
              дело в&nbsp;том, что Делимобиль около часа проверяет промокод,
              поэтому нужно подождать <img src="1000r.jpg" width="60px" />,
              иначе не&nbsp;сработает!
            </p>
            <p>
              Почему отдаю бесплатно? Потому что столько&nbsp;же бонусов получу
              и&nbsp;я, после того, как вы&nbsp;его активируете.
            </p>
            <p>
              <span className="now">Теперь:</span> выберите операционную систему
              вашего телефона и&nbsp;скачайте приложение Делимобиля.
            </p>
          </div>
          <div className="download">
            <div className="ios">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://apps.apple.com/ru/app/делимобиль-твой-каршеринг/id1038254296"
                className="buttons radius"
              >
                &nbsp;iOS
              </a>
            </div>
            <div className="android">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=com.carshering"
                className="buttons"
              >
                &#128241;&nbsp;android
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
