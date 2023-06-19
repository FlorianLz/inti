'use client';

import {getSession, signInWithGoogle} from "@/lib/supabaseClient";

export default function Home() {
  return (
      <main>
        <button onClick={() => signInWithGoogle()}>Google</button>
      </main>
  )
}
