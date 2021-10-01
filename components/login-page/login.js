/** @format */

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { auth, provider } from "../../config/firebase";
import { useRouter } from "next/router";

const LogIn = () => {
	const router = useRouter();

	const signInWithGoogleHandler = () => {
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
				router.push("/");
			})
			.catch((error) => {
				// An error happened.
				// console.log(error);
			});
	};

	return (
		<LoginWrapper>
			<LoginContainer>
				<div
					className='logo'
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						className='logo-img'
						src='/images/youtube_logo_icon.png'
						alt='Picture of the youtube'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<LoginText>
					<h2>Sign in to Youtube</h2>
				</LoginText>

				<button onClick={signInWithGoogleHandler}>
					Sign In With Google
				</button>
			</LoginContainer>
		</LoginWrapper>
	);
};

export default LogIn;

const LoginWrapper = styled.div`
	display: grid;
	background: #f8f8f8;
	width: 100vw;
	height: 100vh;
	place-items: center;

	button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: #ff0000;
		border-color: #ff0000;
		color: white;
		font-size: 17px;
		transition: 0.5;
		padding: 0.7rem 1rem;
	}

	button:hover {
		background-color: rgba(255, 0, 0, 0.9);
		border-color: rgba(255, 0, 0, 0.9);
	}
`;

const LoginContainer = styled.div`
	.logo {
		width: 7.62rem;
		height: 7rem;
		margin-left: 1.5rem;
		margin-bottom: 2rem;
	}
	padding: 100px;
	padding-top: 50px;
	text-align: center;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const LoginText = styled.div``;
