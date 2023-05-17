import React from "react";
import "../App.css";

export default function updateEquip({
  setEquipID,
  setUpdatedItem,
  setUpdatedCategory,
  setUpdatedManufacturer,
  updateEquip,
}) {
  return (
    <div className="bg-dark text-light">
      <form>
        <div>
          <h3 className="text-center">Update Equipment</h3>
        </div>
        <label>Item ID:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setEquipID(e.target.value)}
          placeholder="Enter Item ID"
        />
        <br></br>
        <label>Item Description:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setUpdatedItem(e.target.value)}
          placeholder="Update Item Description..."
        />
        <br></br>
        <label>Category:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setUpdatedCategory(e.target.value)}
          placeholder="Update Category..."
        />
        <br></br>
        <label>Manufacturer:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setUpdatedManufacturer(e.target.value)}
          placeholder="Update Manufacturer..."
        />
        <br></br>
        <div className="text-center">
          <button
            className="bg-warning text-danger fw-bold"
            type="submit"
            onClick={(e) => updateEquip(e)}
          >
            Update Equipment
          </button>
        </div>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}
