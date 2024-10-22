
class SortTable {
  constructor(data) {
    this.data = data; // 2D array representing the table rows and columns
  }

  // Method to sort the table by a specific column
  sortBy(columnIndex, order = 'asc') {
    this.data.sort((a, b) => {
      let valA = a[columnIndex];
      let valB = b[columnIndex];

      // Handle numeric and string sorting
      if (!isNaN(valA) && !isNaN(valB)) {
        valA = parseFloat(valA);
        valB = parseFloat(valB);
      }

      if (order === 'asc') {
        return valA > valB ? 1 : -1;
      } else {
        return valA < valB ? 1 : -1;
      }
    });
  }

  // Method to get the sorted data
  getSortedData() {
    return this.data;
  }
}

// Export the SortTable class so it can be used in sketches or other projects
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SortTable;
}
