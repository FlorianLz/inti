'use client';

import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import process from "process";

export default function Login({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<any>({
        supabaseUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
        supabaseKey: `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`,
    });


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
    };

    // this `session` is from the root loader - server-side
    // therefore, it can safely be used to conditionally render
    // SSR pages without issues with hydration
    return session ? (
        <>
            <span>{session.user.email}</span>
            <button onClick={handleLogout}>Logout</button>
        </>
    ) : (
        <>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </>
    );
}