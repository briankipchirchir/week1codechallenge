function getStudentGrade() {

    let marks = parseInt(prompt("Enter student marks (0-100): "));
  

    if (marks < 0 || marks > 100) {
      alert("Invalid marks. Please enter a number between 0 and 100.");
      return;
    }
  
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 49) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    
    console.log("Student grade:", grade);
  }
  
  getStudentGrade();
  //


  function checkSpeed(speed) {
    const limit = 70;
  

    let points = Math.floor((speed - limit) / 5);
  
    if (speed <= limit) {
      console.log("Ok");
    } else if (points > 12) {
      console.log("License suspended");
    } else {
      console.log("Points:", points);
    }
  }

  let speed = parseInt(prompt("Enter car speed (km/h): "));
  checkSpeed(speed);

  //

function getNHIFDeduction(grossSalary) {
    if (grossSalary < 5999) {
      return 150;
    } else if (grossSalary < 7999) {
      return 300;
    } else if (grossSalary < 11999) {
      return 400;
    } else if (grossSalary < 14999) {
      return 500;
    } else if (grossSalary < 19999) {
      return 600;
    } else if (grossSalary < 24999) {
      return 750;
    } else if (grossSalary < 29999) {
      return 850;
    } else if (grossSalary < 34999) {
      return 950;
    } else if (grossSalary < 39999) {
      return 1050;
    } else if (grossSalary < 44999) {
      return 1150;
    } else if (grossSalary < 49999) {
      return 1250;
    } else {
      return 1500;
    }
  }
  
  function calculateNetSalary(basicSalary, benefits, taxRate) {

    const grossSalary = basicSalary + benefits;
  
    const nhifDeduction = getNHIFDeduction(grossSalary);
  

    const nssfRate = 0.06;
    const nssfDeduction = nssfRate * basicSalary;
  
    
    const taxableIncome = grossSalary - nhifDeduction - nssfDeduction;
  
    
    const payee = taxRate * taxableIncome;
  
    
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    console.log("Gross Salary:", grossSalary);
    console.log("NHIF Deduction:", nhifDeduction);
    console.log("NSSF Deduction:", nssfDeduction);
    console.log("Payee (Tax):", payee);
    console.log("Net Salary:", netSalary);
  
    return netSalary;
  }
  
  const netSalary = calculateNetSalary(25000, 5000, 0.125);
  console.log("Net Salary:", netSalary);
  
  
  