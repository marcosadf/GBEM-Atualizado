const renderCanvas = () => {
	if($('#canvasGame')){
		$('#canvasGame').remove()
	}
	let canvasGame = $("<canvas />",{
		id: "canvasGame",
		style: `
			width: ${$('#baseGame').width() +'px'};
			height: ${$('#baseGame').width() +'px'};
			border: solid 1px #f00;
			`
	});
	$('#baseGame').append(canvasGame);
}