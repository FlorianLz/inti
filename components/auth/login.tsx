'use client';

import {Session, createClientComponentClient} from '@supabase/auth-helpers-nextjs';
import process from "process";
import {useRouter} from 'next/navigation';
import Image from "next/image";
import GoogleLogo from "@/public/Google_Logo.svg"
import Link from "next/link";
import {MouseEventHandler, useState} from "react";
import {set} from "zod";


export default function Login({session}: { session: Session | null }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const supabase = createClientComponentClient<any>({
        supabaseUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
        supabaseKey: `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`,
    });
    const router = useRouter()

    const handleGoogleLogin = async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `http://localhost:3000/auth/callback`,
            }
        });

        if (error) {
            console.log({error});
        }
    };

    const handleClassicLogin = async () => {
        const {error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="title-l">Connexion</h1>
                    <div className="w-full flex flex-col gap-4">
                        <input type="text" placeholder="Email"
                               onChange={(e) => setEmail(e.target.value)}
                               className="w-full py-2 px-3 ring-1 ring-neutral-900"/>
                        <input type="password" placeholder="Mot de passe"
                               onChange={(e) => setPassword(e.target.value)}
                               className="w-full py-2 px-3 ring-1 ring-neutral-900"/>
                        <input type="submit" value="Se connecter"
                               onClick={handleClassicLogin}
                               className="w-full button-primary cursor-pointer"/>
                    </div>
                </div>
                <hr/>
                <div className="flex flex-col gap-4">
                    <button onClick={handleGoogleLogin} className="button-neutral w-full">
                        <div className="flex items-center justify-center gap-4">
                            <Image src={GoogleLogo} alt="Google Logo" className="w-6 h-6"/>
                            <span className="text-sm font-medium">Se connecter avec Google</span>
                        </div>
                    </button>
                    <p className="text-xs text-center w-full">
                        Pas encore de compte ? <Link href="/auth/register" className="underline">inscrivez vous
                        ici</Link>
                    </p>
                </div>
            </div>
        </div>)
}