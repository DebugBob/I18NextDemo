import { useEffect } from "react";
import "./App.css";
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
    document.documentElement.setAttribute('dir', i18n.dir(i18n.language));
  }, []);

  return (
    <>
      <body>
        <p>
          {t("homepage.lorem")}
        </p>
        <form>
          <div>
            <h1>{t("homepage.form_title")}</h1>
          </div>
          <div>
            <label>
              {t("homepage.name")}:
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              {t("homepage.email")}:
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <h3>Homonym Example "Right"</h3>
            <label>Direction: {t("homepage.direction.right")}</label>
            <label>Correct: {t("homepage.correct.right")}</label>
          </div>
        </form>
      </body>
    </>
  );
}

export default App;
