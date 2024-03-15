import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Career from '@/components/career/Career';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';

export default function Page({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  return (
    <>
      <Home locale={locale} />
      <About locale={locale} />
      <Career locale={locale} />
      <Skills locale={locale} />
      <Projects locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
