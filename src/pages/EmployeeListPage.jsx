import Header from "../components/Header.jsx";
import EmployeeTable from "../components/Tables/Employee.jsx";

export default function EmployeeListPage() {
  return (
    <>
      <Header
        className={"container"}
        title="Current Employees"
        link={{
          url: "./index.html",
          description: "Back to Employee Creation",
        }}
      />
      <main className="container">
        <EmployeeTable />
      </main>
    </>
  );
}
//
