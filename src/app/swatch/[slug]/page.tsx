"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import colors from "@/assets/colors.json";

export default function SwatchDetailPage() {
    const { slug } = useParams();

    const color = colors.colors.find((c) => c.slug === slug);

    if (!color) {
        return <div>Color not found</div>;
    }

    return (
        <div
            style={{ backgroundColor: color.hex, minHeight: "100vh" }}
            className="flex flex-col items-center justify-center text-white"
        >
            <h1 className="text-3xl mb-4">{color.name}</h1>
            <p className="text-xl mb-4">Hex: {color.hex}</p>
            <div className="mt-4">
                <h2 className="text-2xl font-semibold mb-2">Color Combinations</h2>
                <ul>
                    {color.combinations?.map((combination, index) => (
                        <li key={index} className="mb-2">
                            <Link href={`/combinations/${combination}`} className="underline">
                                {combination}
                            </Link>
                        </li>
                    )) || <p>No combinations available.</p>}
                </ul>
            </div>
        </div>
    );
}