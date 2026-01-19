import React from 'react';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for exploring AI art generation.',
    features: [
      '50 image credits per month',
      'Standard resolution downloads',
      'Personal use only',
      'Community support',
    ],
    buttonText: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For creators who need more power and quality.',
    features: [
      '1,000 image credits per month',
      '4K Ultra-HD resolution',
      'Commercial usage rights',
      'Priority generation queue',
      'Private mode (images hidden)',
    ],
    buttonText: 'Upgrade to Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Scalable solutions for teams and businesses.',
    features: [
      'Unlimited image credits',
      'Custom model training',
      'API access',
      'Dedicated account manager',
      'SSO & Advanced Security',
    ],
    buttonText: 'Contact Sales',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="py-10 px-4 md:px-10 max-w-[1400px] mx-auto" id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your creative needs. Upgrade or cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl px-8 flex flex-col transition-all duration-500 relative h-full ${
              plan.highlighted
                ? 'bg-white border-2 border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-105 z-10 py-12'
                : 'bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-0 py-8'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap shadow-xl">
                Most Popular
              </div>
            )}
            
            <div className="mb-6 text-center">
              <h3 className="text-lg font-bold mb-1 text-gray-900">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-400 font-medium text-sm">/mo</span>}
              </div>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mx-auto">{plan.description}</p>
            </div>

            <div className="flex-grow mb-8">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">What&apos;s included</div>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className={`mt-0.5 rounded-full p-1 flex items-center justify-center ${plan.highlighted ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <FaCheck size={8} />
                    </div>
                    <span className="font-medium text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 transform active:scale-95 text-sm ${
                plan.highlighted
                  ? 'bg-black text-white hover:bg-gray-800 shadow-[0_10px_20px_rgba(0,0,0,0.2)]'
                  : 'bg-white text-black border border-gray-200 hover:border-gray-900 hover:shadow-lg'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;