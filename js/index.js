"use strict";

/*https://github.com/cssivision/qrcode-react
 <QRCode value="http://facebook.github.io/react/" />,*/

function CV(props) {
	var personalia = props.pContent.map(function (info) {
		return React.createElement(
			"aside",
			{ key: info },
			React.createElement(
				"header",
				null,
				React.createElement(
					"figure",
					{ id: "profile-fig" },
					React.createElement("img", { id: "profile-img", src: "" + info.picture, alt: info.name + " - " + info.title })
				),
				React.createElement(
					"h1",
					null,
					info.name
				),
				React.createElement(
					"h2",
					null,
					info.title
				)
			),
			React.createElement(
				"section",
				{ id: "personalia" },
				React.createElement(
					"h3",
					null,
					"Personalia"
				),
				info.personalia.map(function (info) {
					return React.createElement(
						"ul",
						{ key: info },
						React.createElement(
							"li",
							{ id: "p-birth" },
							info.birthday
						),
						React.createElement(
							"li",
							{ id: "p-nationality" },
							info.nationality
						),
						React.createElement(
							"li",
							{ id: "p-address" },
							info.location
						),
						React.createElement(
							"li",
							{ id: "p-gsm" },
							React.createElement(
								"a",
								{ href: "tel:" + info.phone },
								info.phone
							)
						),
						React.createElement(
							"li",
							{ id: "p-mail" },
							React.createElement(
								"a",
								{ href: "mailto:" + info.mail },
								info.mail
							)
						),
						React.createElement(
							"li",
							{ id: "p-web" },
							React.createElement(
								"a",
								{ href: "https://" + info.website, target: "_blank" },
								info.website
							)
						)
					);
				})
			),
			React.createElement(
				"section",
				null,
				React.createElement(
					"h3",
					null,
					"Language Skills"
				),
				info.languages.map(function (info) {
					return React.createElement(
						"div",
						{ className: "p-languages", key: info.id },
						React.createElement(
							"h4",
							null,
							info.language
						),
						React.createElement("progress", { max: 100, value: info.knowledge })
					);
				})
			),
			React.createElement(
				"footer",
				{ id: "qr" },
				React.createElement(
					"div",
					{ id: "qr-code" },
					React.createElement("img", { src: "" + info.qr, alt: "QR Code" })
				),
				React.createElement(
					"a",
					{ href: "https://www.rafaeldejongh.com", target: "_blank" },
					"www.RafaelDeJongh.com"
				)
			)
		);
	});
	var experience = props.eContent.map(function (info) {
		return React.createElement(
			"article",
			{ key: info },
			React.createElement(
				"section",
				{ id: "education" },
				React.createElement(
					"h2",
					null,
					"Education"
				),
				info.cBoxHead.map(function (info) {
					return React.createElement(
						"section",
						{ className: "infItem", key: info.id },
						React.createElement(
							"div",
							{ className: "infDesc" },
							React.createElement(
								"h3",
								null,
								info.school
							),
							React.createElement(
								"h4",
								null,
								info.course
							)
						),
						React.createElement(
							"h5",
							null,
							info.yearStart.length ? info.yearStart + '–' : "",
							info.yearEnd
						)
					);
				})
			),
			React.createElement(
				"section",
				{ id: "work-experience" },
				React.createElement(
					"h2",
					null,
					"Work Experience"
				),
				info.cBoxMain.map(function (info) {
					return React.createElement(
						"section",
						{ className: "infItem", key: info.id },
						React.createElement(
							"div",
							{ className: "infDesc" },
							React.createElement(
								"h3",
								null,
								info.work
							),
							React.createElement(
								"h4",
								null,
								info.description
							)
						),
						React.createElement(
							"h5",
							null,
							info.yearStart.length ? info.yearStart + '–' : "",
							info.yearEnd
						)
					);
				})
			),
			React.createElement(
				"section",
				{ id: "knowledge" },
				React.createElement(
					"h2",
					null,
					"Knowledge"
				),
				React.createElement(
					"section",
					{ className: "infItem" },
					info.cBoxFooter.map(function (info) {
						return React.createElement(
							"div",
							{ className: "infoL", key: info },
							React.createElement(
								"h3",
								null,
								info.cListLT
							),
							info.cListL.map(function (info) {
								return React.createElement(
									"ul",
									{ key: info.id },
									React.createElement(
										"li",
										null,
										info.item
									)
								);
							})
						);
					}),
					info.cBoxFooter.map(function (info) {
						return React.createElement(
							"div",
							{ className: "infoR", key: info },
							React.createElement(
								"h3",
								null,
								info.cListRT
							),
							info.cListR.map(function (info) {
								return React.createElement(
									"ul",
									{ key: info.id },
									React.createElement(
										"li",
										null,
										info.item
									)
								);
							})
						);
					})
				)
			)
		);
	});
	return React.createElement(
		"main",
		null,
		personalia,
		experience
	);
}
var pContent = [{
	name: "Rafaël De Jongh",
	title: "Web Developer | 3D Artist",
	picture: "//www.ap-valley-gdm.ga/wp-content/uploads/2017/09/RafaelDeJongh-512.jpg",
	personalia: [{
		birthday: "12 September 1994",
		nationality: "Belgian",
		location: "Antwerp, Belgium",
		phone: "+32 485 34 62 49",
		mail: "rafaeldejongh@live.be",
		website: "www.rafaeldejongh.com"
	}],
	languages: [{ id: 1, language: "Dutch", knowledge: 100 }, { id: 2, language: "English", knowledge: 80 }, { id: 3, language: "French", knowledge: 40 }],
	qr: "https://ap-images.ga/up/2017/10/15023120-QRCodeWithLogoWhite.svg"
}];
var eContent = [{
	cBoxHead: [{
		id: 1,
		school: "AP Hogeschool Antwerpen",
		course: "Professional Bachelor Crossmedia-Design",
		yearStart: "2014",
		yearEnd: "2018"
	}, {
		id: 2,
		school: "Stedelijk Lyceum Cadix",
		course: "Technical Education Multimedia",
		yearStart: "2011",
		yearEnd: "2014"
	}, {
		id: 3,
		school: "Stedelijk Lyceum Olympiade",
		course: "Technical Education Tourism, Reception and PR",
		yearStart: "2006",
		yearEnd: "2011"
	}],
	cBoxMain: [{
		id: 1,
		work: "MyRetailJungle.com",
		description: "WordPress website for an online platform for retail experts.",
		yearStart: "",
		yearEnd: "2017"
	}, {
		id: 2,
		work: "UKLederwaren.be",
		description: "WordPress WooCommerce Webshop with B2B functionality.",
		yearStart: "",
		yearEnd: "2017"
	}, {
		id: 3,
		work: "SandhillSstudio.be",
		description: "WordPress website for a startup production house.",
		yearStart: "",
		yearEnd: "2017"
	}, {
		id: 4,
		work: "DDCare.be",
		description: "WordPress website for a Belgian dentist practice.",
		yearStart: "",
		yearEnd: "2017"
	}, {
		id: 5,
		work: "Beeple.eu",
		description: "WordPress website for as a collaborated internship assingment.",
		yearStart: "02",
		yearEnd: "03/2017"
	}, {
		id: 6,
		work: "JohannesDeJongh.com",
		description: "WordPress portfolio website for a cinematographer and motion Graphics Artist.",
		yearStart: "",
		yearEnd: "2017"
	}, {
		id: 7,
		work: "Safegold.ca",
		description: "WordPress website for a physical gold store in Canada.",
		yearStart: "",
		yearEnd: "2017"
	}, {
		id: 8,
		work: "Ninavanrompaey.be",
		description: "WordPress portfolio website from a Belgian actrice.",
		yearStart: "",
		yearEnd: "2017"
	}, {
		id: 9,
		work: "Carlino-FGS.com",
		description: "WordPress WooCommerce webshop with a focus on a POS system.",
		yearStart: "",
		yearEnd: "2017"
	}, {
		id: 10,
		work: "APCOA Parking",
		description: "Parking attendant Antwerp.",
		yearStart: "2014",
		yearEnd: "2016"
	}, {
		id: 11,
		work: "Johanvanhaevre.be",
		description: "WordPress website of a Belgian Artist with a focus on galleries.",
		yearStart: "",
		yearEnd: "2016"
	}, {
		id: 12,
		work: "Oconceptstore.be",
		description: "WordPress webshop made with WooCommerce.",
		yearStart: "",
		yearEnd: "2016"
	}, {
		id: 13,
		work: "Smartgoldhamilton.ca",
		description: "WordPress website for a physical gold store in Canada.",
		yearStart: "",
		yearEnd: "2016"
	}, {
		id: 14,
		work: "jojoproductions.net",
		description: "WordPress website made for a non profit organisation.",
		yearStart: "",
		yearEnd: "2015"
	}, {
		id: 15,
		work: "Steam Workshop Paid Mods: Gifts of Akatosh",
		description: "A personal collaboration with Valve and Bethesda to create mods for Skyrim.",
		yearStart: "",
		yearEnd: "2015"
	}, {
		id: 16,
		work: "Machinefloor.com",
		description: "Head of 3D Art and Moderator.",
		yearStart: "2013",
		yearEnd: "Present"
	}],
	cBoxFooter: [{
		cListLT: "Web Development",
		cListL: [{ id: 1, item: "HTML5" }, { id: 2, item: "CSS3" }, { id: 3, item: "Sass/Less" }, { id: 4, item: "JavaScript" }, { id: 5, item: "jQuery" }, { id: 6, item: "PHP" }, { id: 7, item: "MySQL" }, { id: 8, item: "WordPress" }, { id: 9, item: "WooCommerce" }, { id: 10, item: "SEO/SMO/SME" }, { id: 11, item: "Security Optimisation" }, { id: 12, item: "Server Configuration" }],
		cListRT: "Software",
		cListR: [{ id: 1, item: "XAMPP" }, { id: 2, item: "Notepad++" }, { id: 3, item: "Photoshop" }, { id: 4, item: "Illustrator" }, { id: 5, item: "Premiere Pro" }, { id: 6, item: "After Effects" }, { id: 7, item: "InDesign" }, { id: 8, item: "Audition" }, { id: 9, item: "3DsMax" }, { id: 10, item: "Quixel Suite" }, { id: 11, item: "Marmoset Toolbag" }, { id: 12, item: "Microsoft Office" }]
	}]
}];
ReactDOM.render(React.createElement(CV, { pContent: pContent, eContent: eContent }), document.getElementById("cv"));