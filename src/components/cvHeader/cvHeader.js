import React from 'react';

export default class CvHeader extends React.Component {
  render() {
    return (
      <div>
        <p>{ this.props.lang.name }</p>
        <p>{ this.props.lang.city }</p>
        <p>{ this.props.lang.age }</p>
        <p>{ this.props.lang.phone }</p>
        <p>{ this.props.lang.email }</p>
      </div>
    );
  }
}