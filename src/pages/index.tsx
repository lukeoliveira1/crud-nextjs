import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/types/Client";
import { useState } from "react";

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 23, "2"),
    new Client("Carlos", 18, "3"),
    new Client("Daniela", 27, "4"),
  ];

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }

  function deletedClient(client: Client) {
    console.log(client.getName);
  }

  function saveClient(client: Client) {
    console.log(client);
    setVisible("table");
  }

  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }

  return (
    <div
      className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout title="Cadastro Simples">
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newClient}>
                Novo cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            ></Table>
          </>
        ) : (
          <Form
            client={client}
            canceled={() => setVisible("table")}
            changedClient={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}
