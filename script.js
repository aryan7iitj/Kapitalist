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
  
  // Form Submission
  document.getElementById('consultationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
  
    // Simulate form submission (replace with actual API call)
    alert(`Thank you, ${name}! We will contact you shortly to confirm your booking for ${service}.`);
    document.getElementById('consultationForm').reset();
  });