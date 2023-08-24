import "./input.css";

import ProductList from "./components/Product-List/ProductList";

const dummieData = {
  statusCode: 200,
  body: {
    id: "1",
    name: "camiseta de mujer blanca",
    description: "camiseta blanca",
    metaTagDescription: "camiseta mujer blanca",
    isActive: true,
  },
};

export type DataProducts = typeof dummieData;

function App() {
  const getProducts = () => {
    //make logic for get products from the api

    console.log("click");
  };
  return (
    <>
      <div className="relative overflow-x-auto h-screen bg-black py-20 flex flex-col items-center">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-3xl  relative">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3">
                Meta tag
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductList data={dummieData} key={i} />
            ))}
          </tbody>
          <div
            className="shadow-lg rounded-md bg-green-500 transition-all  hover:bg-green-700 absolute right-0 mt-2"
            onClick={getProducts}
          >
            <button className="px-4 py-2  text-black/80 font-bold text-base ">
              Actualizar
            </button>
          </div>
        </table>
      </div>
    </>
  );
}

export default App;
