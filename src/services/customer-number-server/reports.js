// reports.js
const reports = [];

export class Report {
    constructor(category, customerId, description, labels = [], owner, priority = 4) {
        this.id = Date.now().toString(); // Unique identifier
        this.category = category;
        this.customerId = customerId;
        this.description = description;
        this.labels = labels;
        this.owner = owner;
        this.assignedTo = null;
        this.createdAt = new Date().toISOString();
        this.editedAt = null;
        this.closedAt = null;
        this.state = "Open";
        this.priority = priority;
        this.comments = [];
        this.closeReason = null;
        this.references = [];
    }
}

export function createReport(category, customerId, description, labels, owner, priority) {
    const report = new Report(category, customerId, description, labels, owner, priority);
    reports.push(report);
    return report;
}

export function getAllReports() {
    return reports;
}

export function getReportById(id) {
    return reports.find(report => report.id === id);
}

export function updateReport(id, updates) {
    const report = getReportById(id);
    if (report) {
        Object.assign(report, { ...updates, editedAt: new Date().toISOString() });
        return report;
    }
    return null;
}

export function deleteReport(id) {
    const index = reports.findIndex(report => report.id === id);
    if (index !== -1) {
        return reports.splice(index, 1)[0];
    }
    return null;
}

export function addCommentToReport(id, author, message, type) {
    const report = getReportById(id);
    if (report) {
        const comment = {
            author,
            message,
            type,
            createdAt: new Date().toISOString(),
        };
        report.comments.push(comment);
        return report;
    }
    return null;
}

export function closeReport(id, reason) {
    const report = getReportById(id);
    if (report) {
        report.state = "Closed";
        report.closeReason = reason;
        report.closedAt = new Date().toISOString();
        return report;
    }
    return null;
}