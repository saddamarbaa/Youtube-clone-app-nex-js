/** @format */
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";

import { getRandomIntNumberBetween } from "../../lib/api-util";

const Feeds = (props) => {
	const autoScrollToBottomRef = useRef(null);

	return (
		<FeedWrapper>
			<Heading>
				<button
					style={{
						background: "black",
						border: "1px solid black",
						color: "white",
					}}>
					All
				</button>
				<button>Live</button>
				<button>Coding with Saddam</button>
				<button>Computer programming</button>
				<button>React js</button>
				<button>Next Js</button>
				<button>React Native</button>
				<button>JavaScript</button>
			</Heading>
			{/* Empty div for auto scroll */}
			<FeedsBody>
				<VideoGrid>
					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/ze8ycxc1UzE'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									Next Js conferences 2021 by Vercel
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/1WmNXEVia8I?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									Next.js for Beginners - Full Course
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 8)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/4UZrsTqkcW4?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									Full React Course Learn Fundamentals
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/PkZNo7MFNFg?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									Learn JavaScript - Full Course for Beginners
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/FXpIoQ_rT_c?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									Vue.js Course for Beginners [2021 Tutorial]
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/jS4aFq5-91M?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									CS50 2020 - Artificial Intelligence
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(40, 70)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/Ke90Tje7VS0?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/mos.jpg' />

							<div>
								<p>Programming with Mosh </p>
								<p className='p-cstom'>
									React JS - React Tutorial for Beginners
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(40, 70)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/qz0aGYrrlhU?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/mos.jpg' />

							<div>
								<p>Programming with Mosh </p>
								<p className='p-cstom'>
									HTML Tutorial for Beginners: HTML Crash Course [2021]
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(40, 70)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/_uQrJ0TkZlc?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/mos.jpg' />

							<div>
								<p>Programming with Mosh </p>
								<p className='p-cstom'>
									Python Tutorial - Python for Beginners [Full Course]
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(40, 70)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/zFZrkCIc2Oc?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/cs.png' />
							<div>
								<p> Harvard CS50 </p>
								<p className='p-cstom'>
									HTML and CSS - Lecture 0 - CS50&apos;s Web
									Programming with Python and JavaScript 2020
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/Fa6Jq0Iue3U'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/cs.png' />
							<div>
								<p> Harvard CS50 </p>
								<p className='p-cstom'>
									CS50 2021 - Lecture 4 - Memory
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/IFPedSR9wNU?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/cs.png' />
							<div>
								<p> Harvard CS50 </p>
								<p className='p-cstom'>
									CS50 2021 - Lecture 3 - Algorithms
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/Oe421EPjeBE?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									Node.js and Express.js - Full Course
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/F-sFp_AvHc8?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									User Authentication in Web Apps (Passport.js, Node,
									Express)
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/9zUHg7xjIqQ?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />

							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									Learn Docker - DevOps with Node.js & Express
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/ieTHC78giGQ?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									CSS Full Course - Includes Flexbox and CSS Grid
									Tutorials
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/_a5j7KoflTs?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>

								<p className='p-cstom'>
									Sass Tutorial for Beginners - CSS With Superpowers
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/1Rs2ND1ryYc?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									CSS Tutorial - Zero to Hero (Complete Course)
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/pQN-pnXPaVg?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									HTML Full Course - Build a Website Tutorial
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/1WmNXEVia8I?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									Next.js for Beginners - Full Course
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 8)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>

					<WidgetVideo>
						<iframe
							width='100%'
							height='250'
							src='https://www.youtube.com/embed/4UZrsTqkcW4?autoplay=1&mute=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<Channel>
							<Avatar src='/images/freecodecomp.png' />
							<div>
								<p>freeCodeCamp.org </p>
								<p className='p-cstom'>
									Full React Course Learn Fundamentals
								</p>
								<p className='p-cstom s'>
									{getRandomIntNumberBetween(1, 10)} k views Streamed
									{"  "}
									{getRandomIntNumberBetween(11, 30)} days ago
								</p>
							</div>
						</Channel>
					</WidgetVideo>
				</VideoGrid>
			</FeedsBody>

			<ScrollToBottom
				ref={autoScrollToBottomRef}
				style={{ ScrollToBottom: "100px" }}
				className='auto-scroll'></ScrollToBottom>
		</FeedWrapper>
	);
};

export default Feeds;

const Heading = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
	button {
		display: block;
		font: inherit;
		cursor: pointer;
		font-weight: bold;
		background-color: #cccccc;
		border: 1px solid #cccccc;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: 3s;
		font-size: 1rem;
		display: block;
		height: 2.6rem;
		width: 100%;
		max-width: fit-content;
		background: white;
		border-radius: 34px;
		margin-right: 1rem;
		margin: 0 auto;
		color: gray;
		font-size: 14px;

		&:hover {
			background-color: #f2f2f2;
			border: 1px solid #f2f2f2;
		}
	}

	@media (max-width: 1200px) {
		display: none;
	}
`;

const FeedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 2rem 0;
	min-width: 34.375rem;
	margin-right: 1.2rem;
	margin-left: 1.2rem;

	@media (max-width: 42.375rem) {
		width: 100vw;
		min-width: 300px;
		padding: 0 1rem;
	}
`;

const FeedsBody = styled.div`
	padding: 2rem 0;
`;

// empty div for auto scroll
const ScrollToBottom = styled.div`
	padding-bottom: 200px;
`;

const WidgetVideo = styled.div`
	width: 100%;
`;

const Channel = styled.div`
	display: flex;
	margin: 0.5rem 0;

	div {
		p {
			margin-left: 1rem;
			margin-top: 0.5rem;
		}

		p.p-cstom {
			color: #333;
		}
		p:first-child {
			font-weight: bold;
		}
		p.p-cstom.s {
			color: #333;
			font-size: 13px;
		}
	}
`;

const VideoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-column-gap: 50px;
	grid-row-gap: 30px;
`;
