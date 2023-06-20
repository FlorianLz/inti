'use client';

import {getSession, signInWithGoogle} from "@/lib/supabaseClient";
import {MultiStepForm} from "@/components/MultiStepsForm";

export default function Home() {
  return (
      <div className="h-screen py-4">
        <MultiStepForm/>
      </div>
  )
}
