import { useState } from "react";
import Input from "./Input";
import Client from "@/types/Client";
import Button from "./Button";

interface FormProps {
  client?: Client;
  canceled?: () => void;
  changedClient?: (client: Client) => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.getId;
  const [name, setName] = useState(props.client?.getName ?? "");
  const [age, setAge] = useState(props.client?.getAge ?? 0);

  return (
    <div>
      {id ? <Input text="Código" value={id} readOnly /> : false}
      <Input text="Nome" value={name} onChange={setName} className="mb-2" />
      <Input
        type="number"
        text="Idade"
        value={age}
        onChange={setAge}
        className="mb-2"
      />

      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          // ?. se o valor tiver sido informado, chama a função changedClient
          onClick={() => props.changedClient?.(new Client(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={props.canceled}>Cancelar</Button>
      </div>
    </div>
  );
}
