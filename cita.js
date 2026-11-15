// Pedir cita: envía la solicitud por WhatsApp o por correo con el mensaje ya redactado.
(function () {
  if (window.lucide) lucide.createIcons();
  var hoy = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('form.cita input[type=date]').forEach(function (i) { i.min = hoy; });
  document.querySelectorAll('form.cita').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(form), via = e.submitter ? e.submitter.value : 'wa';
      var fecha = f.get('fecha') ? new Date(f.get('fecha') + 'T12:00').toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }) : 'sin preferencia';
      var t = 'Hola Adrián, quiero pedir cita en Titans Logopedia.\n' +
        'Nombre: ' + f.get('nombre') + '\nTeléfono: ' + f.get('tel') +
        '\nPara: ' + (f.get('para') || '-') + '\nMotivo: ' + (f.get('servicio') || '-') +
        '\nDía preferido: ' + fecha + '\nFranja: ' + (f.get('franja') || '-') +
        (f.get('msg') ? '\nComentario: ' + f.get('msg') : '');
      if (via === 'mail') location.href = 'mailto:titanslogopedia@gmail.com?subject=' + encodeURIComponent('Solicitud de cita') + '&body=' + encodeURIComponent(t);
      else window.open('https://wa.me/34640129292?text=' + encodeURIComponent(t), '_blank', 'noopener');
    });
  });
})();
