import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import EquipList from "./components/EquipList";
import NewEquip from "./components/NewEquip";
import UpdateEquip from "./components/UpdateEquip";

function App() {
  const API_URL =
    "https://64615a2d491f9402f4a32f8b.mockapi.io/CRUD-React-W15/equipmentlist";
  const [equip, setEquip] = useState([]);

  const [newItem, setNewItem] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newManufacturer, setNewManufacturer] = useState("");

  const [equipID, setEquipID] = useState("");
  const [updatedItem, setUpdatedItem] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [updatedManufacturer, setUpdatedManufacturer] = useState("");

  useEffect(() => {
    getEquip();
  }, []);

  function getEquip() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        setEquip(data);
        console.log(data);
      });
  }

  function deleteEquip(id) {
    fetch(API_URL + `/${id}`, {
      method: "DELETE",
    }).then(() => getEquip());
  }

  function addEquip(e) {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: newItem,
        category: newCategory,
        manufacturer: newManufacturer,
      }),
    }).then(() => getEquip());
  }

  function updateEquip(e) {
    e.preventDefault();

    fetch(`${API_URL}/${equipID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: updatedItem,
        category: updatedCategory,
        manufacturer: updatedManufacturer,
      }),
    }).then(() => getEquip());
  }

  return (
    <>
      <h1 className="bg-dark text-danger fw-bold text-center">
        Drum Equipment App
      </h1>
      <NewEquip
        setNewItem={setNewItem}
        setNewCategory={setNewCategory}
        setNewManufacturer={setNewManufacturer}
        addEquip={addEquip}
      />
      <UpdateEquip
        setEquipID={setEquipID}
        setUpdatedItem={setUpdatedItem}
        setUpdatedCategory={setUpdatedCategory}
        setUpdatedManufacturer={setUpdatedManufacturer}
        updateEquip={updateEquip}
      />
      <EquipList equip={equip} deleteEquip={deleteEquip} />
    </>
  );
}

export default App;
