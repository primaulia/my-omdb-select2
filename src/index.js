// the file the execute the function
// import ?? from '<path>'
import { fetchMovies, updateResults } from './movies';
import { initSortable } from './plugins/init_sortable';
import { initSelect2 } from './plugins/init_select2';

// activate my sortablejs
// activate my select2
initSelect2();
initSortable();

// call ajax
fetchMovies('harry potter'); // on 1st page load

// event listener
const form = document.querySelector('#search-form');
form.addEventListener('submit', updateResults);


