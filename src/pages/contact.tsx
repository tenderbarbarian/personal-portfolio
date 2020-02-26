import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import contactStyles from './contact.module.scss';

type FormData = {
	name: string;
	email: string;
	text: string;
	// copy: boolean;
};

const ContactForm = ({ email }) => {
	const { register, handleSubmit, errors } = useForm<FormData>();

	const onSubmit = (data: FormData, e: React.SyntheticEvent): void => {
		// const { name, email, text, copy } = data;
		alert(JSON.stringify(data));
		e.target.reset(); // reset after form submit
	};
	const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		// <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
		<form onSubmit={handleSubmit(onSubmit)} className={contactStyles.form}>
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
				<button className={contactStyles.linkButton}>Send message</button>
				{/* <div>
					<input
						type="checkbox"
						id="copy"
						name="copy"
						ref={register({ required: false })}
						className={contactStyles.styledCheckbox}
					/>
					<label>Send me a copy</label>
				</div> */}
			</div>
			<small>
				<a href={`mailto:${email}`}>or email me at {email}</a>
			</small>
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
