function lightOn(){
  const buttonOn= document.getElementById('image-off');
    buttonOn.style.display='inline'

    const bttonLight=document.getElementById('image-on');
    bttonLight.style.display='inline'
    buttonOn.style.display='none'
}

function lightOff(){
    const bttonLight=document.getElementById('image-on');
    bttonLight.style.display='none'
    const buttonOn= document.getElementById('image-off');
    buttonOn.style.display='inline'
}
const light=document.getElementById('style-image');
light.style.margin=' 0 auto';
light.style.width=' 30%';