import { useState } from "react";
import { Window } from "./components/Window/Windows";
import Confetti from "react-confetti";
import tree from "./assets/tree.png";

export const App = () => {
  const [isWindowClosed, setIsWindowClosed] = useState(false);

  const handleWindowClose = () => {
    setIsWindowClosed(true);
  };

  return (
    <main>
      <section className="section">
        {!isWindowClosed && (
          <Window
            title="Сергей, с наступающим Новым годом! 🎄"
            onClose={handleWindowClose}
          >
            <>
              <p>
                Пусть этот год принесёт Вам множество приятных моментов,
                вдохновляющих встреч и&nbsp;блестящих побед. Желаю, чтобы каждый
                день дарил новые возможности, а&nbsp;любые цели становились
                достижимыми!
              </p>
              <p>
                Желаю усапехов, новых высот и еще больше достижений в Новом Году! 
              </p>
              <p>
                Спасибо за&nbsp;то, что создаёте в&nbsp;коллективе атмосферу,
                в&nbsp;которой хочется расти и&nbsp;развиваться.
                С&nbsp;наилучшими пожеланиями, Ваш тайный Санта 🎅
              </p>
            </>
          </Window>
        )}
      </section>
      {isWindowClosed && (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={200}
            recycle={true}
            style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
          />
          <div className="wrapper">
            <img src={tree} alt="Ёлка" />
          </div>
        </>
      )}
    </main>
  );
};
