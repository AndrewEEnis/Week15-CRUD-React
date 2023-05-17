import React from "react";
import "../App.css";

export default function NewEquip({
  setNewItem,
  setNewCategory,
  setNewManufacturer,
  addEquip,
}) {
  return (
    <div className="bg-dark text-light">
      <form>
        <div>
          <br></br>
          <br></br>
          <h3 className="text-center">New Equipment</h3>
        </div>
        <label>Item:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter New Item Description"
        />
        <br></br>
        <label>Category:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Enter New Item Category"
        />
        <br></br>
        <label>Manufacturer:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setNewManufacturer(e.target.value)}
          placeholder="Enter New Item Manufacturer:"
        />
        <br></br>
        <div className="text-center">
          <button
            className="submit-button bg-warning text-danger fw-bold"
            type="submit"
            onClick={(e) => addEquip(e)}
          >
            Create New Equipment
          </button>
        </div>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}
