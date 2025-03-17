import Footer from "./rootcomponents/footer";
import Main from "./rootcomponents/homepagecomponents/main";
import AnimatedHeading from '@/components/AnimatedHeading';

export default function Home() {
  return (
    <>
    <Main />
    <AnimatedHeading 
      words={['Toward', 'Explore', 'Discover']}
      restOfHeading="Native for More"
      subtitle="Empower the web community and invite more to build across platforms"
    />
    <Footer />
    </>
    
  );
}
