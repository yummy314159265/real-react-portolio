import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { validateEmail } from '../../utils/helpers';
import './style.css';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    }

    if (inputType === 'email') {
      setEmail(inputValue);
    }

    if (inputType === 'message') {
      setMessage(inputValue)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className='container'>
      <p className='title is-2'>
        Contact
      </p>

      <form className='form'>
        <div className='field'>
          <label className='label is-size-4'>
            Name
          </label>

          <div className='control'>
            <input 
              className={name ? 'input' : 'input is-danger'} 
              type='text' 
              name='name'
              value={name}
              onChange={handleInputChange} 
            />
          </div>

          <p className={name ? 'is-hidden help' : 'help is-danger'}>
            Please enter a name
          </p>
        </div>

        <div className='field'>
          <label className='label is-size-4'>
            Email
          </label>

          <div className='control has-icons-left has-icons-right'>
            <input 
              className={validateEmail(email) ? 'input' : 'input is-danger'} 
              type='text' 
              name='email'
              value={email}
              onChange={handleInputChange} 
            />
            <span className='icon is-small is-left'>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>

          <p className={validateEmail(email) ? 'is-hidden help' : 'help is-danger'} >
            Please enter a valid email
          </p>
        </div>

        <div className='field'>
          <label className='label is-size-4'>
            Message
          </label>
          
          <div className='control'>
            <textarea 
              className={message ? 'textarea' : 'textarea is-danger'}
              name='message'
              value={message}
              onChange={handleInputChange} 
            /> 
          </div>

          <p className={message? 'is-hidden help' : 'help is-danger'}>
            Message required
          </p>
        </div>

        <div className='field is-grouped is-grouped-right'>
          <div className='control is-right'>
            <button 
              className='button is-link' 
              disabled={(name && validateEmail(email) && message) ? false : true}
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
