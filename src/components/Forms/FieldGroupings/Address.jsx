import FormSection from "./FormSection";
import { STATES } from "../../../constants/states.js";

export default function AddressInputs({
  values,
  onChange,
  legend = false,
  required = true,
}) {
  const fields = (
    <>
      <label htmlFor="street">Street</label>
      <input
        id="street"
        name="street"
        type="text"
        value={values.street ?? ""}
        onChange={(event) => onChange("street", event.target.value)}
        required={required}
      />
      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type="text"
        value={values.city ?? ""}
        onChange={(event) => onChange("city", event.target.value)}
        required={required}
      />
      <label htmlFor="state">State</label>
      <select
        id="state"
        name="state"
        value={values.state ?? ""}
        onChange={(event) => onChange("state", event.target.value)}
        required={required}
      >
        <option value="" disabled hidden>
          Select a state…
        </option>
        {STATES.map((state) => (
          <option key={state.abbreviation} value={state.abbreviation}>
            {state.name}
          </option>
        ))}
      </select>
      <label htmlFor="zip-code">Zip Code</label>
      <input
        id="zip-code"
        name="zipCode"
        type="number"
        value={values.zipCode ?? ""}
        onChange={(event) => onChange("zipCode", event.target.value)}
        required={required}
      />
    </>
  );
  return legend ? (
    <FormSection legendText="Address">{fields}</FormSection>
  ) : (
    fields
  );
}
