import Hero from '@/components/sections/Hero';
import Commandments from '@/components/sections/Commandments';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import Clients from '@/components/sections/Clients';
import Contact from '@/components/sections/Contact';

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
