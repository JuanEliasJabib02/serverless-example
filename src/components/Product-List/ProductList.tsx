import React from "react";
import { DataProducts } from "../../App";

const ProductList = ({ data }: { data: DataProducts }) => {
  const { id, description, isActive, metaTagDescription, name } = data.body;

  return (
    <tr className=" dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{metaTagDescription}</td>
      <td className="px-6 py-4">{isActive ? "Activo" : "Inactivo"}</td>
    </tr>
  );
};

export default ProductList;
