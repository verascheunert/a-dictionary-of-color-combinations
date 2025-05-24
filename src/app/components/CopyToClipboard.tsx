"use client";

import { useState } from "react";

export default function CopyToClipboard({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <span
            onClick={handleCopy}
            className="cursor-pointer relative"
            style={{ position: "relative" }}
        >
            {text}
            {copied && (
                <span
                    className="text-black text-xs px-2 py-1 rounded"
                    style={{ transform: "translateY(-100%)" }}
                >
                    Copied!
                </span>
            )
            }
        </span >
    );
}