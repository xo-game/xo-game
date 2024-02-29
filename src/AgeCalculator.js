// Elements
const dayIn = document.getElementById('dayIn');
const monthIn = document.getElementById('monthIn');
const yearIn = document.getElementById('yearIn');
const dayOut = document.getElementById('dayOut');
const monthOut = document.getElementById('monthOut');
const yearOut = document.getElementById('yearOut');
const calculateBtn = document.getElementById('calculateBtn');
const errD = document.getElementById('errD');
const errM = document.getElementById('errM');
const errY = document.getElementById('errY');


// Calculate Button
calculateBtn.addEventListener('click', () => {
  const dayInValue = dayIn.value;
  const monthInValue = monthIn.value;
  const yearInValue = yearIn.value;
  const birthday = `${yearInValue}-${monthInValue}-${dayInValue}`;

  if (validateDay() && validateMonth() && validateYear()) {
    console.log('No problem');
  } else {
    return;
  }

  // Age Calculation
  let years = new Date().getFullYear() - new Date(birthday).getFullYear();
  let months = new Date().getMonth() - new Date(birthday).getMonth();
  let days = new Date().getDate() - Number(dayInValue);
  if (months < 0) {
    years = years - 1;
    months = months + 12;
  }

  if (days < 0) {
    days += getNoOfDays(yearInValue, monthInValue - 1);
  }

  // Display Values
  dayOut.innerHTML = days;
  monthOut.innerHTML = months;
  yearOut.innerHTML = years;
});

// Get Number of Days in a particular months
function getNoOfDays(yearInValue, monthInValue) {
  return new Date(yearInValue, monthInValue, 0).getDate();
}

/*================ on Blur Validation =========================*/

// On Blur day validation
dayIn.addEventListener('blur', () => {
  validateDay();
});

// Validate Day function
const validateDay = () => {
  const dayInValue = dayIn.value;
  const monthInValue = monthIn.value;
  const yearInValue = yearIn.value;
  if (dayInValue == '') {
    errD.innerHTML = 'This field is required'
    return false;
  } else if (!validDay(yearInValue, monthInValue, dayInValue)) {
    errD.innerHTML = 'Insert a valid day';
    return false;
  } else {
    errD.innerHTML = '';
    return true;
  }
};

// On Blur month validation
monthIn.addEventListener('blur', () => {
  validateMonth();
});

const validateMonth = () => {
  const monthInValue = monthIn.value;
  if (monthInValue == '') {
    errM.innerHTML = 'This field is required'
    return false;
  } else if (!validMonth(monthInValue)) {
    errM.innerHTML = 'Insert a valid Month'
    return false;
  } else {
    errM.innerHTML = '';
    return true;
  }
};

// on Blur Year validate
yearIn.addEventListener('blur', () => {
  validateYear();
});

const validateYear = () => {
  const yearInValue = yearIn.value;
  const monthInValue = monthIn.value;
  const dayInValue = dayIn.value;
  if (yearInValue == '') {
    errY.innerHTML = 'This field is required';
    return false;
  } else if (!validYear(yearInValue, monthInValue, dayInValue)) {
    errY.innerHTML = 'Insert a valid Year'
    return false;
  } else {
    errY.innerHTML = '';
    return true;
  }
};

// Validate Day
function validDay(yearInValue, monthInValue, dayInValue) {
  if (dayInValue > getNoOfDays(yearInValue, monthInValue) || dayInValue < 1) return false;
  return true;
}

// validate Month
function validMonth(monthInValue) {
  if (monthInValue > 12 || monthInValue < 1) return false;
  return true;
}

// Validate Year
function validYear(yearInValue, monthInValue, dayInValue) {
  const secondDate = new Date();
  const firstDate = new Date(`${yearInValue}-${monthInValue}-${dayInValue}`);
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
}
