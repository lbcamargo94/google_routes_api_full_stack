import { errorStore } from "@/store/errorsStore";
import { Button } from "../ui/button";

function ShowError() {
  const { error, clearError } = errorStore();

  return (
    <span className="flex justify-around mx-auto p-2 bg-red-300 rounded-md text-center">
      {error.message}
      <Button
        type="button"
        className="bg-red-500"
        onClick={() => clearError({ status: false, message: "" })}
      >
        Ok
      </Button>
    </span>
  );
}

export { ShowError };
