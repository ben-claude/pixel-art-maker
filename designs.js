// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  const table = $('#pixel_canvas');
  table.children().remove();
  const height = $('#input_height').val();
  for (let i = 0; i < height; ++i) {
    table.append('<tr></tr>');
  }
  const rows = $('tr');
  const width = $('#input_width').val();
  for (let i = 0; i < width; ++i) {
    rows.append('<td></td>'); // append a <td> to each row of the jQuery collection
  }
  const cells = $('td');
  cells.click(event => {
    const color = $('#colorPicker').val();
    $(event.target).css('background-color', color);
  })
}

/*
provide a function to the jQuery object: 
the body of the function is executed after the DOM is built
so it is safe to manipulate DOM elements in the body of this function
*/
$(function() {
  $('input[type="submit"]').click(event => {
    event.preventDefault(); // disable form submit button default behavior
    makeGrid();
  })
})

