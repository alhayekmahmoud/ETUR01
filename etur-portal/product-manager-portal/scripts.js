const API_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
    const reportsSection = document.getElementById('reports-section');
    const reportDetailsSection = document.getElementById('report-details-section');
    const reportsList = document.getElementById('reports-list');
    const reportDetails = document.getElementById('report-details');
    const backToReportsButton = document.getElementById('back-to-reports');
    const backToCustomerPortal = document.getElementById('back-to-customer-portal');
    const reportLogout= document.getElementById('logout');

    //back To Customer Portal
    backToCustomerPortal.addEventListener('click', () => {
    //     localStorage.removeItem('customerId'); // Clear session
        window.location.href = './../customer-prtal/index.html'; // Redirect to login page
    });

    // View reports
    async function fetchAndDisplayReports() {
        const response = await fetch(`${API_URL}/reports`);
        const reports = await response.json();
        reportsList.innerHTML = '';
        reports.forEach(report => {
            const tile = document.createElement('div');
            tile.className = 'report-tile';
            tile.innerHTML = `
                <h3>${report.category}</h3>
                <p>${report.description}</p>
                <button onclick="viewReportDetails('${report.id}')">View details</button>
            `;
            reportsList.appendChild(tile);
        });
    }

    // View reports details
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

    // Log out
   reportLogout.addEventListener('click', () => {
        localStorage.removeItem('customerId'); // Clear session
        window.location.href = './../customer-prtal/index.html'; // Redirect to login page
    });

    // const customerId = localStorage.getItem('customerId');
    // if (!customerId) {
    //     window.location.href = './../customer-prtal/index.html'; // Redirect to login if not logged in
    // } else {
    //     fetchAndDisplayReports();
    // }

    fetchAndDisplayReports();
});