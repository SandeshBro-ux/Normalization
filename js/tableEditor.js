/**
 * Table Editor - Creates editable tables and manages their state
 */
class TableEditor {
    constructor(containerId, tableData) {
        this.container = document.getElementById(containerId);
        this.tableData = tableData;
        this.headers = tableData.headers;
        this.rows = JSON.parse(JSON.stringify(tableData.rows)); // Deep copy
        this.render();
    }
    
    render() {
        // Clear container
        this.container.innerHTML = '';
        
        // Create table
        const table = document.createElement('table');
        
        // Create header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        this.headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create body
        const tbody = document.createElement('tbody');
        
        this.rows.forEach((row, rowIndex) => {
            const tr = document.createElement('tr');
            
            row.forEach((cell, cellIndex) => {
                const td = document.createElement('td');
                td.textContent = cell;
                td.classList.add('editable');
                td.dataset.row = rowIndex;
                td.dataset.col = cellIndex;
                td.dataset.header = this.headers[cellIndex]; // Store header name for validation
                td.addEventListener('click', () => this.startEditing(td, cell));
                tr.appendChild(td);
            });
            
            tbody.appendChild(tr);
        });
        
        table.appendChild(tbody);
        this.container.appendChild(table);
    }
    
    startEditing(cell, value) {
        // Create input element
        const input = document.createElement('input');
        input.value = value;
        input.type = 'text';
        
        // Replace cell content with input
        cell.textContent = '';
        cell.classList.add('editing');
        cell.appendChild(input);
        
        // Focus input
        input.focus();
        
        // Handle input events
        input.addEventListener('blur', () => this.finishEditing(cell, input));
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.finishEditing(cell, input);
            } else if (e.key === 'Escape') {
                this.cancelEditing(cell, value);
            }
        });
    }
    
    finishEditing(cell, input) {
        const newValue = input.value.trim();
        const rowIndex = parseInt(cell.dataset.row);
        const colIndex = parseInt(cell.dataset.col);
        const headerName = cell.dataset.header;
        
        // Validate input based on SQL rules
        const validationResult = this.validateSqlInput(newValue, headerName);
        
        if (!validationResult.valid) {
            // Show error message
            this.showValidationError(cell, validationResult.message);
            return;
        }
        
        // Update data
        this.rows[rowIndex][colIndex] = newValue;
        
        // Update cell
        cell.textContent = newValue;
        cell.classList.remove('editing');
        
        // Remove any error messages
        this.removeValidationError(cell);
    }
    
    validateSqlInput(value, headerName) {
        // Check for double quotes in table/column names
        if ((headerName.includes('ID') || 
             headerName.includes('Name') || 
             headerName.includes('Table') || 
             headerName === 'Department' || 
             headerName === 'Category' || 
             headerName === 'Course') && 
            value.includes('"')) {
            return {
                valid: false,
                message: 'SQL identifiers should not use double quotes ("")'
            };
        }
        
        // Check for SQL reserved words
        const reservedWords = ['SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 
                              'CREATE', 'ALTER', 'DROP', 'TABLE', 'DATABASE', 'INDEX'];
        
        if (reservedWords.includes(value.toUpperCase()) && 
            (headerName.includes('ID') || headerName.includes('Name'))) {
            return {
                valid: false,
                message: `"${value}" is a SQL reserved word and cannot be used as an identifier`
            };
        }
        
        // Check for special characters in identifiers
        if ((headerName.includes('ID') || headerName.includes('Name')) && 
            /[^a-zA-Z0-9_]/.test(value) && value !== '') {
            return {
                valid: false,
                message: 'Identifiers should only contain letters, numbers, and underscores'
            };
        }
        
        return { valid: true };
    }
    
    showValidationError(cell, message) {
        // Remove any existing error message
        this.removeValidationError(cell);
        
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.classList.add('validation-error');
        errorElement.textContent = message;
        
        // Insert after the cell
        cell.parentNode.insertBefore(errorElement, cell.nextSibling);
        
        // Highlight the cell
        cell.classList.add('error');
        
        // Keep the cell in editing mode
        const input = cell.querySelector('input');
        if (input) {
            input.focus();
        }
    }
    
    removeValidationError(cell) {
        // Remove error class from cell
        cell.classList.remove('error');
        
        // Find and remove error message
        const row = cell.parentNode;
        const errorElement = row.querySelector('.validation-error');
        if (errorElement) {
            row.removeChild(errorElement);
        }
    }
    
    cancelEditing(cell, originalValue) {
        cell.textContent = originalValue;
        cell.classList.remove('editing');
        this.removeValidationError(cell);
    }
    
    reset() {
        // Get the original data for this table
        const originalId = this.container.id.replace('-table', '');
        const originalData = originalTableData[originalId];
        
        // Reset data
        this.rows = JSON.parse(JSON.stringify(originalData.rows));
        
        // Re-render
        this.render();
    }
} 