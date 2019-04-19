import styled from 'styled-components';

const ButtonStyles = styled.div`
.myButton {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffffff), color-stop(1, #ffffff));
	background:-moz-linear-gradient(top, #ffffff 5%, #ffffff 100%);
	background:-webkit-linear-gradient(top, #ffffff 5%, #ffffff 100%);
	background:-o-linear-gradient(top, #ffffff 5%, #ffffff 100%);
	background:-ms-linear-gradient(top, #ffffff 5%, #ffffff 100%);
	background:linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0);
	background-color:#ffffff;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Arial;
	font-size: 12px;
	padding: 15px; 
	text-decoration:none;
	text-shadow:0px 1px 0px #d6d6d6;
	border: none;
}
.myButton:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffffff), color-stop(1, #ffffff));
	background:-moz-linear-gradient(top, #ffffff 5%, #ffffff 100%);
	background:-webkit-linear-gradient(top, #ffffff 5%, #ffffff 100%);
	background:-o-linear-gradient(top, #ffffff 5%, #ffffff 100%);
	background:-ms-linear-gradient(top, #ffffff 5%, #ffffff 100%);
	background:linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0);
	background-color:#ffffff;
}
.myButton:active {
	position:relative;
	top:1px;
}
@media (max-width: 700px) {
		.myButton {
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffffff), color-stop(1, #ffffff));
			background:-moz-linear-gradient(top, #ffffff 5%, #ffffff 100%);
			background:-webkit-linear-gradient(top, #ffffff 5%, #ffffff 100%);
			background:-o-linear-gradient(top, #ffffff 5%, #ffffff 100%);
			background:-ms-linear-gradient(top, #ffffff 5%, #ffffff 100%);
			background:linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0);
			background-color:#ffffff;
			-moz-border-radius:28px;
			-webkit-border-radius:28px;
			border-radius:28px;
			display:inline-block;
			cursor:pointer;
			color:#000000;
			font-family:Arial;
			font-size:8px;
			padding:10px 10px;
			text-decoration:none;
			text-shadow:0px 1px 0px #d6d6d6;
		}
  }
`;

export default ButtonStyles;
