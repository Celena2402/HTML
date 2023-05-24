const fileUploader = document.getElementById('file');
const feedback = document.getElementById('feedback');
const progress = document.getElementById('progress');

const reader = new FileReader();

fileUploader.addEventListener('change', (event) => {
  const files = event.target.files;
  const file = files[0];
  reader.readAsDataURL(file);
  
  reader.addEventListener('progress', (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100;
      progress.value = percent;
      document.getElementById('progress-label').innerHTML = Math.round(percent) + '%';
      
      if (percent === 100) {
        let msg = `<span style="color:black;">Файл <u><b>${file.name}</b></u> был успешно загружен.</span>`;
        feedback.innerHTML = msg;
      }
    }
  });
});