import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import Hero from "./components/Hero";

export default function App() {
  const cards = (
    <div className="flex flex-wrap px-3 py-12 justify-center gap-3 mt-20">
      {data.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
  return (
    <>
      <Navbar />
      <Hero />
      <div>{cards}</div>
    </>
  );
}
