import Header from "../components/Header.jsx";

import EmployeeCreationForm from "../components/Forms/EmployeeCreation.jsx";

export default function HomePage() {
  return (
    <>
      <Header
        className={"container"}
        title="HRnet"
        link={{
          url: "./employee-list.html",
          description: "View Current Employees",
        }}
      />
      <main className="container">
        <EmployeeCreationForm className=" flow" />
      </main>
    </>
  );
}
