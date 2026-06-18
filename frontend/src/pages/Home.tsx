import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getAllOrders } from "../api/order";
import OrderCard from "../components/OrderCard";

const Home = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getAllOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);
  return (
    <div className="flex py-8">
      <div className="text-center py-10 px-8 max">
        <h1 className="text-2xl mb-4 text-[#333]"> Welcome to ShopHub</h1>
        <p className="text-xl text-[#666] mb-8">Discover more at fair price</p>
      </div>
      <div className="max-w-[1200px] mx-auto px-8">
        <h1 className="">Our products</h1>

        <div className="product-grid">
          {orders.map((order) => (
            <OrderCard order={order} key={order.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
