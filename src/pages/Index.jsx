import { useLoaderData } from 'react-router-dom';
import Client from '../components/Client';

export function loader() {
  const clients = [
    {
      id: 1,
      name: 'Jose',
      phone: 102013313,
      email: 'Jose@Jose.com',
      company: 'coding with Jose',
    },
    {
      id: 2,
      name: 'Karen',
      phone: 138198313,
      email: 'karen@Jose.com',
      company: 'coding with Jose',
    },
    {
      id: 3,
      name: 'Josue',
      phone: 31983913,
      email: 'josue@Jose.com',
      company: 'coding with Jose',
    },
    {
      id: 4,
      name: 'Miguel',
      phone: 319381983,
      email: 'miguel@Jose.com',
      company: 'coding with Jose',
    },
    {
      id: 5,
      name: 'Pedro',
      phone: 1398198938,
      email: 'pedro@Jose.com',
      company: 'coding with Jose',
    },
  ];

  return clients;
}

const Index = () => {
  const clients = useLoaderData();

  console.log(clients);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your Customers</p>

      {clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Client</th>
              <th className="p-2">Contacts</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <Client key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No clients</p>
      )}
    </>
  );
};

export default Index;
