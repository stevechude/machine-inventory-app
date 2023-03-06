import React, { useEffect } from "react";
import CreateMachine from "./components/CreateMachine";
import ListMachines from "./components/ListMachines";
import Navbar from "./components/Navbar";
import { useCustomState } from "./CustomHooks/Hooks";

function App() {
  const { machines, setMachines } = useCustomState();

  // A useEffect hook to retrieve and display all stored
  // machine data from Local Storage API.
  useEffect(() => {
    const temp = localStorage.getItem("machines");
    const storedMachines = JSON.parse(temp);

    if (storedMachines) {
      setMachines(storedMachines);
    }
  }, [setMachines]);

  // A useEffect hook to store all machine data in Local Storage
  useEffect(() => {
    const temp = JSON.stringify(machines);
    localStorage.setItem("machines", temp);
  }, [machines]);

  // Function to add a machine created
  const createMachine = (machine) => {
    setMachines([...machines, { machine }]);
  };

  // Function to delete a machine
  const deleteMachine = (name) => {
    const filteredMachines = machines.filter(({ machine }) => {
      return machine.name !== name;
    });
    setMachines(filteredMachines);
  };

  return (
    <>
      <Navbar />
      <CreateMachine onCreate={createMachine} />
      <ListMachines machines={machines} onDelete={deleteMachine} />
    </>
  );
}

export default App;
