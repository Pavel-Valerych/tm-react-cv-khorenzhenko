import React from "react";

import ChangeLanguage from '../../components/changeLang/changeLang';
import './cv.css';

export default class Cv extends React.Component {
  render() {
    return (
      <div>
        <h1 className="cv-title">CV</h1>

        <ChangeLanguage />
      </div>
    );
  }
}