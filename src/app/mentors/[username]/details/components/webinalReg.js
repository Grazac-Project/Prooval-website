import { MailOutline } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import Modal from "./modal";

function formatCurrency(amount, currency = "NGN") {
  try {
    return (
      new Intl.NumberFormat(undefined, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      })
        .format(amount)
        // Replace default currency code with symbol for NGN if needed
        .replace(/^NGN\s?/, "₦")
    );
  } catch (e) {
    // Fallback
    const prefix = currency === "NGN" ? "₦" : "$";
    return `${prefix}${amount.toLocaleString()}`;
  }
}

const WebinarModal = ({
  title,
  description,
  image,
  priceType,
  amount,
  currency,
  startsAt,
  dateBadgeMonth,
  dateBadgeDay,
  weekdayTimeLabel,
  time,
  action,
}) => {
  const [success, setSuccess] = useState(false);
  function useCountdown(targetDate) {
    const target = useMemo(() => {
      const t = new Date(targetDate).getTime();
      return Number.isFinite(t) ? t : NaN;
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(() =>
      Number.isFinite(target) ? Math.max(0, target - Date.now()) : 0
    );

    useEffect(() => {
      if (!Number.isFinite(target)) return;
      const id = setInterval(() => {
        setTimeLeft(Math.max(0, target - Date.now()));
      }, 1000);
      return () => clearInterval(id);
    }, [target]);

    if (!Number.isFinite(target)) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: true,
        invalid: true,
      };
    }

    const totalSeconds = Math.floor(timeLeft / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      finished: totalSeconds === 0,
      invalid: false,
    };
  }

  const { days, hours, seconds, finished, invalid } = useCountdown(startsAt);

  const amountLabel =
    priceType === "paid"
      ? formatCurrency(amount, currency)
      : String(priceType).toUpperCase();

  return (
    <div>
      <div
        className="bg-[#344054] opacity-[0.7] w-[100%] h-full fixed z-50 top-0 left-[0]"
        onClick={action}
      ></div>
      {success && <Modal close={action} />}
      <div className="max-w-[52rem] h-[90%] mx-auto mt-10 p-14 space-y-8 bg-[white] rounded-2xl fixed inset-0 z-50 overflow-y-auto ">
        <div className=" flex items-center text-sm leading-[150%] font-medium text-[#292D32] ">
          <button
            className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[10px] cursor-pointer"
            onClick={action}
          >
            <IoIosArrowRoundBack className="text-[16px] text-[#292D32]" />
          </button>
          <span className="text-2xl font-semibold ml-4">Back</span>
        </div>

        {/* Digital Products */}
        <div className="flex md:flex-wrap gap-[35px]">
          <div className="mt-8 lg:mt-0 w-1/2 md:w-full">
            <div className="overflow-hidden rounded-[6.5px]  shadow-sm">
              <img
                src={image}
                alt="Event poster"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6 ">
            <div className="pt-10 lg:pt-2 ">
              <h3 className="mb-2 font-semibold leading-[120%] text-[28px]  text-[#000000]">
                {title}
              </h3>
              <p className="mt-3 text-[#787878] text-[14px]">{description}</p>
            </div>

            {/* Amount */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-lg border border-[#EAEAEA] bg-[#FAFAFA] px-3 py-2 ">
                <span className=" bg-white px-2 py-1 text-xs font-medium text-[#333333]">
                  Amount:
                </span>
                <span className="text-[#333333] text-base">{amountLabel}</span>
              </span>
            </div>

            {/* Date & Time + Countdown */}
            <div className="flex md:flex-wrap gap-6">
              {/* Date & Time */}
              <div className=" ">
                <div className="text-xs font-medium text-[#333333]">
                  Date & Time
                </div>
                <div className="mt-3 flex items-center gap-4 p-2 rounded-lg bg-[#FAFAFA]">
                  {/* Badge */}

                  <div className=" rounded-[6px] px-[6px] py-1 w-[38px] h-[43px] shadow-md">
                    <div className=" bg-blue-100  text-center text-[10px] font-bold  text-primary">
                      {dateBadgeMonth}
                    </div>
                    <div className=" pt-1 text-center text-[14px] font-semibold leading-none text-[#000000]">
                      {dateBadgeDay}
                    </div>
                  </div>
                  <div className="flex flex-col text-[#292D32]  text-[14px] leading-[100%] -tracking-[0.5]">
                    <p className="font-normal">{weekdayTimeLabel}</p>
                    <p className="font-normal">{time}</p>
                  </div>
                </div>
              </div>

              {/* Starts In */}
              <div className="">
                <div className="text-xs font-medium text-[#333333]">
                  Starts In
                </div>
                {finished ? (
                  <div className="mt-3 text-green-700 font-semibold">
                    We're live now!
                  </div>
                ) : (
                  <div className="mt-3 flex items-center gap-[9px]">
                    <TimeBox value={days} label="DAYS" />
                    <span>:</span>
                    <TimeBox value={hours} label="HRS" />
                    <span>:</span>
                    {/* <TimeBox value={minutes} label="MINS" /> */}
                    <TimeBox value={seconds} label="SECS" />
                  </div>
                )}
              </div>
            </div>

            {/* Register form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const payload = Object.fromEntries(fd.entries());
                console.log("Register:", payload);
                alert(
                  `Thanks, ${
                    payload.fullname || "friend"
                  }! We'll email you at ${payload.email || "(no email)"}.`
                );
              }}
              className="mt-2 rounded-lg border border-[#EAEAEA] p-6 bg-[#FAFAFA] shadow-sm"
            >
              <div className="grid md:grid-cols-1 grid-cols-2 gap-4">
                <LabeledInput name="fullname" placeholder="Enter fullname" />
                <LabeledInput
                  name="email"
                  type="email"
                  placeholder="Enter address"
                />
              </div>
              <button
                type="submit"
                className="mt-4 md-w-full w-auto rounded-lg bg-primary px-4 py-1.5 text-[white] font-500 text-sm leading-5  shadow hover:bg-[#0d36cc] focus:outline-none"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarModal;

function TimeBox({ value, label }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-[#DCE5FF] p-[6px] py-3 w-[53px] shadow-sm">
      <div className="text-[16px]  font-semibold tabular-nums text-[#292D32] leading-[19.51px]">
        {padded}
      </div>
      <div className="mt-1 text-[8px] font-semibold leading-[100%] tracking-[2.44px] text-[#333333]">
        {label}
      </div>
    </div>
  );
}

function LabeledInput({ name, type = "text", placeholder, icon }) {
  return (
    <label className="group relative flex items-center gap-2 rounded-lg  border border-[#EAEAEA]  bg-[white] p-4 text-[#828282] focus-within:ring-2 focus-within:ring-slate-900/10">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border-0 bg-transparent p-0 text-sm placeholder:text-slate-400 focus:ring-0"
        required
      />
    </label>
  );
}
