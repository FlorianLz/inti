'use client';

import {getSession, signInWithGoogle} from "@/lib/supabaseClient";
import {MultiStepForm} from "@/components/MultiStepsForm";

export default function Home() {
  return (
      <main>
          <MultiStepForm/>
      </main>
  )
}
