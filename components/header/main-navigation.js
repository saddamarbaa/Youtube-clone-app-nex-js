/** @format */

import Link from "next/link";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { IconButton } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { getRandomIntNumberBetween } from "../../lib/api-util";

const MainNavigation = () => {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	const userSignedOutHandler = () => {
		// User is signed out(Remove the user from Firebase)
		if (user) {
			auth
				.signOut()
				.then(() => {
					// Sign-out successful.
				})
				.catch((error) => {
					// An error happened.
				});
			// dispatch(setLogOutState());
		}
	};

	const onClickHandler = () => {
		router.push("/");
	};

	return (
		<MainNavigationWrapper>
			<nav>
				<HeaderLetContainer>
					<IconButton className='hid-sm'>
						<DehazeIcon className='icon' />
					</IconButton>

					<IconButton>
						<Avatar
							onClick={onClickHandler}
							src='/images/youtube_logo_icon.png'
						/>
					</IconButton>
				</HeaderLetContainer>
				<HeaderMiddleContainer>
					<input type='text' placeholder='Search ' />
					<SearchIcon />
				</HeaderMiddleContainer>

				<HeaderRightContainer>
					<IconButton className='hid-md hid-ss'>
						<div className='icon-rounded'>
							<SettingsVoiceIcon className='icon' />
						</div>
					</IconButton>

					<IconButton className='hid-md'>
						<div className='icon-rounded'>
							<VideoCallIcon className='icon' />
						</div>
					</IconButton>

					<IconButton className='hid-md'>
						<div className='icon-rounded hid-md'>
							<AppsIcon className='icon' />
						</div>
					</IconButton>

					<IconButton>
						<div className='icon-rounded  MuiSvgIconCustom'>
							<NotificationsActiveIcon className='icon' />
							<div
								className='absolute-counter'
								style={{ fontSize: "14px" }}>
								{getRandomIntNumberBetween(1, 8)}
							</div>
						</div>
					</IconButton>

					<IconButton>
						<div>
							<Avatar
								onClick={userSignedOutHandler}
								src={
									user?.photoURL
										? user?.photoURL
										: "https://lh3.googleusercontent.com/a/AATXAJxvNL0mo2ldUytJDKQLwdUu6Qagh5SbgZnChr5S=s96-c"
								}
							/>
						</div>
					</IconButton>
				</HeaderRightContainer>
			</nav>
		</MainNavigationWrapper>
	);
};

export default MainNavigation;

const MainNavigationWrapper = styled.header`
	width: 100vw;
	min-width: 100vw;
	position: sticky;
	display: flex;
	align-items: center;
	top: 0;
	z-index: 110;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 0px 2px rgba(0, 0, 0, 0.2);
	padding-right: 2rem;
	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		max-width: 90.75rem;
		overflow: hidden;
		margin: 0 auto;
		padding-top: 0.3rem;

		@media (max-width: 768px) {
			padding-top: 1rem;
		}
	}
`;

const HeaderLetContainer = styled.div`
	display: flex;
	align-items: center;
	min-width: 1rem;
	flex: 0.3;
	position: relative;
	padding-left: 0.5rem;

	.hid-sm {
		@media (max-width: 568px) {
			display: none;
		}
	}
`;

const HeaderMiddleContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	margin: 0 1rem;
	max-width: 38.75rem;
	margin: 0 1rem;
	color: gray;
	border-radius: 6px;
	align-items: center;
	padding: 7px 8px;
	cursor: pointer;
	transition: 0.3s;
	background-color: #fff;
	border: 1px solid #cccccc;
	box-shadow: 0 0 3px 2px rgb(220 227 232/ 50%) rgb(0 0 0 / 7%) inset;

	&:hover,
	&:focus {
		border: 1px solid rgba(220, 227, 232);
		box-shadow: 0 0 3px 2px rgb(220 227 232/ 50%);
	}

	input {
		display: flex;
		flex: 1;
		align-items: center;
		overflow: hidden;
		padding-left: 5px;
		border: none;
		outline: none;
		background: transparent;
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const HeaderRightContainer = styled.div`
	flex: 0.3;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	.hid-md {
		@media (max-width: 468px) {
			display: none;
		}
	}

	.hid-ss {
		@media (max-width: 368px) {
			display: none;
		}
	}

	.icon-rounded {
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		padding: 1.3rem;
		transition: 0.3s;
		background: var(--background-color);

		@media (max-width: 768px) {
		}

		.icon {
			color: black;
		}

		&:hover {
			background: var(--color-gray);
		}
	}

	.icon-rounded.MuiSvgIconCustom {
		position: relative;

		.absolute-counter {
			position: absolute;
			top: -8px;
			left: 29px;
			background: red;
			color: white;
			width: 1.5rem;
			height: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
		}
	}
`;
