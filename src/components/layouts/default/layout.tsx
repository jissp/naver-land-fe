import Header from '@/src/components/layouts/default/header';
import { BgBoxStyled } from '@/src/components/layouts/default/styled/bg-box.styled';

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <BgBoxStyled>
                <Header></Header>
                <main>{children}</main>
            </BgBoxStyled>
        </>
    );
}