window.addEventListener('load',function(){
	// create belt
	let belt=document.createElement('belt');
	let beltCSS={
		display: 'inline-block',
		position: 'sticky',
		width: '100vw',
		height: '15vh',
		//maxHeight: 200,
		//minHieght: 100,
		top: '50vh',
		transform: 'translateY(-50%)',
		backgroundColor: 'black',
		boxSizing: 'border-box',
		margin: -8,
		overflow: 'hidden',
		zIndex: 2147483647,
	};
	Object.assign(belt.style,beltCSS);
	document.getElementsByTagName('body')[0].appendChild(belt);

	/// create parallelogram
	const windowWidth=window.innerWidth;
	const parallelogramLength=(windowWidth/40|0)+2;
	for(let i=0;i<parallelogramLength*2;i++){
		let parallelogram=document.createElement('parallelogram');
		parallelogramCSS={
			display: 'inline-block',
			position: 'absolute',
			width: 18,
			height: 20,
			backgroundColor: 'red',
			transform: 'skewX(-45deg)',
		};
		if(i<parallelogramLength){
			parallelogram.style.top=0;
			parallelogram.style.left=i*40;
		}
		else{
			parallelogram.style.top='calc(15vh - 20px)';
			parallelogram.style.left=(i-parallelogramLength)*40;
		}
		Object.assign(parallelogram.style,parallelogramCSS);
		belt.appendChild(parallelogram);
	}

	// create invisible popup window
	let popup=document.createElement('popup');
	let popupCSS={
		display: 'inline-block',
		position: 'sticky',
		width: '100vw',
		top: '50vh',
		transform: 'translateY(-50%)',
		boxSizing: 'border-box',
		margin: -8,
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
		<path stroke="black"
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
		<path stroke="red"
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
		<path stroke="black"
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
		top: 0,
		textAlign: 'left',
		verticalAlign:'middle',
	};
	Object.assign(triangle.style,triangleCSS);
	popup.appendChild(triangle);

	/// create message
	let message=document.createElement('message');
	message.innerHTML='INCOMING CONNECTION';
	const fontFace=new FontFace(
		'politik',
		'url(./Politik.otf)',
		{style:'normal',weight:'normal'}
	);
	fontFace.load().then(function(){
		document.fonts.add(fontFace);
		message.style.fontFamily='politik';
	});
	let messageCSS={
		display: 'inline-block',
		position: 'relative',
		width: 'fit-content',
		textAlign: 'left',
		top: 0,
		whiteSpace: 'pre',
		color: 'red',
		verticalAlign:'text-top',
		transform: 'translateY(-3vh)',
		fontSize: 30,
	};
	Object.assign(message.style,messageCSS);
	popup.appendChild(message);

});
