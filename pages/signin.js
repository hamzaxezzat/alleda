import Header from '../components/header';
import Footer from '../components/footer';

export default function signin() {
  const country = {
    flag: 'https://cdn.ipregistry.co/flags/emojitwo/de.svg',
    name: 'Germany',
  };
  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
  );
}
