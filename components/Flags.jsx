import { BiCircle } from 'react-icons/bi';

import { Badge } from '@/components/ui/badge';

export default function Flags({ title, icon }) {
  return (
    <>
      {icon ? (
        <Badge>
          <BiCircle size={10} className="mr-2" /> {title}
        </Badge>
      ) : (
        <Badge variant="outline">{title}</Badge>
      )}
    </>
  );
}
