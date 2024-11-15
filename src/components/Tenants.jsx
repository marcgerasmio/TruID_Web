import Sidebar from "./Sidebar.jsx";

const Tenants = () => {
  const myModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }
  };

  const openModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-mono">
        {/* Sidebar: hidden on small screens */}
        <Sidebar className="hidden lg:block" />

        <main className="flex-1 p-4 md:p-6 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
          <div className="mt-6">
            <div className="card bg-base-100 border shadow-md mt-4">
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="card-title text-xl md:text-2xl">
                      List of All Tenants
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                      Tenant List and their Details, Add Rents and Sanctions.
                    </p>
                  </div>

                  {/* Search input: responsive width */}
                  <label className="input input-bordered flex items-center gap-2 w-full md:w-1/2 lg:w-1/3">
                    <input
                      type="text"
                      placeholder="Search tenant..."
                      className="w-full grow"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>

                {/* Table: scrollable on smaller screens */}
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th>Stall ID</th>
                        <th>Tenant Name</th>
                        <th>Store</th>
                        <th>Department</th>
                        <th>Business Number</th>
                        <th>No. of Sanction</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12345</td>
                        <td>John Doe</td>
                        <td>Tabuan</td>
                        <td>Meat Department</td>
                        <td>54321</td>
                        <th>150</th>
                        <td className="flex gap-2">
                          <button
                            className="btn btn-primary btn-sm text-white"
                            onClick={myModal}
                          >
                            Add
                          </button>
                          <button
                            className="btn-error btn btn-sm text-white"
                            onClick={openModal}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Delete Confirmation Modal */}
      <dialog id="my_modal_3" className="modal font-mono">
        <div className="modal-box max-w-xs sm:max-w-md lg:max-w-lg">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Confirm Action</h3>
          <p className="py-4">
            Are you sure you want to delete employee John Doe?
          </p>
          <div className="flex justify-end content-end">
            <button className="btn btn-error text-white" onClick={closeModal}>
              Delete
            </button>
          </div>
        </div>
      </dialog>

      {/* Add Rent & Sanctions Modal */}
      <dialog id="my_modal_1" className="modal font-mono">
        <div className="modal-box max-w-xs sm:max-w-md lg:max-w-lg">
          <h3 className="font-bold text-lg">Rent Payment & Sanctions</h3>
          <div className="modal-action">
            <form className="w-full">
              <label className="form-control mb-2">
                <div className="label">
                  <span className="label-text">Rent Payment</span>
                </div>
                <input
                  type="number"
                  placeholder="Type here..."
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Sanction</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="input input-bordered"
                />
              </label>
              <div className="flex justify-end mt-5 gap-2">
                <button className="btn btn-primary text-white">Submit</button>
                <button
                  className="btn btn-error text-white"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Tenants;
