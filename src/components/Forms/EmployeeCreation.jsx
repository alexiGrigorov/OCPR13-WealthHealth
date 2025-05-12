import { useState } from "react";

import PersonalInformationInputs from "./FieldGroupings/PersonalInformation";
import AddressInputs from "./FieldGroupings/Address";
import EmploymentDetailsInputs from "./FieldGroupings/EmploymentDetails";

export default function EmployeeCreationForm({
  showTitle = true,
  className = "",
}) {
  const [employee, setEmployee] = useState({});

  const handleChange = (field, value) => {
    setEmployee((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    storedEmployees.push(employee);
    localStorage.setItem("employees", JSON.stringify(storedEmployees));
  };

  return (
    <section
      className={className}
      aria-labelledby={showTitle ? "create-employee-form-heading" : undefined}
    >
      {showTitle && (
        <h2 id="create-employee-form-heading" className="text-center">
          Create Employee
        </h2>
      )}

      <form
        id="create-employee-form"
        aria-labelledby="create-employee-form-heading"
        onSubmit={handleSubmit}
      >
        <PersonalInformationInputs
          values={employee}
          onChange={handleChange}
          required
        />

        <AddressInputs
          values={employee}
          onChange={handleChange}
          required
          legend
        />

        <EmploymentDetailsInputs
          values={employee}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Save" className="mx-auto" />
      </form>
    </section>
  );
}
