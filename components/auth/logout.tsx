'use client';

import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import process from "process";
import { useRouter } from 'next/navigation';

export default function Logout() {
    const supabase = createClientComponentClient<any>({
        supabaseUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
        supabaseKey: `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`,
    });
    const router = useRouter()

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log({ error });
        }
        await router.push(`/`)
    };

    return <button onClick={handleLogout} className="button-neutral w-full">Logout</button>
}