import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './RegistrationForm';
import './styles/form.scss'

var root = document.getElementById('brochure-request-form');

ReactDOM.render(<RegistrationForm {...(root.dataset)} />, root);
