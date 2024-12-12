// Agregar animaciones y efectos con JavaScript si lo deseas
document.querySelector('.rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const attend = document.getElementById('attend').value;
    alert(`Gracias, ${name}! Has confirmado que ${attend === 'yes' ? 'asistirás' : 'no podrás asistir'} a la fiesta.`);
});
