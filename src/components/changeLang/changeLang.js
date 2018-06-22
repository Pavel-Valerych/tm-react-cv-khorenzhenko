import React, { createContext } from "react";

import CvHeader from '../../../src/components/cvHeader/cvHeader';
import CvMain from '../../../src/components/cvMain/cvMain';

import photo from '../../../src/photo.jpg';

import './changeLang.css';

const content = {
  en: {
    btnUkrLabel: "ukr",
    btnEnLabel: "en",
    cvHeader: {
      name: 'Name: Pavlo Khorenzhenko',
      city: 'City: Lviv',
      age: 'Age: 20',
      phone: 'Phone no.: 0939391618',
      email: 'email: pashokguitar@gmail.com',
    },
    cvContent: {
      skills: {
        title: 'Skills:',
        value: [
          'Basic knowledge of OOP',
          'C++',
          'MySQL',
          'C#',
          'Adobe Photoshop',
          'JavaScript'
        ]
      },
      education: {
        title: 'Education:',
        value: [
          '09.2012 - 06.2016 Mykolaiv College of National University V.O. Sukhomlinsky, specialty "Applied Mathematics", diploma of junior specialist.',
          '09.2016 - 06.2019 National University "Lviv Polytechnic", Institute of Computer Science and Information Technologies, specialty "System Analysis".'
        ]
      },
      language: {
        title: 'Languages:',
        value: ['English - Intermediate.']
      },
      interests: {
        title: 'Interests:',
        value: ['Literature', 'music', 'tourism', 'sports.']
      }
    }
  },
  ukr: {
    btnUkrLabel: "укр",
    btnEnLabel: "англ",
    cvHeader: {
      name: 'ПІБ: Павло Хоренженко',
      city: 'Місто: Львів',
      age: 'Вік: 20',
      phone: 'Номер тел.: 0939391618',
      email: 'Ел. пошта: pashokguitar@gmail.com',
    },

    cvContent: {
      skills: {
        title: 'Навички:',
        value: [
          'Базові знання OOП',
          'C++',
          'MySQL',
          'C#',
          'Adobe Photoshop',
          'JavaScript'
        ]
      },
      education: {
        title: 'Освіта:',
        value: [
          '09.2012 - 06.2016 Коледж Миколаївського НУ ім. В.О. Сухомлинського, спеціальність «Прикладна математика», диплом молодшого спеціаліста.',
          '09.2016 - 06.2019 Національний університет «Львівська політехніка», інститут комп’ютерних наук та інформаційних технологій, спеціальність «Системний аналіз», диплом бакалавра отримаю в червні 2019 року.'
        ]
      },
      language: {
        title: 'Мови:',
        value: ['Англійська - Intermediate.']
      },
      interests: {
        title: 'Інтереси:',
        value: ['Література', 'музика', 'туризм', 'спорт']
      }
    },
  }
};

const LanguageContext = createContext();

export default class ChangeLanguage extends React.Component {
  constructor() {
    super();

    this.state = {
      language: "en"
    };
  }

  render() {
    return (
      <LanguageContext.Provider value={content[this.state.language]}>
        <div>
          <LanguageContext.Consumer>
            {(content) => {
              return (
                <div>
                  {/* Lang buttons */}
                  <div className="lang-buttons">
                    <button onClick={() => this.setState({ language: "en" })}>
                      { content.btnEnLabel }
                    </button>
                    <button onClick={() => this.setState({ language: "ukr" })}>
                      { content.btnUkrLabel }
                    </button>
                  </div>

                  <div className="cv-header">
                    <CvHeader {...{ lang: content.cvHeader }} />

                    <div>
                      <img src={photo} width = "100"  alt ="Pavlo"/>
                    </div>
                  </div>

                  <div className="cv-horizontal-separator" />

                  <CvMain {...{ lang: content.cvContent }} />
                </div>
              );
            }}
          </LanguageContext.Consumer>
        </div>
      </LanguageContext.Provider>
    );
  }
}