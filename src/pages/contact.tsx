import React, { useRef, useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import contactStyles from './contact.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_KEY = '6Lf2fuAUAAAAAFusZSGxmLofOEGTzvmtttTT3AEB';
const encode = (data) => {
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
};
const ContactForm = () => {
	const { register, handleSubmit, errors, setValue, setError } = useForm();
	const [ feedbackMsg, setFeedbackMsg ] = useState(null);
	const [ captcha, setCaptcha ] = useState(null);
	let captchaRef = useRef(null);

	// useEffect(
	// 	() => {
	// 		register({ required: 'Required', name: 'g-recaptcha-response' });
	// 	},
	// 	[ register ]
	// );
	const onSubmit = (data, e) => {
		e.preventDefault();
		// const captchaValue = captchaRef.current.getValue();
		// console.log('On SUBMIT captchaVal (works!)' + captchaValue);
		// console.log(JSON.stringify(data));
		// if (!captcha) {
		// 	console.log('CAPTCHA missing!');
		// 	setFeedbackMsg('Captcha is required');
		// 	return;
		// }
		// if (!captchaValue) {
		// 	console.log('CAPTCHA missing!');
		// 	setFeedbackMsg('Captcha is required');
		// 	return;
		// }
		fetch('/?no-cache=1', {
			// fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact',
				// 'g-recaptcha-response': captcha,
				// 'data-sitekey': RECAPTCHA_KEY,
				...data
			})
		})
			.then((response) => {
				console.log(response);
				if (response.status === 200 && !response.redirected) {
					//netlify doesnt give an error on recaptcha fail (only 303 redirect...) :(
					setFeedbackMsg(`Thanks for reaching out! I'll get back to you soon.`);
				} else {
					console.log('!!!!!!!!!!! server response: ', response);
					setFeedbackMsg(`Something went wrong, please try again later.`);
				}
				e.target.reset();
			})
			.catch((error) => {
				setFeedbackMsg('Oops, the form could not be submitted. Are you offline? Please try again later.');
				console.log(error);
			});
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={contactStyles.form}
			name="contact"
			method="post"
			// data-netlify-recaptcha="true"
			netlify
			netlify-honeypot="bot-field"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			// data-sitekey={RECAPTCHA_KEY}
		>
			<h3>“Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.”</h3>
			<p>― Groucho Marxat</p>
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="contact" />
			{/* <div className="g-recaptcha" data-sitekey={RECAPTCHA_KEY} /> */}
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
						required: 'please enter your email',
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
					id="text"
					aria-label="text message"
					name="text"
					rows="6"
					ref={register({ required: 'please enter a message' })}
					placeholder="what's on your mind?"
					className={contactStyles.formInput}
				/>
			</div>
			{errors.text && <span className={contactStyles.errorMessage}>{errors.text.message}</span>}
			<div className={contactStyles.submitContainer}>
				{/* <ReCAPTCHA
					name="g-recaptcha-response"
					ref={captchaRef}
					sitekey={RECAPTCHA_KEY}
					onChange={(val) => {
						// console.log('ReCAPTCHA onChange: ', val);
						// console.log('Captcha value:', val);
						setCaptcha(val);
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
