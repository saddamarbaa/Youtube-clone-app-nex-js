/** @format */
import { IconButton } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { getRandomIntNumberBetween } from "../../lib/api-util";

import styled from "styled-components";

const Option = ({ Icon, title, color, option }) => {
	return (
		<SideBarOptionWrapper>
			<IconButton>
				<Icon
					style={{ color: color, fontSize: "2rem", marginRight: "1rem" }}
				/>
			</IconButton>
			<div className='relative-div'>
				<p>{title}</p>
			</div>
		</SideBarOptionWrapper>
	);
};

export default Option;

const SideBarOptionWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: rgba(220, 227, 232);
	}
`;
