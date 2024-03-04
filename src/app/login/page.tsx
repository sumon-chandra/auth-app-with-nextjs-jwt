import Link from "next/link";

const LoginPage = () => {
   return (
      <main className="flex items-center justify-center min-h-screen text-black">
         <div className="space-y-6 p-6 rounded-lg w-[400px] bg-slate-100">
            <header className="text-xl font-bold text-center border-b-2">Login</header>
            <form className="space-y-6">
               <div>
                  <label htmlFor="email" className="font-semibold text-lg">
                     Email
                  </label>
                  <input type="email" name="" id="email" className="w-full border p-2 border-black" />
               </div>
               <div>
                  <label htmlFor="password" className="font-semibold text-lg">
                     Password
                  </label>
                  <input type="password" name="" id="password" className="w-full border p-2 border-black" />
               </div>
               <button className="bg-black text-gray-300 font-bold w-full py-2 rounded-md">Login</button>
            </form>
            <div className="text-sm">
               <span>New to here? </span>
               <Link href="/" className="underline">
                  register please
               </Link>
            </div>
         </div>
      </main>
   );
};

export default LoginPage;
