export default function Skeleton() {
  const componentCount = 4;
  return (
    <>
      {Array.from({ length: componentCount }).map((e, index) => (
        <div key={index} className="bg-slate-100 rounded-xl p-5 w-full mt-5">
          <div className="animate-pulse flex items-center space-x-4">
            <div className="rounded-full bg-slate-300 h-[40px] w-[40px]"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
