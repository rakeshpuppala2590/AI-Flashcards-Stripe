import { loadStripe } from "@stripe/stripe-js";
let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXTJS_PUBLIC_STRIPE_PULIC_KEY);
  }
  return stripePromise;
};
export default getStripe;
