// Initialize all tables when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create 1NF tables
    const non1NFTable = new TableEditor('non-1nf-table', tableData.non1NF);
    const firstNFTable = new TableEditor('1nf-table', tableData.firstNF);
    
    // Create 2NF tables
    const non2NFTable = new TableEditor('non-2nf-table', tableData.non2NF);
    const secondNFOrdersTable = new TableEditor('2nf-orders-table', tableData.secondNFOrders);
    const secondNFOrderDetailsTable = new TableEditor('2nf-order-details-table', tableData.secondNFOrderDetails);
    const secondNFProductsTable = new TableEditor('2nf-products-table', tableData.secondNFProducts);
    const secondNFCustomersTable = new TableEditor('2nf-customers-table', tableData.secondNFCustomers);
    
    // Create 3NF tables
    const non3NFTable = new TableEditor('non-3nf-table', tableData.non3NF);
    const thirdNFEmployeesTable = new TableEditor('3nf-employees-table', tableData.thirdNFEmployees);
    const thirdNFDepartmentsTable = new TableEditor('3nf-departments-table', tableData.thirdNFDepartments);
    
    // Create comprehensive example tables
    const unnormalizedTable = new TableEditor('unnormalized-table', tableData.unnormalized);
    const comp2NFInvoicesTable = new TableEditor('comp-2nf-invoices-table', tableData.comp2NFInvoices);
    const comp2NFInvoiceDetailsTable = new TableEditor('comp-2nf-invoice-details-table', tableData.comp2NFInvoiceDetails);
    const comp2NFProductsTable = new TableEditor('comp-2nf-products-table', tableData.comp2NFProducts);
    const comp3NFProductsTable = new TableEditor('comp-3nf-products-table', tableData.comp3NFProducts);
    const comp3NFCategoriesTable = new TableEditor('comp-3nf-categories-table', tableData.comp3NFCategories);
    const comp3NFCustomersTable = new TableEditor('comp-3nf-customers-table', tableData.comp3NFCustomers);
    const comp3NFInvoicesTable = new TableEditor('comp-3nf-invoices-table', tableData.comp3NFInvoices);
    
    // Store all tables in a map for easy access
    const tables = {
        '1nf': [firstNFTable],
        '2nf': [secondNFOrdersTable, secondNFOrderDetailsTable, secondNFProductsTable, secondNFCustomersTable],
        '3nf': [thirdNFEmployeesTable, thirdNFDepartmentsTable],
        'comp': [
            comp2NFInvoicesTable, comp2NFInvoiceDetailsTable, comp2NFProductsTable,
            comp3NFProductsTable, comp3NFCategoriesTable, comp3NFCustomersTable, comp3NFInvoicesTable
        ]
    };
    
    // Add event listeners to reset buttons
    document.querySelectorAll('.reset-btn').forEach(button => {
        button.addEventListener('click', () => {
            const tableGroup = button.dataset.table;
            tables[tableGroup].forEach(table => table.reset());
        });
    });

    // Add SQL help buttons to each example container
    document.querySelectorAll('.example-container').forEach(container => {
        const helpBtn = document.createElement('div');
        helpBtn.classList.add('sql-help-btn');
        helpBtn.textContent = '?';
        helpBtn.title = 'SQL Rules Help';
        
        helpBtn.addEventListener('click', () => {
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.classList.add('sql-help-tooltip');
            tooltip.innerHTML = `
                <h4>SQL Naming Rules:</h4>
                <ul>
                    <li>No double quotes in identifiers</li>
                    <li>No SQL reserved words (SELECT, FROM, etc.)</li>
                    <li>Use only letters, numbers, and underscores</li>
                    <li>Names should be descriptive and meaningful</li>
                    <li>Primary keys should be properly defined</li>
                    <li>Foreign keys should reference primary keys</li>
                </ul>
            `;
            
            // Add close button
            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'Close';
            closeBtn.addEventListener('click', () => {
                container.removeChild(tooltip);
            });
            tooltip.appendChild(closeBtn);
            
            // Add to container
            container.appendChild(tooltip);
            
            // Auto-close after 10 seconds
            setTimeout(() => {
                if (container.contains(tooltip)) {
                    container.removeChild(tooltip);
                }
            }, 10000);
        });
        
        container.style.position = 'relative';
        container.appendChild(helpBtn);
    });
}); 