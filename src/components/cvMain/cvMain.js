import React from 'react';

export default class CvMain extends React.Component {
  render() {
    return (
      <div>
        <h3>{ this.props.lang.skills.title }</h3>
        <ul>
          {this.props.lang.skills.value.map((skill, i) => (
            <li key={i}>
              { skill }
            </li>))
          }
        </ul>

        <h3>{this.props.lang.education.title}</h3>
        <ul>
          {this.props.lang.education.value.map((edu, i) => (
            <li key={i}>
              { edu }
            </li>))
          }
        </ul>

        <h3>{this.props.lang.language.title}</h3>

        {this.props.lang.language.value.map((lang, i) => (
          <div key={i}>
            { lang }
          </div>))
        }

        <br/>

        <h3>{this.props.lang.interests.title}</h3>
        {this.props.lang.interests.value.map((interest, i) => (
          <div key={i}>
            { interest }
          </div>))
        }

      </div>
    )
  }

}