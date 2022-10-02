import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const NewClient = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Fill in all fields to register a new client</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        <form>
          <Form />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer"
            value="save client"
          />
        </form>
      </div>
    </>
  );
};

export default NewClient;
