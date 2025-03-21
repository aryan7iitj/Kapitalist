// Dynamic Consultant Profiles
const consultants = [
  {
    name: "Jitendra Rathi",
    qualification: "Chartered Financial Analyst (CFA) | Chartered Accountant (CA) ICS",
    experience: "15+ years",
    image: "Jitendra_Rathi.jpg"
  },
  {
    name: "Sanjay Kathuria",
    qualification: "Chartered Financial Analyst (CFA) | MBA in Finance | Engineering Graduate",
    experience: "8+ years",
    image: "Sanjay.jpg"
  },
  {
    name: "Dr. Sandip Gupta",
    qualification: "Wealth Accelerator Coach | CFP®",
    experience: "12+ years",
    image: "Sandeep_Gupta.jpg"
  },
  {
    name: "Gandhar Khalale",
    qualification: "CFA Level 2 Passed | Financial Analyst | Investment Planner",
    experience: "2+ years",
    image: "Gandhar.jpg"
  }
];

const consultantGrid = document.getElementById('consultant-grid');

consultants.forEach(consultant => {
  const card = document.createElement('div');
  card.className = 'consultant-card';
  card.innerHTML = `
    <img src="${consultant.image}" alt="${consultant.name}">
    <h3>${consultant.name}</h3>
    <p>${consultant.qualification}</p>
    <p>${consultant.experience} of experience</p>
  `;
  consultantGrid.appendChild(card);
});

document.getElementById('consultationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    service: document.getElementById('service').value,
    consultant: document.getElementById('consultants').value
  };

  fetch("https://script.google.com/macros/s/AKfycbxnnTnxEDctDlnoZBrWhJto9aQOiofp7hq3gRK6nsq-cMkfSv2MIOHoBjNQxuHJj-zDpA/exec", {
    method: "POST",
    mode: "no-cors",  // <-- Important for bypassing Google's CORS limitation
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(() => {
    alert("Thank You! We will connect you with the chosen expert soon");
    document.getElementById('consultationForm').reset();
  })
  .catch(error => alert("Error submitting form: " + error));
});
