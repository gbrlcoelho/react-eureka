import styled from "styled-components";

export const EurekaHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		padding: 25px;
	}
`;

export const Container = styled.div`
	padding: 30px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	div {
		color: #fff;
		height: auto;
		width: 260px;
		border: 5px solid #fff;
		background-color: #282c34;
		box-sizing: border-box;
		border-radius: 10px;
		padding-bottom: 19px;
	}

	div > section > b,
	h3 {
		color: #f1c400;
	}
`;

export const Button = styled.button`
	display: inline-block;
	border-radius: 5px;
	padding: 8px 0;
	margin: 8px 16px;
	width: 200px;
	background: transparent;
	color: #fff;
	border: 2px solid #fff;
	font-weight: bold;
	cursor: pointer;
	:hover {
		background: #f1c400;
		border: 2px solid #f1c400;
	}
`;

export const SecundaryButton = styled(Button)`
	:hover {
		background: #fff;
		color: #282c34;
		border: 2px solid #fff;
	}
`;

export const PrimaryButton = styled(Button)`
	background: #f1c400;
	border: 2px solid #f1c400;
	color: #282c34;
	:hover {
		background: #ffd000;
		border: 2px solid #ffd000;
		color: #fff;
	}
`;

export const Loader = styled.p`
	border: 16px solid #f3f3f3;
	border-top: 16px solid #f1c400;
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
