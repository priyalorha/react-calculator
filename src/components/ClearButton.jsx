import "./ClearButton.css";
import React from 'react';

export const ClearButton = props=> <div className="clear-btn" onClick={props.handleClear}>{props.children}</div>