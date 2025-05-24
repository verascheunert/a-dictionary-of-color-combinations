"use client";

import Link from "next/link";
import colors from "@/assets/colors.json";
import { useState } from "react";

export default function CombinationList() {
    const [sortNumerically, setSortNumerically] = useState(false);

    const uniqueCombinations = Array.from(
        new Set(colors.colors.flatMap((color) => color.combinations || []))
    );

    const sortedCombinations = sortNumerically
        ? [...uniqueCombinations].sort((a, b) => a - b)
        : uniqueCombinations;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="flex items-center justify-between w-full max-w-4xl mb-4">
                <h1 className="text-3xl">Combination List</h1>
                <button
                    className="text-sm underline"
                    onClick={() => setSortNumerically(!sortNumerically)}
                >
                    {sortNumerically ? "Sort by Color" : "Sort Numerically"}
                </button>
            </div>
            <div className="w-full max-w-4xl">
                {sortedCombinations.map((combination) => (
                    <Link
                        key={combination}
                        href={`/combinations/${combination}`}>
                        <div key={combination} className="w-full mb-4 relative">
                            <div className="absolute text-lg font-bold left-4 top-1/2 transform -translate-y-1/2 z-10">
                                {combination}
                            </div>
                            <div className="flex w-full">
                                {colors.colors
                                    .filter((color) => color.combinations?.includes(combination))
                                    .map((color, index) => (
                                        <div
                                            key={index}
                                            style={{ backgroundColor: color.hex, flex: 1, height: 64 }}
                                        ></div>
                                    ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}