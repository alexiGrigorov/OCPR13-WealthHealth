import Header from "../components/Header.jsx";

export default function EmployeeListPage() {
  return (
    <>
      <Header
        title="Current Employees"
        link={{
          url: "./index.html",
          description: "Back to Employee Creation",
        }}
      />
    </>
  );
}
