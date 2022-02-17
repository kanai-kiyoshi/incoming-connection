window.addEventListener('load',function(){
	// create belt
	let belt=document.createElement('belt');
	let beltCSS={
		display: 'block',
		position: 'relative',
		width: '100vw',
		height: '15vh',
		maxHeight: 200,
		minHieght: 100,

		top: window.innerHeight/2,
		transform: 'translateY(-50%)',

		backgroundColor: 'black',
		boxSizing: 'border-box',
		margin: -8,
		overflow: 'hidden',

		zIndex: 2147483647,
	}
	Object.assign(belt.style,beltCSS);
	document.getElementsByTagName('body')[0].appendChild(belt);

	// create red parallelogram
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

	//



});
