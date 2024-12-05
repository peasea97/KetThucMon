import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <main>
        <ProductList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
