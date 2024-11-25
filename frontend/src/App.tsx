import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TravelHistory } from "./pages/travelHistory/TravelHistory";
import { TravelOptions } from "./pages/travelOptions/TravelOptions";
import { UserCreation } from "./pages/userCreation/UserCreation";
import { Header } from "./components/header/Header";
import "./css/App.css";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <div className="app">
      <Header />
      <UserCreation />
      <TravelOptions />
      <TravelHistory />
    </div>
  </QueryClientProvider>
);

export default App;
