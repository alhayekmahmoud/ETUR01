const API_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const reportsSection = document.getElementById('reports-section');
    const createReportSection = document.getElementById('create-report-section');
    const reportDetailsSection = document.getElementById('report-details-section');
    const loginForm = document.getElementById('login-form');
    const createReportForm = document.getElementById('create-report-form');
    const reportsList = document.getElementById('reports-list');
    const reportDetails = document.getElementById('report-details');
    const backToReportsButton = document.getElementById('back-to-reports');

    let currentCustomerId = null;

    // Log in
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const customerId = document.getElementById('customer-id').value;
        const response = await fetch(`${API_URL}/validate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customerNumber: customerId }),
        });
        const result = await response.json();
        if (result.isValid && result.exists) {
            currentCustomerId = customerId;
            loginSection.classList.add('hidden');
            reportsSection.classList.remove('hidden');
            fetchAndDisplayReports();
        } else {
            document.getElementById('login-error').textContent = 'Customer number is invalid.';
        }
    });

    // Create new report
    createReportForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const type = document.getElementById('report-type').value;
        const description = document.getElementById('report-description').value;
        const response = await fetch(`${API_URL}/reports`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category: type,
                customerId: currentCustomerId,
                description,
                owner: 'Customer',
            }),
        });
        if (response.ok) {
            alert('Report successfully created!');
            createReportSection.classList.add('hidden');
            reportsSection.classList.remove('hidden');
            fetchAndDisplayReports();
        } else {
            alert('An error occurred while creating the report.');
        }
    });

    // View reports
    async function fetchAndDisplayReports() {
        const response = await fetch(`${API_URL}/reports`);
        const reports = await response.json();
        reportsList.innerHTML = '';
        reports.forEach(report => {
            if (report.customerId === currentCustomerId && report.state !== 'Closed') {
                const tile = document.createElement('div');
                tile.className = 'report-tile';
                tile.innerHTML = `
                    <h3>${report.category}</h3>
                    <p>${report.description}</p>
                    <button onclick="viewReportDetails('${report.id}')">View details</button>
                `;
                reportsList.appendChild(tile);
            }
        });
    }

    // Report details
    window.viewReportDetails = async (reportId) => {
        const response = await fetch(`${API_URL}/reports/${reportId}`);
        const report = await response.json();
        reportDetails.innerHTML = `
            <h3>${report.category}</h3>
            <p>${report.description}</p>
            <p>Status: ${report.state}</p>
            <p>Reason for closure: ${report.closeReason || 'Not closed yet'}</p>
            <h4>Comments:</h4>
            <ul>
                ${report.comments.map(comment => `<li>${comment.author}: ${comment.message}</li>`).join('')}
            </ul>
        `;
        reportsSection.classList.add('hidden');
        reportDetailsSection.classList.remove('hidden');
    };

    // Back to list
    backToReportsButton.addEventListener('click', () => {
        reportDetailsSection.classList.add('hidden');
        reportsSection.classList.remove('hidden');
    });
});