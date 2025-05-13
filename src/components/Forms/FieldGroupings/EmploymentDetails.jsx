import FormSection from "./FormSection";
import { DEPARTMENTS } from "../../../constants/departments.js";

export default function EmploymentDetailsInputs({
  values,
  onChange,
  legend = false,
  required = true,
}) {
  const fields = (
    <>
      <label htmlFor="start-date">Start Date</label>
      <input
        id="start-date"
        name="startDate"
        type="date"
        value={values.startDate ?? ""}
        onChange={(event) => onChange("startDate", event.target.value)}
        required={required}
      />
      <label htmlFor="state">Department</label>
      <select
        id="department"
        name="department"
        value={values.department ?? ""}
        onChange={(event) => onChange("department", event.target.value)}
        required={required}
      >
        <option value="" disabled hidden>
          Select a department…
        </option>
        {DEPARTMENTS.map((department) => (
          <option key={department.code} value={department.name}>
            {department.name}
          </option>
        ))}
      </select>
    </>
  );
  return legend ? (
    <FormSection legendText="Employment Details">{fields}</FormSection>
  ) : (
    fields
  );
}
