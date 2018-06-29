// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(m, n) {
	for(var r = 0; r < m; r++) {
		let tRow = $('#pixelCanvas').append('<tr/>').children("tr:eq("+r+")");
		for(var c = 0; c < n; c++) {
			$(tRow).append('<td></td>');

		};
	};

// Your code goes here!


}

/*document.querySelector('#submitBtn').addEventListener('click', function(event) {
	event.preventDefault();
.children("tr:eq("+i+")");	alert("submitted");
});*/

$('#submitBtn').on('click', function(event) {
	event.preventDefault(); //prevents the page from reloading after clicking submit
	//alert("submitted");
	$('#pixelCanvas tr').remove();
	const height = $('#inputHeight').val();
	const width = $('#inputWidth').val();
	//console.log({height, width});
	makeGrid(height, width);
});

$('#pixelCanvas').on('click', function(event) {
	//let colorSet = false;
	$(event.target).css('background-color',$('#colorPicker').val());
	/*if (!colorSet) {
		$(event.target).css('background-color',$('#colorPicker').val());
		colorSet = true;*/
	
});

