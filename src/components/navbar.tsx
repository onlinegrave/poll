export default function Navbar() {
  return <header className="shadow-lg shadow-gray-700 ">
    <div className="p-4">
      <div className="flex justify-evenly items-center">
        <div className="flex flex-1">
          <div className=" relative group transform-gpu cursor-pointer flex gap-1">
            <div>Open</div>
            <div>
              <div className="text-green-400 font-bold group-hover:text-white duration-500 text-3xl">Poll</div>
              <div className="absolute -z-10 rotate-[5512deg] group-hover:rotate-[12deg] bg-transparent group-hover:bg-green-400  right-0 bottom-0 top-[50%] w-[50%] h-[50%] group-hover:h-[70%] group-hover:w-[70%] left-[50%] group-hover:top-[20%] transition-all duration-500"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-1">
            <div>Go Pro</div>
            <div className="text-white bg-orange-500 px-1 font-bold rounded text-xs uppercase">NEW</div>
          </div>
          <div className="flex-1 text-center bg-green-500 text-white px-2 py-1 font-semibold">Create Poll</div>
        </div>
        <div className="flex-1 flex items-center justify-end gap-6">
          <div className="text-orange-400 font-semibold">Public Polls</div>
          <div className="dark:bg-white bg-black dark:text-white w-[2px] h-8"></div>
          <div className="flex gap-2 items-center">
            <div>Login</div>
            <div className="bg-blue-500 py-1 px-2 text-white ">Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  </header>;
}
