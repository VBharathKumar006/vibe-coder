import Lookup from '@/data/Lookup';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function PricingModel() {
  
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
      {Lookup.PRICING_OPTIONS.map((pricing, index) => (
        <div
          className="flex flex-col gap-3 border rounded-xl p-7 justify-between"
          key={index}
        >
          <h2 className="font-bold text-4xl">{pricing.name}</h2>
          <h2 className="font-medium text-lg">{pricing.tokens} Tokens</h2>
          <p className="text-gray-400">{pricing.desc}</p>
          <h2 className="font-bold text-4xl text-center mt-6">
             Rs.{pricing.price}
          </h2>
          <Button >Upgrade to {pricing.name}</Button>
        </div>
      ))}
    </div>
  );
}

export default PricingModel;
