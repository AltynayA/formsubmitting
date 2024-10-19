function submitForm(stepData, endpoint) {
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stepData)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        alert('Step submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the step');
    });
}

document.getElementById('submitForm').addEventListener('click', function() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const complaints = document.getElementById('complaints').value;
    const targetTable = document.getElementById('table').value;  // Get the selected table

    const formData = {
        fname: fname,
        lname: lname,
        age: age,
        weight: weight,
        height: height,
        complaints: complaints,
        target_table: targetTable  // Send the selected table
    };

    fetch('/submitForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the form');
    });
});
