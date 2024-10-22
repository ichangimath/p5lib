class SortJSON {
  constructor(jsonData) {
    // Initialize with JSON data
    this.data = jsonData;
  }

  // Method to sort the JSON by a specific field
  sortBy(field, order = 'asc') {
    this.data.sort((a, b) => {
      let valA = a[field];
      let valB = b[field];

      // Handle empty values, treat them as lowest priority
      if (valA === '' || valA === undefined || valA === null) valA = -Infinity;
      if (valB === '' || valB === undefined || valB === null) valB = -Infinity;

      // Handle numeric and string sorting
      if (!isNaN(valA) && !isNaN(valB)) {
        valA = parseFloat(valA);
        valB = parseFloat(valB);
      }

      // Sort logic
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
