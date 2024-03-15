'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import DOMPurify from 'dompurify';
import Spinner from '@/components/spinner/Spinner';
import { ExclamationCircleFill, SendCheckFill } from 'react-bootstrap-icons';
import styles from './ContactForm.module.scss';
import { Placeholder } from '@/@types';

interface ContactFormProps {
  successMessage: string;
  errorEmailMessage: string;
  errorMessage: string;
  sendButton: string;
  placeholder: Placeholder;
  messagePlaceholder: string;
}

function ContactForm({
  successMessage,
  errorEmailMessage,
  errorMessage,
  sendButton,
  placeholder,
  messagePlaceholder,
}: ContactFormProps) {
  // Declaration State Variables
  const [values, setValues] = useState({
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  // Update formData when the user enters values into fields and Sanitize data
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setValues({
      ...values,
      [event.target.name]: sanitizedValue,
    });
  };

  // Handle form submission and Fetch API
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    // FormData Json Object
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
      });

      if (response.ok) {
        setIsSuccess(true);
        setMessage(successMessage);
      } else if (response.status === 400) {
        setEmailError(true);
        setMessage(errorEmailMessage);
      } else {
        setMessage(errorMessage);
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isSuccess ? (
        // Message
        <p className={styles.message}>
          <SendCheckFill size={30} />
          {message}
        </p>
      ) : (
        // Form Container
        <>
          <div className={styles.container}>
            <div className={styles.column}>
              {/* Lastname */}
              <label className="visually-hidden" htmlFor="lastname">
                Nom
              </label>
              <input
                className={styles.input}
                value={values.lastname}
                onChange={handleChange}
                type="text"
                name="lastname"
                placeholder={placeholder.lastname}
                id="lastname"
                maxLength={100}
                required
              />
              {/* Firstname */}
              <label className="visually-hidden" htmlFor="firstname">
                Prénom
              </label>
              <input
                className={styles.input}
                value={values.firstname}
                onChange={handleChange}
                type="text"
                name="firstname"
                placeholder={placeholder.firstname}
                id="firstname"
                maxLength={100}
                autoComplete="off"
                required
              />
              {/* Email */}
              <label className="visually-hidden" htmlFor="emailAdress">
                Email
              </label>
              <input
                className={styles.input}
                value={values.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder={placeholder.email}
                id="emailAdress"
                maxLength={320}
                autoComplete="off"
                required
              />
              {/* Message Error Email Validation */}
              {emailError && (
                <p className={styles.error}>
                  <ExclamationCircleFill size={15} /> {message}
                </p>
              )}
              {/* Phone */}
              <label className="visually-hidden" htmlFor="phone">
                Téléphone (facultatif)
              </label>
              <input
                className={styles.input}
                value={values.phone}
                onChange={handleChange}
                type="tel"
                name="phone"
                placeholder={placeholder.phone}
                id="phone"
                pattern="^(?:\+33|06)[0-9]{8}$"
                maxLength={12}
                autoComplete="off"
              />
            </div>
            {/* Message */}
            <div className={styles.column}>
              <label className="visually-hidden" htmlFor="message">
                Message
              </label>
              <textarea
                className={styles.textarea}
                value={values.message}
                onChange={handleChange}
                name="message"
                placeholder={messagePlaceholder}
                id="message"
                autoComplete="off"
                maxLength={500}
                required
              />
            </div>
          </div>
          <div>
            <button className={styles.button} type="submit">
              {isLoading ? <Spinner /> : sendButton}
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default ContactForm;
