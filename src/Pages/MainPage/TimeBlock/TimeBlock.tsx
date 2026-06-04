import { useEffect, useState } from "react";
import "./TimeBlock.scss";

export const TimeBlock = () => {
  const [isTime, setIsTime] = useState(259200);

  useEffect(() => {
    if (isTime <= 0) return
    const intervalId = setInterval(() => {
      setIsTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);

  }, [isTime])

  const formatTime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const d = String(days).padStart(2, '0');
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');

    return { d, h, m, s };
  };

  const { d, h, m, s } = formatTime(isTime);

  return (
        <div className="time-block">
          <h1 className="time-block__title">Deals Of The Month</h1>

          <p className="time-block__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>

          <div className="time-block__button">Buy Now</div>

          <div className="title-block__time">
            <h2 className="title-block__time--title">
              Hurry, Before It’s Too Late!
            </h2>

            <div className="title-block__time__container">
              <div className="title-block__time__item">
                <div className="title-block__time__item--number">{d}</div>
                <div className="title-block__time__item--title">Days</div>
              </div>

              <div className="title-block__time__item">
                <div className="title-block__time__item--number">{h}</div>
                <div className="title-block__time__item--title">Hr</div>
              </div>

              <div className="title-block__time__item">
                <div className="title-block__time__item--number">{m}</div>
                <div className="title-block__time__item--title">Mins</div>
              </div>

              <div className="title-block__time__item">
                <div className="title-block__time__item--number">{s}</div>
                <div className="title-block__time__item--title">Sec</div>
              </div>
            </div>

          </div>
        </div>

  );
};
