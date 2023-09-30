document.addEventListener("DOMContentLoaded", () => {
    // Replace this with an API request to fetch donation data from your server
    const donationData = [
        { date: "2023-09-30", receiver: "Charity A", amount: 100, status: "Completed" },
        { date: "2023-09-25", receiver: "Charity B", amount: 50, status: "Completed" },
        { date: "2023-09-20", receiver: "Charity C", amount: 75, status: "Pending" },
    ];

    const tableBody = document.querySelector("tbody");

    // Loop through donationData and populate the table
    donationData.forEach((donation) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${donation.date}</td>
            <td>${donation.receiver}</td>
            <td>$${donation.amount}</td>
            <td>${donation.status}</td>
        `;
        tableBody.appendChild(row);
    });
});
