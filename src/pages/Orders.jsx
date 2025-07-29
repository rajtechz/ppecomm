import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

const Orders = () => {
  // Sample orders data
  const orders = [
    {
      id: '46199271460087',
      date: '14 January, 2022',
      totalAmount: '$499',
      status: 'Pending',
      statusIcon: Clock,
      statusColor: 'text-yellow-600',
      products: [
        {
          id: 1,
          name: 'Apple Watch Series 7',
          variant: 'Golden',
          price: '$359',
          image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&h=100&fit=crop&crop=center'
        }
      ]
    },
    {
      id: '46199271460088',
      date: '10 January, 2022',
      totalAmount: '$299',
      status: 'Delivered',
      statusIcon: CheckCircle,
      statusColor: 'text-green-600',
      products: [
        {
          id: 2,
          name: 'Beylob 90 Speaker',
          variant: 'Space Gray',
          price: '$49',
          image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop&crop=center'
        }
      ]
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">Order Details</h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)]">Check the status of recent and old orders & discover more products.</p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {orders.map((order) => {
          const StatusIcon = order.statusIcon;
          return (
            <div key={order.id} className="bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-lg p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Left Panel - Order Summary */}
                <div className="lg:col-span-1 space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-xs sm:text-sm text-[var(--text-secondary)]">Order ID</span>
                    <p className="font-bold text-[var(--text-primary)] text-sm sm:text-base">#{order.id}</p>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-[var(--text-secondary)]">Date</span>
                    <p className="text-[var(--text-primary)] text-sm sm:text-base">{order.date}</p>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-[var(--text-secondary)]">Total Amount</span>
                    <p className="font-bold text-[var(--text-primary)] text-sm sm:text-base">{order.totalAmount}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <StatusIcon size={16} className={order.statusColor} />
                    <span className={`font-medium text-sm sm:text-base ${order.statusColor}`}>{order.status}</span>
                  </div>
                </div>

                {/* Right Panel - Product Details */}
                <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                  {order.products.map((product) => (
                    <div key={product.id} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 border border-[var(--border-light)] rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-[var(--text-primary)] mb-1 text-sm sm:text-base truncate">{product.name}</h4>
                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-1">{product.variant}</p>
                        <p className="font-bold text-[var(--text-primary)] text-sm sm:text-base">{product.price}</p>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2 space-y-1 sm:space-y-0">
                          <button className="text-xs sm:text-sm text-[var(--primary-color)] hover:underline text-left">View Product</button>
                          <button className="text-xs sm:text-sm text-[var(--primary-color)] hover:underline text-left">Similar Product</button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-3 sm:pt-4">
                    <button className="px-4 sm:px-6 py-2 border border-[var(--border-medium)] rounded-lg text-[var(--text-primary)] hover:bg-[var(--gray-50)] transition-colors duration-200 text-sm sm:text-base">
                      View Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;