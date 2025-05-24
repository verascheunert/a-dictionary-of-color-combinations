"use client";

import { useParams } from "next/navigation";
import colors from "@/assets/colors.json";
import CopyToClipboard from "@/app/components/CopyToClipboard";

export default function CombinationDetailPage() {
    const { slug } = useParams();

    const matchingCombinations = colors.colors.filter((color) =>
        color.combinations?.includes(Number(slug))
    );

    if (matchingCombinations.length === 0) {
        return <div>No colors found for this combination</div>;
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-black">
            <h1 className="text-3xl mb-4">Combination {slug}</h1>
            <div className="flex w-full h-[calc(100vh-8rem)]">
                {matchingCombinations.map((color, index) => (
                    <div
                        key={index}
                        style={{ backgroundColor: color.hex }}
                        className="flex flex-col flex-1 items-center justify-between text-black border"
                    >
                        <span className="text-lg font-bold mt-4">{color.name}</span>
                        <CopyToClipboard text={color.hex} />
                    </div>
                ))}
            </div>
        </div>
    );
}