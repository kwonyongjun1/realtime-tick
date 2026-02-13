import HeaderBar from "@/components/main-page/HeaderBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-neutral-50">
            <HeaderBar />
            {children}
        </div>
    );
}