// Minimal JS: set year and handle basic contact form interaction
document.addEventListener('DOMContentLoaded',function(){
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  var form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      // Lightweight client-side validation already handled by required attributes
      alert('Dziękujemy! Twoja wiadomość została wysłana.');
      form.reset();
    });
  }
});
