import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",

  resources: {
    en: {
      translation: {
        homepage: {
          //Can give each page it's own object.
          form_title: "Test Form",
          name: "Name",
          email: "Email",
          direction: {
            right: "right",
          },
          correct: {
            right: "right",
          },
          lorem:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum mattis metus vitae posuere. Integer felis tortor, convallis vel sapien eget, placerat scelerisque ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed venenatis tortor nisi, at placerat nisl convallis in. Curabitur tempor non purus sollicitudin feugiat. Duis tristique sed velit ac sodales. Integer tincidunt, orci consectetur consectetur malesuada, purus nisl dapibus ipsum, ut dignissim dolor est eget ante. Integer eget massa est. Morbi a ligula est. Duis aliquet ac ante sit amet accumsan. Nam scelerisque quam risus, id molestie massa molestie in. Nam at purus consequat ex aliquam bibendum ut ac ipsum. Nunc feugiat mattis turpis, ut condimentum velit tempus eu. Sed scelerisque dui eget lorem rhoncus, commodo porttitor mi pellentesque. Nunc sit amet sodales erat, non eleifend velit. Curabitur eu libero aliquet, imperdiet leo malesuada, dignissim quam.",
        },
      },
    },
    es: {
      translation: es, //Can be imported as a JSON for modularization.
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
          lorem: "لكل تم ثانية السفن موالية, من لان للإتحاد الأوروبية. تمهيد المدن البشريةً هو الى, عن جعل وقبل التي ومحاولة. فمرّ تحرّك الربيع، كل بحق. حدى حقول الأرواح انتصارهم ان. بعض صفحة المدن الفرنسية ان, مدن مع سابق للحكومة, جيوب تصرّف الوراء حدى بـ. هو بعد قررت الثانية والنرويج. بـ الا تصرّف السبب اقتصادية, بعض تم معاملة الأرواح الدولارات, تعد جورج شرسة الطريق ثم. بعض من الحكم باستخدام, لعدم بالعمل هذه مع, قررت الأولية ويكيبيديا، عل هذا. اعلان الجنوبي الأبرياء بل هذه, دون بل تُصب البرية الإيطالية. مكن سكان لغات يونيو أن, وسمّيت اليابان، مع كما. بل جديدة بلديهما مدن, احداث الشرقي ٣٠ فقد. دون قد فكان الجنرال بريطانيا. فرنسا القادة بـ وصل, بـ كردة تعداد بحث."

        },
      },
      dir: "rtl",
    },
    ro: {
      translation: {
        homepage: {
          form_title: "Formularul de testare",
          name: "Nume",
          email: "E-mail",
          direction: {
            right: "drept",
          },
          correct: {
            right: "corect",
          },
          lorem:
            "Există o mulţime de variaţii disponibile ale pasajelor Lorem Ipsum, dar majoritatea lor au suferit alterări într-o oarecare măsură prin infiltrare de elemente de umor, sau de cuvinte luate aleator, care nu sunt câtuşi de puţin credibile. Daca vreţi să folosiţi un pasaj de Lorem Ipsum, trebuie să vă asiguraţi că nu conţine nimic stânjenitor ascuns printre randuri. Toate generatoarele de Lorem Ipsum de pe Internet tind să repete bucăţi de text în funcţie de necesitate, astfel făcându-l pe acesta primul generator adevarat de pe Internet. El utilizează un dicţionar de peste 200 cuvinte din latina, combinate cu o cantitate considerabilă de modele de structuri de propoziţii, pentru a genera Lorem Ipsum care arată decent. Astfel, Lorem Ipsum-ul generat nu conţine repetiţii, infiltrări de elemente de umor sau de cuvinte non-caracteristice, etc.",
        },
      },
    },
  },
});

export default i18n;
