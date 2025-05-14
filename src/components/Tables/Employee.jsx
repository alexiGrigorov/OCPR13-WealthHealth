import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import DataTable from "react-data-table-component";

import { camelToTitle } from "../utilities/strings";

export default function EmployeeTable() {
  // 1) Read employees from Redux store
  const employees = useSelector((state) => state.employees);
  const [filterText, setFilterText] = useState("");

  // 2) derive a flat set of all keys across your objects
  const columns = useMemo(() => {
    if (!employees.length) return [];

    // merge all objects to pick up every key
    const allKeys = Object.keys(
      employees.reduce((acc, obj) => ({ ...acc, ...obj }), {}),
    );

    return allKeys.map((key) => ({
      name: camelToTitle(key),
      selector: (row) => row[key],
      sortable: true,
      wrap: true,
    }));
  }, [employees]);

  // 3) filter rows by any column containing the filterText
  const filteredData = useMemo(() => {
    if (!filterText) return employees;
    const lower = filterText.toLowerCase();
    return employees.filter((row) =>
      columns.some((col) => {
        const val = col.selector(row);
        return val != null && String(val).toLowerCase().includes(lower);
      }),
    );
  }, [employees, columns, filterText]);

  // 4) the search input above the table
  const subHeaderComponent = useMemo(
    () => (
      <input
        type="text"
        placeholder="🔍 Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{
          padding: "4px 8px",
          borderRadius: 4,
          border: "1px solid #ccc",
          marginBottom: 0,
        }}
      />
    ),
    [filterText],
  );

  return (
    <DataTable
      columns={columns}
      data={filteredData}
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[10, 25, 50, 100]}
      striped
      highlightOnHover
      subHeader
      subHeaderComponent={subHeaderComponent}
      persistTableHead
      responsive
    />
  );
}
