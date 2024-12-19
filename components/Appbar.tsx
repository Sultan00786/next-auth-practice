"use client";

import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

function Appbar() {
   const routor = useRouter();
   return (
      <div>
         <div className="flex justify-between items-center px-4 py-2">
            <div className="text-2xl font-bold">Medium</div>
            <div className="flex gap-4">
               <div className="flex gap-4">
                  <div
                     onClick={() => {
                        signIn();
                     }}
                     className="bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer"
                  >
                     Sign In
                  </div>
                  <div
                     onClick={() => signOut()}
                     className="bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer"
                  >
                     Log Out
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Appbar;
