import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Career from '@/components/career/Career';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';

interface PageProps {
  params: {
    locale: string;
  };
}

export default function Page({ params: { locale } }: PageProps) {
  // Add Props {params: {locale}}

  return (
    <>
      <Home />
      <About />
      <Career />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
