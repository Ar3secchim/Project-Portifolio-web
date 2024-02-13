import { Skeleton as SkeletonUI } from "../ui/skeleton";

export default function Skeleton() {
  return (
    <div className="flex flex-col gap-2">
      <SkeletonUI className="h-[125px] w-auto rounded-xl" />
      <div className="space-y-2">
        <SkeletonUI className="h-4 w-auto" />
        <SkeletonUI className="h-4 w-auto" />
      </div>
    </div>
  );
}
