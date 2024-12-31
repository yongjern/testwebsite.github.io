document.addEventListener('DOMContentLoaded', () => {
    const detailsContainer = document.getElementById('details');

    const nameElement = document.createElement('div');
    nameElement.classList.add('detail-item');
    nameElement.textContent = `Name: ${config.name}`;
    detailsContainer.appendChild(nameElement);

    const ageElement = document.createElement('div');
    ageElement.classList.add('detail-item');
    ageElement.textContent = `Age: ${config.age}`;
    detailsContainer.appendChild(ageElement);

    const emailElement = document.createElement('div');
    emailElement.classList.add('detail-item');
    emailElement.textContent = `Email: ${config.email}`;
    detailsContainer.appendChild(emailElement);

    const addressElement = document.createElement('div');
    addressElement.classList.add('detail-item');
    addressElement.textContent = `Address: ${config.address}`;
    detailsContainer.appendChild(addressElement);
});
