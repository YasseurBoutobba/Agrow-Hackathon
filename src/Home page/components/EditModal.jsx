import React from "react";

const EditModal = ({ setOpenModal, selectedRole, setSelectedRole }) => {

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    onSubmit(selectedRole);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-60 flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[500px] min-h-max flex flex-col gap-6 justify-center py-10 px-6 rounded-xl">
        <h2 className="text-lg font-semibold">Select Your Role:</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 p-4 h-full"
        >
          <label className=" flex gap-4">
            <input
              type="radio"
              name="role"
              value="Farmer"
              checked={selectedRole === "Farmer"}
              onChange={handleRoleChange}
            />
            Farmer
          </label>
          <label className=" flex gap-4">
            <input
              type="radio"
              name="role"
              value="Agronomist"
              checked={selectedRole === "Agronomist"}
              onChange={handleRoleChange}
            />
            Agronomist
          </label>
          <label className=" flex gap-4">
            <input
              type="radio"
              name="role"
              value="Sponsor"
              checked={selectedRole === "Sponsor"}
              onChange={handleRoleChange}
            />
            Sponsor
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
