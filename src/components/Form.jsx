const Form = ({ client }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Client's name"
          name="name"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="company">
          Company:
        </label>
        <input
          id="company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Company's name"
          name="company"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Client's email"
          name="email"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="phone">
          Phone:
        </label>
        <input
          id="phone"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Client's Phone"
          name="phone"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="notes">
          Notes:
        </label>
        <textarea
          as="textarea"
          id="notes"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Notes"
          name="notes"
        />
      </div>
    </>
  );
};

export default Form;
