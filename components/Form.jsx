import Spinner from "./Spinner";

export default function Form({ handlePost, setInput, input, isLoading, closeModal }) {
  return (
    <div className="bg-white p-5 rounded-xl mt-5">
      <h1 className="sm:text-lg text-base font-semibold">lagi mikirin apa?</h1>
      <textarea className="border-[1px] border-black p-2 w-full h-[90px] resize-none rounded-lg mt-2 outline-none sm:text-base text-sm" onChange={(e) => setInput(e.target.value)} value={input}></textarea>
      <div className="flex gap-2">
        <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-lg flex items-center gap-1 font-semibold" onClick={handlePost}>
          {isLoading && <Spinner width={30} height={30} />}
          Kirim
        </button>
        <button className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-lg flex items-center gap-1 font-semibold" id="container" onClick={closeModal}>
          Batal
        </button>
      </div>
    </div>
  );
}
