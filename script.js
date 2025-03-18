function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  // إضافة صفر في حال كانت الأرقام أقل من 10
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
  return hours + ":" + minutes + ":" + seconds;
}
function type_time(){
    let type_time 
    if(new Date().getHours()>12){
    type_time = 'PM'
    }
    else{
      type_time = 'AM'
    }
    return type_time
  }
function copy(id){
  let code = document.getElementById(id).innerText
  navigator.clipboard.writeText(code)
  }
function changeiconcopy(iconElement) {
  iconElement.classList.remove('fa-copy');
  iconElement.classList.add('fa-check');
}
alert("hhhh")
