'use client';

import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import process from "process";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import GoogleLogo from "@/public/Google_Logo.svg"


export default function Login({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<any>({
        supabaseUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
        supabaseKey: `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`,
    });
    const router = useRouter()


    const handleGoogleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `http://localhost:3000/auth/callback`,
            }
        });

        if (error) {
            console.log({ error });
        }
    };

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log({ error });
        }
        await router.push(`/`)
    };

    // this `session` is from the root loader - server-side
    // therefore, it can safely be used to conditionally render
    // SSR pages without issues with hydration
    return <div className="flex flex-col items-center justify-center gap-4 h-full">
        {session ? (
            <>
                <button onClick={handleLogout} className="button-neutral w-full">Logout</button>
            </>
        ) : (
            <>
                <button onClick={handleGoogleLogin} className="button-neutral w-full">
                    <div className="flex items-center justify-center gap-4">
                        <Image src={GoogleLogo} alt="Google Logo" className="w-6 h-6"/>
                        <span className="text-sm font-medium">Se connecter avec Google</span>
                    </div>
                </button>
            </>
        )}
    </div>
}