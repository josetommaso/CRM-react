import { useLoaderData } from 'react-router-dom';

export function loader() {
  const clients = [
    {
      id: 1,
      nombre: 'Jose',
      telefono: 102013313,
      email: 'Jose@Jose.com',
      empresa: 'coding with Jose',
    },
    {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: 'karen@Jose.com',
      empresa: 'coding with Jose',
    },
    {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: 'josue@Jose.com',
      empresa: 'coding with Jose',
    },
    {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: 'miguel@Jose.com',
      empresa: 'coding with Jose',
    },
    {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: 'pedro@Jose.com',
      empresa: 'coding with Jose',
    },
  ];

  return clients;
}

const Index = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your Customers</p>
    </>
  );
};

export default Index;
