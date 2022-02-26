'use strict';

function doThis(){

	const duration=250;
	let belt=document.getElementsByTagName('belt')[0];
	let triangle=document.getElementsByTagName('triangle')[0];
	let message=document.getElementsByTagName('message')[0];

	// belt
	belt.style.visibility='visible';
	belt.animate([
		{ height: '40px' },
		{ height: '15vh' },
	],{
		duration: duration,
		fill: 'forwards',
	});

	// triangle
	triangle.style.visibility='visible';
	triangle.animate([
		{ transform: 'scale(0)' },
		{ transform: 'scale(1)' },
	],{
		duration: duration,
		fill: 'forwards',
	});

	// message
	message.style.visibility='visible';
	message.animate([
		{ transform: 'scale(0)' },
		{ transform: 'scale(1)' },
	],{
		duration: duration,
		fill: 'forwards',
	});
};

function load(){
	// font load
	let fontFace=document.createElement('link');
	fontFace.setAttribute('href','https://fonts.cdnfonts.com/css/politik');
	fontFace.setAttribute('rel','stylesheet');
	document.getElementsByTagName('head')[0].appendChild(fontFace);

	// create br
	let br=document.createElement('div');
	br.style.clear='both';
	document.getElementsByTagName('body')[0].appendChild(br);

	// create belt
	let belt=document.createElement('belt');
	let beltCSS={
		display: 'inline-block',
		position: 'fixed',
		width: 'calc(100% + 16px)',
		//height: '15vh',
		//height: 40,
		top: '50vh',
		left: '-8px',
		transform: 'translateY(-50%)',
		backgroundColor: 'black',
		boxSizing: 'border-box',
		overflow: 'hidden',
		zIndex: 2147483647,
		visibility: 'hidden',
	};
	Object.assign(belt.style,beltCSS);
	document.getElementsByTagName('body')[0].appendChild(belt);

	/// create parallelogram
	const windowWidth=window.innerWidth;
	const parallelogramLength=(windowWidth/40|0)+4;
	for(let i=0;i<parallelogramLength*2;i++){
		let parallelogram=document.createElement('parallelogram');
		let parallelogramCSS={
			display: 'inline-block',
			position: 'absolute',
			width: '18px',
			height: '20px',
			backgroundColor: 'red',
			transform: 'skewX(-45deg)',
		};
		if(i<parallelogramLength){
			parallelogram.style.top='0px';
			parallelogram.style.left=(i-1)*40+'px';
		}
		else{
			//parallelogram.style.top='calc(15vh - 20px)';
			parallelogram.style.bottom='0px';
			parallelogram.style.left=((i-1)-parallelogramLength)*40+'px';
		}
		Object.assign(parallelogram.style,parallelogramCSS);
		belt.appendChild(parallelogram);
	}

	// create invisible popup window
	let popup=document.createElement('popup');
	let popupCSS={
		display: 'inline-block',
		position: 'fixed',
		width: 'calc(100% + 16px)',
		top: '50vh',
		left: '-8px',
		transform: 'translateY(-50%)',
		boxSizing: 'border-box',
		overflow: 'visible',
		zIndex: 2147483647,
		textAlign: 'center',
	};
	Object.assign(popup.style,popupCSS);
	document.getElementsByTagName('body')[0].appendChild(popup);

	/// create triangle
	let triangle=document.createElement('triangle');
	triangle.innerHTML=`
	<svg viewbox="-22 -22 144 130" style="">
		<path stroke="black" fill="black"
			d="
				M 50 0
				L 0, 86
				L 100 86
				z
			"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="44"
		></path>
		<path stroke="red" fill="red"
			d="
				M 50 0
				L 0, 86
				L 100 86
				z
			"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="40"
		></path>
		<path stroke="black" fill="black"
			d="
				M 50 0
				L 0, 86
				L 100 86
				z
			"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="20"
		></path>
		<path stroke="red"
			d="
				M 50 20
				L 50, 50
			"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="20"
		></path>
		<circle cx="50" cy="76" r="10"
		fill="red"
		>
	</svg>
	`;
	let triangleCSS={
		display: 'inline-block',
		position: 'relative',
		width: '20vh',
		height: '18vh',
		top: '0px',
		textAlign: 'left',
		verticalAlign:'middle',
		visibility: 'hidden',
	};
	Object.assign(triangle.style,triangleCSS);
	popup.appendChild(triangle);

	/// create message
	let message=document.createElement('message');
	let messageCSS={
		display: 'inline-block',
		position: 'relative',
		width: 'fit-content',
		height: '15vh',
		top: '22px',
		color: 'red',
		textAlign: 'left',
		verticalAlign:'middle',
		whiteSpace: 'pre',
		visibility: 'hidden',
	};
	Object.assign(message.style,messageCSS);
	popup.appendChild(message);

	//// title
	let title=document.createElement('div');
	title.innerText='INCOMING CONNECTION';
	let titleCSS={
		fontSize: 'calc(8vh - 24px)',
		fontFamily: 'Politik',
		lineHeight: '0.6em',
		whiteSpace: 'pre-line',
	};
	Object.assign(title.style,titleCSS);
	message.appendChild(title);

	//// text
	let alertText=document.createElement('div');
	alertText.innerHTML=`
		<span>
			External unsyndicated UDP traffic on port 22
		</span>
		<span>
			Logging all activity to ~/Logging
		</span>
	`;
	let alertCSS={
		fontSize: 'calc((8vh - 24px)*0.3)',
		fontFamily: 'monospace',
		lineHeight: '0.6em',
		whiteSpace: 'pre-line',
	};
	Object.assign(alertText.style,alertCSS);
	message.appendChild(alertText);

	// animation
	belt.querySelectorAll('parallelogram').forEach(function(e){
		const left=~~e.style.left.slice(0,-2);
		e.animate([
			{ left: left+'px' },
			{ left: left+40+'px' }
		],{
			duration: 1000,
			iterations: Infinity,
		});
	});
doThis();
}

window.addEventListener('load',load);
