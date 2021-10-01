/** @format */
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import RestoreIcon from "@material-ui/icons/Restore";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import WorkIcon from "@material-ui/icons/Work";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import EventIcon from "@material-ui/icons/Event";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import TableChartIcon from "@material-ui/icons/TableChart";
import SendIcon from "@material-ui/icons/Send";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarsIcon from "@material-ui/icons/Stars";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import GamesIcon from "@material-ui/icons/Games";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SettingsIcon from "@material-ui/icons/Settings";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import HomeIcon from "@mui/icons-material/Home";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import Option from "./SideBarOption";

const SideBar = (props) => {
	return (
		<SideBarWrapper>
			<div id='fixed-position'>
				<SideBarBody>
					<div className='body-head'>
						<Option Icon={HomeIcon} title='Home' />
						<Option Icon={ChangeCircleIcon} title='Explore' />
						<Option Icon={VideoSettingsIcon} title='Subscriptions' />
					</div>
					<div className='body-head'>
						<Option Icon={OndemandVideoIcon} title='Library' />
						<Option Icon={AccessTimeIcon} title='history' />
						<Option Icon={OndemandVideoIcon} title='Your Videos' />
						<Option Icon={AccessTimeIcon} title='Watch Later' />
						<Option Icon={ThumbUpIcon} title='Like' />
					</div>

					<Option Icon={LiveTvIcon} title='Live Videos' />

					<Option Icon={ViewAgendaIcon} title='Most Recently' />
					<Option Icon={GroupWorkIcon} title='Group' />
					<Option Icon={StoreMallDirectoryIcon} title='MarketPlace' />

					<Option Icon={VideoLibraryIcon} title='Watch' />

					<Option Icon={RestoreIcon} title='Memories' />
					<Option Icon={TurnedInIcon} title='Saved' />
					<Option Icon={EmojiFlagsIcon} title='Pages' />
					<Option Icon={FavoriteIcon} title='Covid19 Information' />
					<Option Icon={EventIcon} title='Events' />
					<Option Icon={WorkIcon} title='Jobs' />

					<Option Icon={TableChartIcon} title='Ads Manger' />

					<Option Icon={SendIcon} title='Campus' />

					<Option Icon={StarsIcon} title='Favorites' />

					<Option Icon={SupervisorAccountIcon} title='Friends List' />
					<Option Icon={GamesIcon} title='Video Games' />

					<Option Icon={SettingsIcon} title='Messenger Kid' />
					<Option Icon={WbSunnyIcon} title='Weather' />
				</SideBarBody>
			</div>
		</SideBarWrapper>
	);
};

export default SideBar;

const SideBarWrapper = styled.div`
	flex: 0.3;
	min-height: 100%;
	max-width: 17rem;
	min-width: 15rem;
	padding: 0.5rem 0;

	@media (max-width: 42.375rem) {
		display: none;
	}

	#fixed-position {
		position: fixed;
		max-width: 17rem;
		min-width: 15rem;
	}
`;

const SideBarBody = styled.div`
	.body-head {
		padding-bottom: 0.5rem;
		margin-bottom: 0.5rem;
		border-bottom: 1px solid rgba(220, 227, 232);
	}

	max-height: 85vh;
	overflow: hidden !important;

	&:hover {
		overflow-y: auto !important;
	}
`;
