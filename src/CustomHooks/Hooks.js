import { useState } from "react";

export function useCustomState() {
  //   const [arr, setArr] = useState([]);
  //   const [isClicked, setIsClicked] = useState(false);
  //   const [editMachine, setEditMachine] = useState("");
  //   const [attribute, setAttribute] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [machines, setMachines] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [stock, setStock] = useState("");
  const [weight, setWeight] = useState("");

  const [machineEdit, setMachineEdit] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editStock, setEditStock] = useState("");
  const [editWeight, setEditWeight] = useState("");

  const [searchMachine, setSearchMachine] = useState("");

  return {
    // arr,
    // setArr,
    // isClicked,
    // setIsClicked,
    // editMachine,
    // setEditMachine,
    // attribute,
    // setAttribute,
    showForm,
    setShowForm,
    machines,
    setMachines,
    name,
    setName,
    date,
    setDate,
    stock,
    setStock,
    weight,
    setWeight,

    machineEdit,
    setMachineEdit,
    editName,
    setEditName,
    editDate,
    setEditDate,
    editStock,
    setEditStock,
    editWeight,
    setEditWeight,

    searchMachine,
    setSearchMachine,
  };
}
