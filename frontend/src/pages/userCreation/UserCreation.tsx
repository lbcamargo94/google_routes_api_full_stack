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

function UserCreation() {
  const { updateRides } = ridesStore();
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

  const handleCreateUser = async () => {
    try {
      const response = await api.post("/customer/create_customer", {
        name: customer.name,
        email: customer.email,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  const handleCreateEstimateRide = async () => {
    try {
      const response = await api.post("/ride/estimate", {
        customer_id: estimate_ride.customer_id,
        origin: estimate_ride.origin,
        destination: estimate_ride.destination,
      });
      console.log(response.data);
      if (typeof updateRides === "function") {
        updateRides();
      }
    } catch (error) {
      console.error("Erro ao criar estimativa de viagem:", error);
    }
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
                  onClick={() => handleCreateEstimateRide()}
                >
                  Estimar Viagem
                </Button>
              </CardFooter>
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
                    handleCreateUser();
                    setCustomer({
                      name: "",
                      email: "",
                    });
                  }}
                >
                  Criar Usuário
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
export { UserCreation };
