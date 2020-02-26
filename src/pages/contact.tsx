import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import contactStyles from './contact.module.scss';

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	text: string;
	copy: boolean;
};

const ContactForm = () => {
	const { register, handleSubmit, errors } = useForm<FormData>();

	const onSubmit = (data: FormData, e: React.SyntheticEvent): void => {
		// const { firstName, lastName, email, text, copy } = data;
		alert(JSON.stringify(data));
		e.target.reset(); // reset after form submit
	};
	const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		// <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
		// <input type="hidden" name="bot-field" />
		// <input type="hidden" name="form-name" value="contact" />
		<form onSubmit={handleSubmit(onSubmit)} className={contactStyles.form}>
			<div className={contactStyles.formEntry}>
				<label>First name</label>
				<input
					type="text"
					name="firstName"
					placeholder="Your"
					ref={register({ required: true, maxLength: 30 })}
					className={contactStyles.formInput}
				/>
			</div>
			{errors.firstName && <span className={contactStyles.errorMessage}>First name is required</span>}
			<div className={contactStyles.formEntry}>
				<label>Last name</label>
				<input
					type="text"
					name="lastName"
					placeholder="Name"
					ref={register({ required: true, maxLength: 50 })}
					className={contactStyles.formInput}
				/>
			</div>
			{errors.lastName && <span className={contactStyles.errorMessage}>Last name is required</span>}
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
					placeholder="What's on your mind?"
					className={contactStyles.formInput}
				/>
			</div>
			{errors.text && <span className={contactStyles.errorMessage}>Please enter your message</span>}
			<div className={contactStyles.submitContainer}>
				<button className={contactStyles.linkButton}>Send message</button>
				<div>
					<input
						type="checkbox"
						id="copy"
						name="copy"
						ref={register({ required: false })}
						className={contactStyles.styledCheckbox}
					/>
					<label>Send me a copy</label>
				</div>
			</div>
			<small>
				<a href="mailto:katarzyna.m.pohl@gmail.com">or email me at katarzyna.m.pohl@gmail.com</a>
			</small>
		</form>
	);
};

const Contact = () => {
	return (
		<Layout>
			<SEO title="Contact" />
			<ContactForm />
		</Layout>
	);
};

export default Contact;
