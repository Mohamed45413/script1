function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds;
}
function type_time() {
  return new Date().getHours() >= 12 ? "PM" : "AM";
}
function copy(id) {
  let code = document.getElementById(id).innerText;
  navigator.clipboard.writeText(code);
}
function changeiconcopy(iconElement) {
  iconElement.classList.replace('fa-copy', 'fa-check');
  setTimeout(() => {
    iconElement.classList.replace('fa-check', 'fa-copy');
  }, 2000);
}
function creatpassed(Passed, Check, Small, Capital,N,Btn,Color) {
  let styles=`<style>.check{
    color:${Color}
  }</style>`
  document.body.innerHTML+=styles
  let passed = document.getElementById(Passed);
  let passlength = document.getElementById(Check);
  let small = document.getElementById(Small);
  let capital = document.getElementById(Capital);
  let btn = document.getElementById(Btn)
  let minLength =N; // الحد الأدنى للطول
  
  passed.addEventListener("input", function() {
    let error = [];
    
    if (passed.value.length >= minLength) {
      passlength.classList.add("check");
    } else {
      passlength.classList.remove("check");
      error.push("check");
    }
    
    if (/[a-z]/.test(passed.value)) {
      small.classList.add("check");
    } else {
      small.classList.remove("check");
      error.push("small");
    }
    
    if (/[A-Z]/.test(passed.value)) {
      capital.classList.add("check");
    } else {
      capital.classList.remove("check");
      error.push("capital");
    }
    if (error.length > 0) {
      btn.setAttribute("disabled", "disabled");
    } else {
      btn.removeAttribute("disabled");
    }
  });
}
