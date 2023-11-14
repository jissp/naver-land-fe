import Header from '@/src/components/layouts/default/header';

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
        </>
    );
}