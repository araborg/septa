const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

// Handle drag start event
draggable.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', 'Dragged element');
});

// Handle drag over event
dropzone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Allow drop
});

// Handle drop event
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();

  const data = e.dataTransfer.getData('text');
  
  dropzone.textContent = `Dropped: ${data}`;
});