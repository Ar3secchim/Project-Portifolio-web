import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import DefaultLayout from '@/components/DefaultLayout';
import { Alert, AlertTitle } from '@/components/ui/alert';

export default function Custom404() {
  return (
    <DefaultLayout className="h-3/5">
      <div className="h-[600px] flex justify-center items-center">
        <Alert>
          <ExclamationTriangleIcon className="h-6 w-6" />
          <AlertTitle className="m-2 font-bold text-4xl">
            Ops!! Not found page
          </AlertTitle>
        </Alert>
      </div>
    </DefaultLayout>
  );
}
