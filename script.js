function calculateGrade() {
    let tamil = Number(prompt("Enter Tamil Marks"));
    let english = Number(prompt("Enter English Marks"));
    let maths = Number(prompt("Enter Maths Marks"));
    let science = Number(prompt("Enter Science Marks"));
    let social = Number(prompt("Enter Social Marks"));

    if (
        tamil < 0 || tamil > 100 ||
        english < 0 || english > 100 ||
        maths < 0 || maths > 100 ||
        science < 0 || science > 100 ||
        social < 0 || social > 100 
    ) {
        alert("Please enter marks between 0 and 100.");
        return;
    }
    let total = tamil + english + maths + science + social;
    let average = total / 5;
    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F"
    } 

    document.getElementById("total").innerText = total;
    document.getElementById("average").innerText = average.toFixed(2);
    document.getElementById("grade").innerText = grade;

    alert(
        "Total: " + total + "\nAverage: " +
        average.toFixed(2) + "\nGrade: " + grade
    );
}