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

  // Calculate gratuity amount (consistent 30 days per year)
  var gratuityAmount = dailyWage * 30 * yearsOfService + dailyWage * 30 * (monthsOfService / 12) + dailyWage * (daysOfService / 12);

  // Format duration of service
  var yearsText, monthsText, daysText;
  if (yearsOfService == 1) {
    yearsText = "سنة";
  } else if (yearsOfService == 2) {
    yearsText = "سنتين";
  } else if (yearsOfService >= 3 && yearsOfService <= 10) {
    yearsText = "سنوات";
  } else {
    yearsText = "سنة";
  }

  if (monthsOfService == 1) {
    monthsText = "شهر";
  } else if (monthsOfService == 2) {
    monthsText = "شهرين";
  } else if (monthsOfService >= 3 && monthsOfService <= 10) {
    monthsText = "أشهر";
  } else {
    monthsText = "شهر";
  }

  if (daysOfService == 1) {
    daysText = "يوم";
  } else if (daysOfService == 2) {
    daysText = "يومين";
  } else if (daysOfService >= 3 && daysOfService <= 10) {
    daysText = "أيام";
  } else {
    daysText = "يوم";
  }

  // Display result
  var duration = yearsOfService + " " + yearsText + " و " + monthsOfService + " " + monthsText + " و " + daysOfService + " " + daysText;
  var resultString = "مبلغ المكافأة: " + gratuityAmount.toFixed(3) + " ريال" + "<br>" + "مدة الخدمة: " + duration;
  document.getElementById("result").innerHTML = resultString;
}
