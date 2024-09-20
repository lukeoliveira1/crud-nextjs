import Client from "@/types/Client";
import { EditIcon, TrashIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.selectedClient || props.deletedClient;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.selectedClient ? (
          <button
            // pega o client do renderData e faz a ação da função que foi passada no props
            onClick={() => props.selectedClient?.(client)}
            className={`
                 flex justify-center items-center
                 text-green-600 rounded-full p-2 m-1    
                 hover:bg-purple-50 
                `}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}

        {props.deletedClient ? (
          <button
            // pega o client do renderData e faz a ação da função que foi passada no props
            onClick={() => props.deletedClient?.(client)}
            className={`
         flex justify-center items-center
         text-red-500 rounded-full p-2 m-1    
         hover:bg-purple-50 
        `}
          >
            {TrashIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.getId}
          className={`
        ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
        `}
        >
          <td className="text-left p-4">{client.getId}</td>
          <td className="text-left p-4">{client.getName}</td>
          <td className="text-left p-4">{client.getAge}</td>
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead
        className={`
        text-gray-100
        bg-gradient-to-r from-blue-500 to-purple-500
        `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
