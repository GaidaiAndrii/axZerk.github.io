/**
 * Created by Zerk on 17-Mar-17.
 */

import React from 'react';

export class NextNavBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick}  className="slick-next">
                <svg id="root" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175">
                    <path
                        d="M360.73 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"/>
                </svg>

            </button>
        );
    }
}