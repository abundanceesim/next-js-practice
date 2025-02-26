"use client";
import { useRouter } from "next/navigation";

export default function About() {
    // assign return value from routing to this to a const
    const router = useRouter();
    return (
        <div>
            <h1>About Us</h1>
            <button onClick={() => router.push('/')} className="bg-blue-500 text-white p-2 rouded-md">Go Home</button>
        </div>
    );
}