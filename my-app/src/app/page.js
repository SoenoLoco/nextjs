import Hero from "./components/Hero/Hero";
import Events from "./components/Events/Events";
import Promotions from "./components/Promotions/Promotions";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <Events />
      <Promotions />
      <Reviews />
    </div>
  );
}
