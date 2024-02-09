import { Alert, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";
import DefaultLayout from "@/components/DefaultLayout";

export default function Custom500() {
  return (
    <DefaultLayout className="h-3/5">
      <div className="h-[600px] flex justify-center items-center">
        <Alert>
          <RocketIcon className="h-6 w-6" />
          <AlertTitle className="m-2 font-bold text-4xl">
            OPS, desculpas!
          </AlertTitle>
          <AlertDescription className="font-bold text-xl">
            Erro no servidor
          </AlertDescription>
        </Alert>
      </div>
    </DefaultLayout>
  );
}
