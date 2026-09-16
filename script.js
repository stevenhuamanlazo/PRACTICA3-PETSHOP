const botones = document.querySelectorAll('.paso-btn');

botones.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    const activo = target.classList.toggle('mostrar');
    btn.classList.toggle('btn-success', activo);
    btn.classList.toggle('btn-outline-success', !activo);
  });
});

document.getElementById('btnActivarTodos').addEventListener('click', () => {
  document.querySelectorAll('.paso').forEach(sec => sec.classList.add('mostrar'));
  botones.forEach(b => { b.classList.add('btn-success'); b.classList.remove('btn-outline-success'); });
});

document.getElementById('btnDesactivarTodos').addEventListener('click', () => {
  document.querySelectorAll('.paso').forEach(sec => sec.classList.remove('mostrar'));
  botones.forEach(b => { b.classList.remove('btn-success'); b.classList.add('btn-outline-success'); });
});