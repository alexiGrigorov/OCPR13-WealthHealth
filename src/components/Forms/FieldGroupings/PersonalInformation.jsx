import FormSection from "./FormSection";

export default function PersonalInformationInputs({
  values,
  onChange,
  legend = false,
  required = true,
}) {
  const fields = (
    <>
      <label htmlFor="first-name">First Name</label>
      <input
        id="first-name"
        name="firstName"
        type="text"
        value={values.firstName ?? ""}
        onChange={(event) => onChange("firstName", event.target.value)}
        required={required}
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        id="last-name"
        name="lastName"
        type="text"
        value={values.lastName ?? ""}
        onChange={(event) => onChange("lastName", event.target.value)}
        required={required}
      />
      <label htmlFor="date-of-birth">Date of Birth</label>
      <input
        id="date-of-birth"
        name="dateOfBirth"
        type="date"
        value={values.dateOfBirth ?? ""}
        onChange={(event) => onChange("dateOfBirth", event.target.value)}
        required={required}
      />
    </>
  );
  return legend ? (
    <FormSection legendText="Personal Information">{fields}</FormSection>
  ) : (
    fields
  );
}
