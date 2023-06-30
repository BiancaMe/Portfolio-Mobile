const name1 = document.querySelector('form');
name1.addEventListener('change', (e) => {
  const val = e.target.querySelector('#name').value;
  console.log(val, 'Nombre1');
});


