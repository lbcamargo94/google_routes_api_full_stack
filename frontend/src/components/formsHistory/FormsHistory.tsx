import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { historyStore } from "@/store/history";
import { Label } from "@radix-ui/react-label";
import { IoSearch } from "react-icons/io5";
import { driversStore } from "@/store/drivers";
import { errorStore } from "@/store/errorsStore";
import { successStore } from "@/store/successStore";
import { api } from "@/services/api";
import { customersStore } from "@/store/customers";

function FormsHistory() {
  const [search, setSearch] = useState<string>(" ");
  const [select, setSelect] = useState<string>(" ");

  const { driverList, driver } = driversStore();
  const { customer_id } = customersStore();
  const { setHistory } = historyStore();
  const { setError } = errorStore();
  const { setSuccess } = successStore();

  useEffect(() => {
    if (customer_id && driver) {
      handleRequestHistoryApi();
    }
  }, [customer_id, driver]);

  const handleRequestHistoryApi = async (): Promise<void> => {
    if (!customer_id && !search) {
      return setError({
        status: true,
        message: "O id do usuário está inválido.",
      });
    }

    if (!select) {
      return setError({
        status: true,
        message: "O id do motorista está inválido.",
      });
    }

    if (!driverList) {
      return setError({
        status: true,
        message: "O id do motorista está inválido.",
      });
    }

    const filterDriverId = driverList.find(
      (driver) => driver.id === Number(select)
    );

    const filterParams = filterDriverId?.id
      ? `?driver_id=${filterDriverId.id}`
      : "?driver_id=";

    const valid_customer_id = customer_id ? customer_id : search;

    await api
      .get(`/ride/${valid_customer_id}${filterParams}`)
      .then((response) => {
        if (response) {
          setSuccess({
            status: true,
            message: response.data.message,
          });

          setHistory(response.data.data.rides);
          return response.data;
        }
      })
      .catch((error) => {
        console.error(error);
        setError({
          status: true,
          message: error.response.data.message,
        });
        return error;
      });
  };

  return (
    <div className=" flex flex-col items-center align-middle w-full">
      <p className="text-md m-2 text-start">Informe um ID válido de usuário</p>
      <div className="flex w-full items-center align-middle space-x-2 m-2 p-2">
        <Label htmlFor="input-search" className="w-full">
          <Input
            id="input-search"
            type="email"
            placeholder="Digite um ID de usuário."
            className="w-full"
            value={search}
            onChange={({ target }) => {
              setSearch(target.value);
            }}
          />
        </Label>

        <Select
          onValueChange={(value) => {
            setSelect(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Motorista" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={" "}>Vazio</SelectItem>
            {driverList &&
              driverList.map((driver) => (
                <SelectItem key={driver.id} value={driver.id.toString()}>
                  {driver.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>

        <Button
          type="submit"
          className="bg-green-700 cursor-pointer w-[7.5rem] text-wrap"
          onClick={() => {
            console.log("CHEGUEi");

            handleRequestHistoryApi();
          }}
        >
          Pesquisar
          <IoSearch />
        </Button>
      </div>
    </div>
  );
}

export { FormsHistory };
