import React from "react";
import "../App.css";

export default function EquipList({ equip, deleteEquip }) {
  return (
    <div className="">
      {equip.map((equip, index) => (
        <div
          className="card bg-dark text-light text-center"
          style={{ width: "20em" }}
          key={index}
        >
          <p class="text-muted">ID: {equip.id}</p>
          <h4 class="card-title fw-bold">Item: {equip.item}</h4>
          <h6 class="card-subtitle mb-2">Category: {equip.category}</h6>
          <h6 class="card-subtitle mb-2">Manufacturer: {equip.manufacturer}</h6>

          <button
            className="bg-warning text-danger fw-bold"
            onClick={() => deleteEquip(equip.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
