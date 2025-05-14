export const loadState = () => {
  try {
    const serialized = localStorage.getItem("employees");
    if (serialized === null) {
      return undefined;
    }
    return { employees: JSON.parse(serialized) };
  } catch (err) {
    console.warn("Could not load state from localStorage", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state.employees);
    localStorage.setItem("employees", serialized);
  } catch (err) {
    console.warn("Could not save state to localStorage", err);
  }
};
