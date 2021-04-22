import React from "react";
import theme from "theme";
import { Theme, Link, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Image width="64px" height="64px" src="undefined&h=2000" />
		<Components.Gallery>
			<Override slot="Item 0" srcFull="https://images.unsplash.com/photo-1611095565995-d09bbf618f6d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" srcPreview="https://images.unsplash.com/photo-1611095565995-d09bbf618f6d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Item 1" srcPreview="https://images.unsplash.com/photo-1610346915620-6819c46e0544?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcFull="undefined&h=2000" />
			<Override slot="Item 2" srcFull="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 3" srcFull="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 4" srcFull="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 5" srcFull="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 6" srcFull="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 7" srcFull="https://images.unsplash.com/photo-1614720132565-abb62a363759?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614720132565-abb62a363759?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
		</Components.Gallery>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});