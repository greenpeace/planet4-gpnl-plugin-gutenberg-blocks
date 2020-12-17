import React, { Component } from 'react';

export class Icon extends Component {
  render() {
    return <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g fill="#333">
        <path d="M0,2v12h16V2H0z M15,13H1V3h14V13z"/>
        <circle cx="12.5" cy="5.5" r="1.5"/>
        <path
          d="m10.111 8.021c-0.909 0-0.815 1.936-2.06 1.936-1.242 0-1.918-4.953-3.463-4.953-1.544 0-2.584 7.021-2.584 7.021h12.146s-3.129-4.004-4.039-4.004z"/>
      </g>
    </svg>;
  }
}
