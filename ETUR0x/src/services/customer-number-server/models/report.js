class Report {
    constructor({
        id,
        category,
        customerId,
        description,
        labels = [],
        owner,
        assignedTo,
        createdAt = new Date().toISOString(),
        editedAt = null,
        closedAt = null,
        state = 'Open',
        priority = 1,
        comments = [],
        closeReason = null,
        references = [],
    }) {
        this.id = id;
        this.category = category;
        this.customerId = customerId;
        this.description = description;
        this.labels = labels;
        this.owner = owner;
        this.assignedTo = assignedTo;
        this.createdAt = createdAt;
        this.editedAt = editedAt;
        this.closedAt = closedAt;
        this.state = state;
        this.priority = priority;
        this.comments = comments;
        this.closeReason = closeReason;
        this.references = references;
    }
}

export default Report;
