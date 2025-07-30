import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { getOrdersFromLocal } from "../utils/localorder";


const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const user = getAuth().currentUser;
    if (!user) return;

    const storedOrders = getOrdersFromLocal(user.uid);
    setOrders(storedOrders);
  }, []);
  return (
        <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-8">
          {orders.map((order, index) => (
            <div key={index}>
              <p className="text-sm text-gray-500 dark:text-white mb-2">
                {new Date(order.timestamp).toLocaleString()}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {order.items.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="border p-2 rounded-lg bg-white dark:bg-neutral-700 shadow-sm"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-32 object-contain mb-2 rounded"
                    />
                    <p className="text-center font-semibold text-gray-800 dark:text-white">
                      ₹{item.price.toFixed()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders