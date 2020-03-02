import React, { useRef, useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import contactStyles from './contact.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || '6Ldh5N0UAAAAAAdwyoX1v49CrbRSjzb3M464AYo6';
const encode = (data) => {
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
};
const ContactForm = () => {
	const { register, handleSubmit, errors, setValue, setError } = useForm();
	const [ feedbackMsg, setFeedbackMsg ] = useState(null);
	// const [ captcha, setCaptcha ] = useState(null);
	// let captchaRef = useRef(null);

	// useEffect(
	// 	() => {
	// 		register({ required: 'Required', name: 'g-recaptcha-response' });
	// 	},
	// 	[ register ]
	// );
	const onSubmit = (data, e) => {
		e.preventDefault();
		// const captchaValue = captchaRef.current.getValue();
		// // console.log('On SUBMIT captchaVal (works!)' + captchaValue);
		// // console.log(JSON.stringify(data));
		// if (!captchaValue) {
		// 	console.log('CAPTCHA missing!');
		// 	setFeedbackMsg('Captcha is required');
		// 	return;
		// }
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact',
				// 'g-recaptcha-response': captchaValue,
				...data
			})
		})
			.then((response) => {
				// console.log(response);
				e.target.reset();
				setFeedbackMsg(`Thanks for reaching out! I'll get back to you soon.`);
			})
			.catch((error) => {
				setFeedbackMsg('Oops, something went wrong. The form could not be submitted.');
				console.log(error);
			});
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={contactStyles.form}
			name="contact"
			method="post"
			netlify
			netlify-honeypot="bot-field"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			// data-netlify-recaptcha="true"
		>
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="contact" />
			<div className={contactStyles.formEntry}>
				<input
					type="text"
					id="name"
					className={contactStyles.formInput}
					name="name"
					placeholder="name"
					aria-label="name"
					ref={register({
						required: 'name is required'
					})}
				/>
			</div>
			{errors.name && <span className={contactStyles.errorMessage}>{errors.name.message}</span>}
			<div className={contactStyles.formEntry}>
				<input
					type="text"
					id="email"
					className={contactStyles.formInput}
					placeholder="your@email.address"
					name="email"
					aria-label="email"
					ref={register({
						required: 'Required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'invalid email address'
						}
					})}
				/>
			</div>
			{errors.email && <span className={contactStyles.errorMessage}>{errors.email.message}</span>}
			<div className={contactStyles.formEntry}>
				<textarea
					id="message"
					aria-label="text message"
					name="text"
					rows="6"
					ref={register({ required: 'Required' })}
					placeholder="what's on your mind?"
					className={contactStyles.formInput}
				/>
			</div>
			{errors.text && <span className={contactStyles.errorMessage}>please enter a message</span>}
			<div className={contactStyles.submitContainer}>
				{/* <ReCAPTCHA
				name="g-recaptcha-response"
				ref={captchaRef}
				sitekey={RECAPTCHA_KEY}
				onChange={(val) => {
					// console.log('ReCAPTCHA onChange: ', val);
					setValue('g-recaptcha-response', val, true);
					// console.log('end');
				}}
			/> */}
				{feedbackMsg && <h3>{feedbackMsg}</h3>}
				<button className={contactStyles.linkButton} type="submit">
					Send message
				</button>
				<small>
					<a href="mailto:katarzyna.m.pohl@gmail.com">or email me at katarzyna.m.pohl@gmail.com</a>
				</small>
			</div>
		</form>
	);
};
const Contact = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					email
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO title="Contact" />

			<ContactForm email={data.site.siteMetadata.email} />
		</Layout>
	);
};

export default Contact;
