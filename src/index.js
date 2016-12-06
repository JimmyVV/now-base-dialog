require('../assets/index.scss');
import React, { Component } from 'react';

export default class Dialog extends Component {
    render () {
        const {
            skin,
            text,
            title,
            onEnter,
            onCancel,
            enterText,
            cancelText
        } = this.props;

        return (
            <div className={'dialog-wrapper ' + (skin || '')}>
                <div className="dialog-inner">
                    <div className="dialog-text">
                        {
                            title ? (
                                <div className="title">{title}</div>
                            ) : null
                        }
                        {
                            text ? (
                                <div className="text">{text}</div>
                            ) : null
                        }
                        { this.props.children }
                    </div>
                    <div className="dialog-buttons">
                        {
                            onCancel ? (
                                <div className="dialog-btn" onClick={onCancel}>{ cancelText || '取消' }</div>
                            ) : null
                        }
                        {
                            onEnter ? (
                                <div className="dialog-btn" onClick={onEnter}>{ enterText || '确定'}</div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
