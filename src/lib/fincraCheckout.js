"use client";

import { useCallback, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";


export default function useFincraPayment(
  publicKeyFromEnv = process.env.NEXT_PUBLIC_FINCRA_KEY
) {
  const [loading, setLoading] = useState(false);

  const startPayment = useCallback(
    ({ price, currency = "NGN", ref, onClose, onSuccess } = {}) => {
      return new Promise((resolve, reject) => {
        // Guard: must be in the browser and SDK must be available
        if (typeof window === "undefined") {
          const err = new Error("Fincra can only run in the browser.");
          reject(err);
          return;
        }
        const fincra = window.Fincra;
        if (!fincra || typeof fincra.initialize !== "function") {
          const err = new Error("Fincra SDK not loaded. Include the script tag before calling.");
          reject(err);
          return;
        }

        const key = publicKeyFromEnv;
        if (!key) {
          const err = new Error("Public key missing. Set NEXT_PUBLIC_FINCRA_KEY or pass a key.");
          reject(err);
          return;
        }

        // Pull basic customer details from cookies (fail-safe)
        let firstName = "";
        let lastName = "";
        let email = "";
        try {
          const raw = Cookies.get("user_details");
          if (raw) {
            const details = JSON.parse(raw);
            firstName = details?.name || "";
            lastName = details?.lastName || "";
            email = details?.email || "";
          }
        } catch (_) {}

        setLoading(true);

        try {
          fincra.initialize({
            key,
            amount: Number(price),                       // ensure a number
            currency: String(currency || "NGN").toUpperCase(),
            customer: {
              name: `${firstName} ${lastName}`.trim(),
              email,
            },
            feeBearer: "customer",
            

            onClose: () => {
              setLoading(false);
              onClose?.();
              
            },
            onSuccess: (data) => {
              setLoading(false);
              onSuccess?.(data);
              resolve({ reference: ref, data });
            },
          });
        } catch (err) {
          setLoading(false);
          reject(err);
        }
      });
    },
    [publicKeyFromEnv]
  );

  return { startPayment, loading };
}
