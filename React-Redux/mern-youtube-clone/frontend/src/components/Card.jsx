import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: ${(props) => (props.type === "sm" ? "420px" : "360px")};
	margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
	cursor: pointer;
	display: ${(props) => props.type === "sm" && "flex"};
	gap: 10px;
`;

const Image = styled.img`
	width: 100%;
	height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
	background-color: #999;
	flex: 1;
`;
const Detail = styled.div`
	display: flex;
	margin-top: ${(props) => props.type !== "sm" && "10px"};
	gap: 12px;
	flex: 1;
`;

const ChannelImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: #999;
	margin-top: 13px;
	display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;

const Title = styled.h1`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
	margin: 9px 0px;
`;

const Info = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
	return (
		<Link to="/video/test" style={{ textDecoration: "none" }}>
			<Container type={type}>
				<Image
					type={type}
					src="https://i.ytimg.com/vi/qSDYqMs09-I/maxresdefault.jpg"
				/>
				<Detail type={type}>
					<ChannelImage
						type={type}
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQzRjShGCJzETBLkG1qByrXjy9v2asoBenw&usqp=CAU"
					/>
					<Texts>
						<Title>How to Boom Boom Boom!</Title>
						<ChannelName>anh James Vlog</ChannelName>
						<Info>123,456 views - 1 day ago</Info>
					</Texts>
				</Detail>
			</Container>
		</Link>
	);
};

export default Card;
