import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from './es.json'

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",

  resources: {
    en: {
      translation: {
        homepage: { //Can give each page it's own object.
          form_title: "Test Form",
          name: "Name",
          email: "Email",
          direction: {
            right: "right",
          },
          correct: {
            right: "right",
          },
          lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum mattis metus vitae posuere. Integer felis tortor, convallis vel sapien eget, placerat scelerisque ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed venenatis tortor nisi, at placerat nisl convallis in. Curabitur tempor non purus sollicitudin feugiat. Duis tristique sed velit ac sodales. Integer tincidunt, orci consectetur consectetur malesuada, purus nisl dapibus ipsum, ut dignissim dolor est eget ante. Integer eget massa est. Morbi a ligula est. Duis aliquet ac ante sit amet accumsan. Nam scelerisque quam risus, id molestie massa molestie in. Nam at purus consequat ex aliquam bibendum ut ac ipsum. Nunc feugiat mattis turpis, ut condimentum velit tempus eu. Sed scelerisque dui eget lorem rhoncus, commodo porttitor mi pellentesque. Nunc sit amet sodales erat, non eleifend velit. Curabitur eu libero aliquet, imperdiet leo malesuada, dignissim quam.",
        },
      },
    },
    es: {
      translation: es , //Can be imported as a JSON for modularization.
    },
    da: {
      translation: {
        homepage: {
          form_title: "Testformular",
          name: "Navn",
          email: "E-mail",
          direction: {
            right: "højre",
          },
          correct: {
            right: "korrekt",
          },
          lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum mattis metus vitae posuere. Integer felis tortor, convallis vel sapien eget, placerat scelerisque ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed venenatis tortor nisi, at placerat nisl convallis in. Curabitur tempor non purus sollicitudin feugiat. Duis tristique sed velit ac sodales. Integer tincidunt, orci consectetur consectetur malesuada, purus nisl dapibus ipsum, ut dignissim dolor est eget ante. Integer eget massa est. Morbi a ligula est. Duis aliquet ac ante sit amet accumsan. Nam scelerisque quam risus, id molestie massa molestie in. Nam at purus consequat ex aliquam bibendum ut ac ipsum. Nunc feugiat mattis turpis, ut condimentum velit tempus eu. Sed scelerisque dui eget lorem rhoncus, commodo porttitor mi pellentesque. Nunc sit amet sodales erat, non eleifend velit. Curabitur eu libero aliquet, imperdiet leo malesuada, dignissim quam."
        },
      },
    },
    ar: {
      translation: {
        homepage: {
          form_title: "نموذج الاختبار",
          name: "الاسم",
          email: "البريد الإلكتروني",
          direction: {
            right: "اليمين",
          },
          correct: {
            right: "صحيح",
          },
        },
      },
      dir: "rtl",
    },
  },
});

export default i18n;
