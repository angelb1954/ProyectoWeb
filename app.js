const formulario = document.getElementById('form')
const checkbox = document.getElementById('activador')

checkbox.addEventListener('change', (e) => {
  if (e.target.checked) {
   console.log('SU SOLICITUD ES ACEPTADA') 
  }
  else {
    console.log('ACTIVE LA SOLICITUD POR FAVOR')
  }
  
})

const video_mp4 = document.getElementById('video'),
boton_play = document.getElementById('play')
boton_play = document.getElementById('pause');

boton_play.addEventListener('click', () => {
  video_mp4.play()
})
boton_play.addEventListener('click', () => {
  video_mp4.pause()
})



