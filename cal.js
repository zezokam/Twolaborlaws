function calculateGratuity() {
  // Get input values
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);
  var lastBasicWage = parseFloat(document.getElementById("lastBasicWage").value);

  // Calculate years, months, and days of service
  var yearsOfService = endDate.getFullYear() - startDate.getFullYear();
  var monthsOfService = endDate.getMonth() - startDate.getMonth();
  var daysOfService = endDate.getDate() - startDate.getDate();

  if (daysOfService < 0) {
    var daysInLastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    daysOfService += daysInLastMonth;
    monthsOfService--;
  }

  if (monthsOfService < 0) {
    yearsOfService--;
    monthsOfService += 12;
  }

  // Calculate daily wage
  var dailyWage = lastBasicWage / 30;

  // Calculate gratuity amount
  var gratuityAmount = 0;
  if (yearsOfService < 3) {
    gratuityAmount = (dailyWage * 15 * yearsOfService) + (dailyWage * monthsOfService * 15 / 12) + (dailyWage * daysOfService / 12);
  } else {
    gratuityAmount = (dailyWage * 15 * 3) + (dailyWage * 30 * (yearsOfService - 3)) + (dailyWage * monthsOfService * 30 / 12) + (dailyWage * daysOfService / 12);
  }

  // Format duration of service
  var yearsText, monthsText, daysText;
  if (yearsOfService == 1) {
    yearsText = "year";
  } else {
    yearsText = "years";
  }

  if (monthsOfService == 1) {
    monthsText = "month";
  } else {
    monthsText = "months";
  }

  if (daysOfService == 1) {
    daysText = "day";
  } else {
    daysText = "days";
  }

  // Display result
  var duration = yearsOfService + " " + yearsText + " , " + monthsOfService + " " + monthsText + " , " + daysOfService + " " + daysText;
  var resultString = "gratuity: " + gratuityAmount.toFixed(3) + " O.R" + "<br>" + "service duration: " + duration;
  document.getElementById("result").innerHTML = resultString;
}

function changeLanguage() {
  // Toggle language
  var languageButton = document.getElementById("languageButton");
  
  // Redirect to index.html page
  window.location.href = "old_law.html";
}
