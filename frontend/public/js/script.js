import * as FilePond from './filepond.esm.min.js'; // eslint-disable-line import/extensions

// Create a multi file upload component
const pond = FilePond.create({
  multiple: true,
  name: 'filepond',
});

// Add it to the DOM
document.body.appendChild(pond.element);
