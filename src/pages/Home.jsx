import Banner from "../components/home_page_compo/Banner";
import ClientDelivary from "../components/home_page_compo/ClientDelivary";
import Products from "../components/home_page_compo/Products";

function Home() {
  return (
    <div className="flex flex-col gap-1">
      <Banner />
      <ClientDelivary />
      <Products />
    </div>
  );
}

export default Home;
