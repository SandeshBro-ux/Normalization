// This file contains all the example data for the tables

const tableData = {
    // 1NF Examples
    non1NF: {
        headers: ['StudentID', 'Name', 'Courses'],
        rows: [
            ['1', 'John', 'Math, Physics, Chemistry'],
            ['2', 'Sarah', 'Biology, English'],
            ['3', 'Mike', 'Computer Science, Statistics']
        ]
    },
    
    firstNF: {
        headers: ['StudentID', 'Name', 'Course'],
        rows: [
            ['1', 'John', 'Math'],
            ['1', 'John', 'Physics'],
            ['1', 'John', 'Chemistry'],
            ['2', 'Sarah', 'Biology'],
            ['2', 'Sarah', 'English'],
            ['3', 'Mike', 'Computer Science'],
            ['3', 'Mike', 'Statistics']
        ]
    },
    
    // 2NF Examples
    non2NF: {
        headers: ['OrderID', 'ProductID', 'ProductName', 'Quantity', 'CustomerID', 'CustomerName'],
        rows: [
            ['1', 'P1', 'Laptop', '2', 'C1', 'John'],
            ['1', 'P2', 'Mouse', '1', 'C1', 'John'],
            ['2', 'P1', 'Laptop', '1', 'C2', 'Sarah'],
            ['3', 'P3', 'Keyboard', '3', 'C1', 'John']
        ]
    },
    
    secondNFOrders: {
        headers: ['OrderID', 'CustomerID'],
        rows: [
            ['1', 'C1'],
            ['2', 'C2'],
            ['3', 'C1']
        ]
    },
    
    secondNFOrderDetails: {
        headers: ['OrderID', 'ProductID', 'Quantity'],
        rows: [
            ['1', 'P1', '2'],
            ['1', 'P2', '1'],
            ['2', 'P1', '1'],
            ['3', 'P3', '3']
        ]
    },
    
    secondNFProducts: {
        headers: ['ProductID', 'ProductName'],
        rows: [
            ['P1', 'Laptop'],
            ['P2', 'Mouse'],
            ['P3', 'Keyboard']
        ]
    },
    
    secondNFCustomers: {
        headers: ['CustomerID', 'CustomerName'],
        rows: [
            ['C1', 'John'],
            ['C2', 'Sarah']
        ]
    },
    
    // 3NF Examples
    non3NF: {
        headers: ['EmployeeID', 'Department', 'DepartmentHead'],
        rows: [
            ['E1', 'Sales', 'John Smith'],
            ['E2', 'Sales', 'John Smith'],
            ['E3', 'Marketing', 'Sarah Johnson'],
            ['E4', 'IT', 'Mike Williams'],
            ['E5', 'IT', 'Mike Williams']
        ]
    },
    
    thirdNFEmployees: {
        headers: ['EmployeeID', 'Department'],
        rows: [
            ['E1', 'Sales'],
            ['E2', 'Sales'],
            ['E3', 'Marketing'],
            ['E4', 'IT'],
            ['E5', 'IT']
        ]
    },
    
    thirdNFDepartments: {
        headers: ['Department', 'DepartmentHead'],
        rows: [
            ['Sales', 'John Smith'],
            ['Marketing', 'Sarah Johnson'],
            ['IT', 'Mike Williams']
        ]
    },
    
    // Comprehensive Example
    unnormalized: {
        headers: ['InvoiceID', 'CustomerName', 'CustomerAddress', 'ProductID', 'ProductName', 'Category', 'Price', 'Quantity', 'Total'],
        rows: [
            ['1001', 'John Doe', '123 Main St, NY', 'P1', 'Laptop', 'Electronics', '1200', '1', '1200'],
            ['1001', 'John Doe', '123 Main St, NY', 'P2', 'Mouse', 'Accessories', '25', '2', '50'],
            ['1002', 'Jane Smith', '456 Oak Ave, CA', 'P3', 'Keyboard', 'Accessories', '45', '1', '45'],
            ['1003', 'Bob Johnson', '789 Pine Rd, TX', 'P1', 'Laptop', 'Electronics', '1200', '1', '1200'],
            ['1003', 'Bob Johnson', '789 Pine Rd, TX', 'P4', 'Monitor', 'Electronics', '200', '2', '400']
        ]
    },
    
    comp2NFInvoices: {
        headers: ['InvoiceID', 'CustomerName', 'CustomerAddress'],
        rows: [
            ['1001', 'John Doe', '123 Main St, NY'],
            ['1002', 'Jane Smith', '456 Oak Ave, CA'],
            ['1003', 'Bob Johnson', '789 Pine Rd, TX']
        ]
    },
    
    comp2NFInvoiceDetails: {
        headers: ['InvoiceID', 'ProductID', 'Quantity', 'Total'],
        rows: [
            ['1001', 'P1', '1', '1200'],
            ['1001', 'P2', '2', '50'],
            ['1002', 'P3', '1', '45'],
            ['1003', 'P1', '1', '1200'],
            ['1003', 'P4', '2', '400']
        ]
    },
    
    comp2NFProducts: {
        headers: ['ProductID', 'ProductName', 'Category', 'Price'],
        rows: [
            ['P1', 'Laptop', 'Electronics', '1200'],
            ['P2', 'Mouse', 'Accessories', '25'],
            ['P3', 'Keyboard', 'Accessories', '45'],
            ['P4', 'Monitor', 'Electronics', '200']
        ]
    },
    
    comp3NFProducts: {
        headers: ['ProductID', 'ProductName', 'CategoryID', 'Price'],
        rows: [
            ['P1', 'Laptop', 'C1', '1200'],
            ['P2', 'Mouse', 'C2', '25'],
            ['P3', 'Keyboard', 'C2', '45'],
            ['P4', 'Monitor', 'C1', '200']
        ]
    },
    
    comp3NFCategories: {
        headers: ['CategoryID', 'CategoryName'],
        rows: [
            ['C1', 'Electronics'],
            ['C2', 'Accessories']
        ]
    },
    
    comp3NFCustomers: {
        headers: ['CustomerID', 'CustomerName', 'CustomerAddress'],
        rows: [
            ['C1', 'John Doe', '123 Main St, NY'],
            ['C2', 'Jane Smith', '456 Oak Ave, CA'],
            ['C3', 'Bob Johnson', '789 Pine Rd, TX']
        ]
    },
    
    comp3NFInvoices: {
        headers: ['InvoiceID', 'CustomerID'],
        rows: [
            ['1001', 'C1'],
            ['1002', 'C2'],
            ['1003', 'C3']
        ]
    }
};

// Store original data for reset functionality
const originalTableData = JSON.parse(JSON.stringify(tableData)); 