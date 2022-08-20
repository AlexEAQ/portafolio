  const btn = document.getElementById('button');

    document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_m1h78mu';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje enviado correctamente!');
      location.reload();
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
        });
    });