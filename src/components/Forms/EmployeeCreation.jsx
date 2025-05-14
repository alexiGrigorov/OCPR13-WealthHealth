import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeesSlice";

import { Modal } from "ocpr13-wealthhealth-modal";

import PersonalInformationInputs from "./FieldGroupings/PersonalInformation";
import AddressInputs from "./FieldGroupings/Address";
import EmploymentDetailsInputs from "./FieldGroupings/EmploymentDetails";

export default function EmployeeCreationForm({
  showTitle = true,
  className = "",
}) {
  const [employee, setEmployee] = useState({});
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (field, value) => {
    setEmployee((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // → dispatch into Redux; persistence is handled by our subscriber
    dispatch(addEmployee(employee));
    setIsModalOpen(true);
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
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="modal-dialog"
        >
          <Modal.CloseButton className="modal-button" />
          "Employee Created!"
        </Modal>
      </form>
    </section>
  );
}
