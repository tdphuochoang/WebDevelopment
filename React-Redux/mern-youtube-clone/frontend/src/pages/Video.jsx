import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
	display: flex;
	gap: 24px;
`;
const Content = styled.div`
	flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
	font-size: 18px;
	font-weight: 400;
	margin-top: 20px;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Info = styled.span`
	color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
	flex: 2;
`;

const Channel = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ChannelInfo = styled.div`
	display: flex;
	gap: 20px;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
	font-weight: 500;
`;

const ChannelCounter = styled.span`
	margin-top: 5px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.textSoft};
	font-size: 12px;
`;

const Description = styled.p`
	font-size: 14px;
`;

const Subscribe = styled.button`
	background-color: #cc1a00;
	font-weight: 500;
	color: white;
	border: none;
	border-radius: 3px;
	height: max-content;
	padding: 10px 20px;
	cursor: pointer;
`;

const Video = () => {
	return (
		<Container>
			<Content>
				<VideoWrapper>
					<iframe
						width="100%"
						height="560"
						src="https://www.youtube.com/embed/Prv3wl3X9O4"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</VideoWrapper>
				<Title>How to Boom Boom Boom!</Title>
				<Details>
					<Info>123,456 views - July 23rd, 2022</Info>
					<Buttons>
						<Button>
							<ThumbUpOutlinedIcon /> 123
						</Button>
						<Button>
							<ThumbDownOffAltOutlinedIcon /> Dislike
						</Button>
						<Button>
							<ReplyOutlinedIcon /> Share
						</Button>
						<Button>
							<AddTaskOutlinedIcon /> Save
						</Button>
					</Buttons>
				</Details>
				<Hr />
				<Channel>
					<ChannelInfo>
						<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQzRjShGCJzETBLkG1qByrXjy9v2asoBenw&usqp=CAU" />
						<ChannelDetail>
							<ChannelName>anh James Vlog</ChannelName>
							<ChannelCounter>200k subscribers</ChannelCounter>
							<Description>
								Hi guys! My name is James. I'm the master in the Boom Boom Boom
								art and skills. Every morning, I ask the Boom Boom God how to
								get my Boom Boom techniques better and he finally answered me.
								In this video, I will teach everyone the true art of Boom Boom
								so lets sing with me!
							</Description>
						</ChannelDetail>
					</ChannelInfo>
					<Subscribe>SUBSCRIBE</Subscribe>
				</Channel>
				<Hr />
				<Comments />
			</Content>
			<Recommendation>
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
			</Recommendation>
		</Container>
	);
};

export default Video;
