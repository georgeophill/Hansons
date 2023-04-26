$('.ui.left.sidebar').sidebar({
  transition: 'overlay',
  dimPage: false,
  closable: true
});

$('.ui.left.sidebar')
.sidebar('attach events', '#menu');
