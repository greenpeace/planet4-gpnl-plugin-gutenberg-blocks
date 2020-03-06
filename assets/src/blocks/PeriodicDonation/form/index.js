import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './RegistrationForm';
import './styles/form.scss'

// Styles for the datepicker.
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';

var root = document.getElementById('periodic-donation-form');
ReactDOM.render(<RegistrationForm {...(root.dataset)} />, root);
