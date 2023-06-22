'use client';

import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {supabaseAuthInfos} from "@/lib/supabaseClient";
import Image from "next/image";
import GoogleLogo from "@/public/Google_Logo.svg";
import Link from "next/link";
import {useRef, useState} from "react";
import {useRouter} from "next/navigation";

export default async function Register() {
    const router = useRouter();
    const fullNameRef = useRef<any>();
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const supabase = createClientComponentClient<any>(supabaseAuthInfos);

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

    const handleClassicRegister = async (e: any) => {
        e.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const {error, data} = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    "full_name": fullName
                }
            }
        })

        if (!error) {
            router.push("/")
        }
    }


    return (
        <div className="flex flex-col items-center justify-center gap-4 h-full w-full">
            <div className="w-full flex flex-col gap-8">
                <div className="w-full flex flex-col gap-4">
                    <h1 className="title-l">Inscription</h1>
                    <form className="w-full flex flex-col gap-4" onSubmit={handleClassicRegister}>
                        <input type="text" placeholder="Nom complet" ref={fullNameRef}
                               className="w-full py-2 px-3 ring-1 ring-neutral-900"/>
                        <input type="text" placeholder="Email" ref={emailRef}
                               className="w-full py-2 px-3 ring-1 ring-neutral-900"/>
                        <input type="password" placeholder="Mot de passe" ref={passwordRef}
                               className="w-full py-2 px-3 ring-1 ring-neutral-900"/>
                        <input type="submit"
                               value="S'inscrire" className="w-full button-primary cursor-pointer"/>
                    </form>
                </div>
                <hr/>
                <div className="flex flex-col gap-4">
                    <button onClick={handleGoogleLogin} className="button-neutral w-full">
                        <div className="flex items-center justify-center gap-4">
                            <Image src={GoogleLogo} alt="Google Logo" className="w-6 h-6"/>
                            <span className="text-sm font-medium">S&apos;inscrire avec Google</span>
                        </div>
                    </button>
                    <p className="text-xs text-center w-full">
                        Déjà un compte ? <Link href="/auth/login" className="underline">connectez vous ici</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}