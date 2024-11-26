import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";
import { ridesStore } from "@/store/rides";
import { useState } from "react";
import { api } from "@/services/api";
import { ShowError } from "@/components/showError/ShowError";
import { errorStore } from "@/store/errorsStore";
import { successStore } from "@/store/successStore";
import { ShowSuccess } from "@/components/showSuccess/ShowSuccess";

function UserCreation() {
  const { setEstimate } = ridesStore();
  const { error, setError } = errorStore();
  const { success, setSuccess } = successStore();

  const [customer, setCustomer] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const [estimate_ride, setEstimateRide] = useState<{
    customer_id: string;
    origin: string;
    destination: string;
  }>({
    customer_id: "",
    origin: "",
    destination: "",
  });

  const handleCreateUser = async (
    name: string,
    email: string
  ): Promise<void> => {
    if (!name || name.length === 0) {
      return setError({ status: true, message: "O nome está inválido." });
    }

    if (!email || email.length === 0) {
      return setError({ status: true, message: "O email está inválido." });
    }

    await api
      .post("/customer/create_customer", {
        name,
        email,
      })
      .then((response) => {
        if (response.data) {
          setSuccess({
            status: true,
            message: "Novo usuário foi criado com sucesso",
          });
        }
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        setError({
          status: true,
          message: "Falha ao criar um novo usuário.",
        });
        return error;
      });
  };

  const handleCreateEstimateRide = async ({
    customer_id,
    origin,
    destination,
  }: {
    customer_id: string;
    origin: string;
    destination: string;
  }): Promise<void> => {
    await api
      .post("/ride/estimate", {
        customer_id,
        origin,
        destination,
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data.data);
          setEstimate(response.data.data);
          setSuccess({
            status: true,
            message: "Rota de viagem criada com sucesso",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setError({
          status: true,
          message: "Falha ao tentar estimar rota de viagem.",
        });
      });
  };

  return (
    <div className="w-full flex align-middle justify-start flex-col p-5 h-[550px]">
      <div className="text-lg font-medium">Escolha uma das abas</div>
      <div className="flex flex-col align-middle items-center	justify-center w-full mx-auto m-1">
        <Tabs
          defaultValue="rides"
          className="w-[400px] bg-green-600 rounded-md shadow-md border"
        >
          <TabsList className="flex rounded-t rounded-b-none justify-around">
            <TabsTrigger value="rides">Viagem</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
          </TabsList>
          <TabsContent value="rides" className="p-1 h-min-[400px]">
            <Card className="rounded-md ">
              <CardHeader>
                <CardTitle>Viagem</CardTitle>
                <CardDescription>Consulte sua viagem aqui.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="space-y-1">
                  <Label htmlFor="customer-id">ID de usuário</Label>
                  <Input
                    id="customer-id"
                    placeholder="digite o ID do usuário"
                    onChange={(prevEstimate) => {
                      setEstimateRide({
                        ...estimate_ride,
                        customer_id: prevEstimate.target.value,
                      });
                      console.log(estimate_ride);
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="origin">Endereço de Partida</Label>
                  <Input
                    id="origin"
                    placeholder="digite endereço de partida"
                    value={estimate_ride.origin}
                    onChange={(prevEstimate) => {
                      setEstimateRide({
                        ...estimate_ride,
                        origin: prevEstimate.target.value,
                      });
                      console.log(estimate_ride);
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="destination">Endereço de Destino</Label>
                  <Input
                    id="destination"
                    placeholder="digite endereço de destino"
                    value={estimate_ride.destination}
                    onChange={(prevEstimate) => {
                      setEstimateRide({
                        ...estimate_ride,
                        destination: prevEstimate.target.value,
                      });
                      console.log(estimate_ride);
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  className="bg-green-700"
                  onClick={() => {
                    handleCreateEstimateRide({
                      customer_id: estimate_ride.customer_id,
                      destination: estimate_ride.destination,
                      origin: estimate_ride.origin,
                    });
                    setEstimateRide({
                      customer_id: "",
                      origin: "",
                      destination: "",
                    });
                  }}
                >
                  Estimar Viagem
                </Button>
              </CardFooter>
              {error.status && <ShowError />}
              {success.status && <ShowSuccess />}
            </Card>
          </TabsContent>
          {/* CREATE NEW USERS */}
          <TabsContent value="users" className="p-1 h-min-[350px]">
            <Card className="rounded-md">
              <CardHeader>
                <CardTitle>Usuários</CardTitle>
                <CardDescription>Crie um novo usuário aqui.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <Label htmlFor="customer-name">Nome do usuário</Label>
                  <Input
                    id="customer-name"
                    placeholder="digite o nome do usuário"
                    value={customer.name}
                    onChange={(prevCustomer) => {
                      setCustomer({
                        ...customer,
                        name: prevCustomer.target.value,
                      });
                      console.log(customer);
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="customer-email">Email do usuário</Label>
                  <Input
                    id="customer-email"
                    placeholder="digite o email do usuário"
                    value={customer.email}
                    onChange={(prevCustomer) => {
                      setCustomer({
                        ...customer,
                        email: prevCustomer.target.value,
                      });
                      console.log(customer);
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-green-700"
                  onClick={() => {
                    handleCreateUser(customer.name, customer.email);
                    setCustomer({
                      name: "",
                      email: "",
                    });
                  }}
                >
                  Criar Usuário
                </Button>
              </CardFooter>
              {error.status && <ShowError />}
              {success.status && <ShowSuccess />}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
export { UserCreation };
