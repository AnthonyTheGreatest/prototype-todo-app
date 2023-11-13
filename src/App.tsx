// const App = () => {
//   return (
//     <div className="grid grid-rows-18 grid-cols-3 gap-y-4 min-h-screen mx-4 bg-slate-200">
//       <header className="bg-green-200 flex justify-center items-center row-span-2 col-span-3">
//         <div className="flex-1"></div>
//         <div className="flex">
//           <p className="text-blue-500 font-bold">logo</p>
//           <p className="font-bold ml-2">app<span className="text-blue-500 font-bold">name</span></p>
//         </div>
//         <div className="flex justify-end flex-1 md:hidden">
//           <p className="mr-8">\/</p>
//         </div>
//         <nav className="flex hidden absolute md:visible md:static ">
//           <p>nav-1</p>
//           <p>nav-2</p>
//         </nav>
//       </header>
//       <main className="bg-yellow-200 row-span-14 col-span-3">
//         <div className="">
//           <p>title</p>
//           <p>input</p>
//           <p>button</p>
//           <p>button</p>
//         </div>
//         <div className="">
//           <div>
//             <p>checkbox</p>
//             <p>text</p>
//             <p>button</p>
//           </div>
//           <div>
//             <p>checkbox</p>
//             <p>text</p>
//             <p>button</p>
//           </div>
//           <div>
//             <p>checkbox</p>
//             <p>text</p>
//             <p>button</p>
//           </div>
//           <p>button</p>
//         </div>
//       </main>
//       <footer className="bg-blue-200 row-span-2 col-span-3">
//         <p>Footer</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <div className="grid grid-rows-[100px_minmax(0,_1fr)_50px] gap-y-4 min-h-screen bg-slate-200">
      <header className="grid justify-center items-center px-4 bg-slate-50 shadow-lg">
        <p>Header</p>
      </header>
      <main className="grid grid-rows-[200px_1fr] md:grid-rows-1 md:grid-cols-[1fr_2fr] gap-4 mx-4">
        <div className="grid grid-rows-3  bg-slate-50 rounded-3xl shadow-lg">
          <p className="justify-self-center self-center">New Todo</p>
          <p className="justify-self-center self-center p-2 border-slate-500 border-2">input + add button</p>
          <button className="bg-blue-500 text-white text-3xl px-3 py-1  justify-self-start self-end rounded-bl-3xl rounded-tr-xl">I'm bored ...</button>
        </div>
        <div className="grid grid-rows-[50px_1fr_50px] auto-rows-min pt-10 pb-3 bg-slate-50 rounded-3xl shadow-lg">
          <p className="justify-self-center">Todo List</p>
          <div className="px-10 mb-4">
            <p>a</p>
            <p>b</p>
            <p>c</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>a</p>
            <p>b</p>
            <p>c</p>
            <p>a</p>
            <p>b</p>
            <p>c</p>
            <p>a</p>
            <p>b</p>
            <p>c</p>
          </div>
          <button className="bg-blue-500 px-2 text-white text-3xl rounded-xl  self-center justify-self-center">Clear Todos</button>
        </div>
      </main>
      <footer className="grid px-4 bg-slate-50 shadow-lg">
        <p className="self-center">Footer</p>
      </footer>
    </div>
  );
};

export default App;
