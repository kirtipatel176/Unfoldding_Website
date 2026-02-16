import Hero from '@/components/Hero';
import Commandments from '@/components/Commandments';
import PortfolioGrid from '@/components/PortfolioGrid';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <Commandments />
            <PortfolioGrid />
            <Clients />
            <Contact />
        </>
    );
}
