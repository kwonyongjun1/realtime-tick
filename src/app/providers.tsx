"use client";

import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "var(--font-geist-sans)",
                    colorPrimary: "#1890ff",
                },
            }}
        >
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </ConfigProvider>
    );
}

