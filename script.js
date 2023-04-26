function calculateAge() {
    var today = new Date();
    var birthday = document.querySelector('.day').value;
    var birthmonth = document.querySelector('.month').value;
    var birthyear = document.querySelector('.year').value;
  
    var year = today.getFullYear() - birthyear;
  
    var month = today.getMonth() + 1 - birthmonth;
  
    if (month < 0 || (month == 0 && today.getDate() < birthday)) {
      year--;
      month += 12;
    }
  
    var day = today.getDate() - birthday;
  
    if (day < 0) {
      month--;
      day += 30;
    }
  
    if (!birthday || !birthmonth || !birthyear) {
      var elements = document.querySelectorAll(".require")
      elements.forEach(element => {
        element.classList.add("warning")
        element.innerHTML = "This field is required"
      });
    } else if (birthday > 31 || birthday < 1) {
      var elements = document.querySelectorAll(".require")
      elements.forEach(element => {
        element.classList.add("warning")
      });
      document.querySelector('.day').innerHTML = "must be a valid day"
    } else if (birthmonth > 12 || birthmonth < 1) {
      var elements = document.querySelectorAll(".require")
      elements.forEach(element => {
        element.classList.add("warning")
      });
      document.querySelector('.month').innerHTML = "must be a valid month"
    } else if (birthyear > today.getFullYear() || birthyear < 1900) {
      var elements = document.querySelectorAll(".require")
      elements.forEach(element => {
        element.classList.add("warning")
      });
      document.querySelector('.year').innerHTML = "must be a valid year"
    } else {
      document.querySelectorAll(".require").forEach(element => {
        element.classList.remove("warning")
        element.innerHTML = ""
      });
      document.querySelector('.yearoutput').innerHTML = year
      document.querySelector('.monthoutput').innerHTML = month
      document.querySelector('.dayoutput').innerHTML = day
    }
  }
  
  var btn = document.querySelector('button')
  btn.addEventListener('click', function () {
    calculateAge()
  })
  