import { successStore } from "@/store/successStore";
import { Button } from "../ui/button";

function ShowSuccess() {
  const { success, clearSuccess } = successStore();

  return (
    <span className="flex flex-row justify-between p-2 text-center align-middle bg-green-300">
      {success.message}
      <Button
        type="button"
        className="bg-green-600"
        onClick={() => clearSuccess({ status: false, message: "" })}
      >
        Ok
      </Button>
    </span>
  );
}

export { ShowSuccess };
