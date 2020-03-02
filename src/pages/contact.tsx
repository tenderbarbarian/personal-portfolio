import React, { useRef, useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import contactStyles from './contact.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || '6LdAE9wUAAAAAEQ8KqT20g_4E507K9s0m3AwPJvJ';
const encode = (data) => {
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
};
type FormData = {
	name: string;
	email: string;
	text: string;
};

const ContactForm = ({ email }) => {
	const { register, handleSubmit, errors, setValue, setError } = useForm<FormData>();
	const [ feedbackMsg, setFeedbackMsg ] = useState(null);
	const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let captchaRef = useRef(null);

	useEffect(
		() => {
			register({ required: 'Required', name: 'g-recaptcha-response' });
		},
		[ register ]
	);
	const onSubmit = (data: FormData, e: React.SyntheticEvent): void => {
		e.preventDefault();
		const captchaValue = captchaRef.current.getValue();
		// console.log('On SUBMIT captchaVal (works!)' + captchaValue);
		// console.log(JSON.stringify(data));
		if (!captchaValue) {
			console.log('CAPTCHA missing!');
			setFeedbackMsg('Captcha is required');
			return;
		}
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact',
				'g-recaptcha-response': captchaValue,
				...data
			})
		})
			.then((response) => {
				// console.log({ response });
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
			data-netlify-recaptcha="true"
			action="/thanks"
		>
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="contact" />
			<div className={contactStyles.formEntry}>
				<label>Name</label>
				<input
					type="text"
					name="name"
					placeholder="name"
					ref={register({ required: true, maxLength: 30 })}
					className={contactStyles.formInput}
				/>
			</div>
			{errors.name && <span className={contactStyles.errorMessage}>Name is required</span>}
			<div className={contactStyles.formEntry}>
				<label>Email</label>
				<input
					type="text"
					name="email"
					ref={register({
						required: true,
						pattern
					})}
					placeholder="your@email.address"
					className={contactStyles.formInput}
				/>
			</div>
			{errors.email && <span className={contactStyles.errorMessage}>Please enter a valid email</span>}
			<div className={contactStyles.formEntry}>
				<label>Message</label>
				<textarea
					name="text"
					rows="6"
					ref={register({ required: true })}
					placeholder="what's on your mind?"
					className={contactStyles.formInput}
				/>
			</div>
			{errors.text && <span className={contactStyles.errorMessage}>Please enter your message</span>}
			<div className={contactStyles.submitContainer}>
				<ReCAPTCHA
					name="g-recaptcha-response"
					ref={captchaRef}
					sitekey={RECAPTCHA_KEY}
					onChange={(val) => {
						// console.log('ReCAPTCHA onChange: ', val);
						setValue('g-recaptcha-response', val, true);
						// console.log('end');
					}}
				/>
				{feedbackMsg && <h3>{feedbackMsg}</h3>}
				<button className={contactStyles.linkButton}>Send message</button>
				<small>
					<a href={`mailto:${email}`}>or email me at {email}</a>
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
