"use client";

import Image from "next/image";
import { Video, Ticket, Users, ArrowRight } from "lucide-react";

export default function EventCard({
  title,
  month, // e.g. "SEPT"
  day, // e.g. "10"
  venue, // e.g. "Google Meet"
  price, // e.g. "Free" or "N12,000"
  joinedLabel, // e.g. "149K Joined already"
  image, // image URL or /public path
  href = "#",
}) {
  return (
    <article className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_6px_20px_rgba(17,24,39,.08)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(17,24,39,.12)]">
      {/* Media */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={image}
          alt=""
          fill
          priority={false}
          className="object-cover"
          sizes="(max-width:768px) 100vw, 600px"
        />
      </div>

      {/* Content */}
      <div className="relative px-6 pb-5 pt-6">
        {/* Date pill */}
        <div
          aria-label={`${month} ${day}`}
          className="absolute -top-6 left-5 w-16 rounded-[14px] border border-slate-200 bg-white shadow-[0_3px_10px_rgba(15,23,42,.06)]"
        >
          <div className="rounded-t-[12px] bg-blue-100 py-1 text-center text-[12px] font-extrabold tracking-wide text-blue-600">
            {month}
          </div>
          <div className="pb-2 pt-1 text-center text-[22px] font-extrabold leading-none text-slate-900">
            {day}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 mt-1 text-[clamp(18px,2.1vw,24px)] font-extrabold leading-tight tracking-[-0.01em] text-slate-900">
          {title}
        </h3>

        {/* Meta */}
        <div className="grid gap-2.5 text-[15px] font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <Video className="h-[18px] w-[18px]" />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ticket className="h-[18px] w-[18px]" />
            <span>{price}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-[18px] w-[18px]" />
            <span>{joinedLabel}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={href}
          className="mt-3 inline-flex items-center gap-2 py-2 font-bold text-blue-600"
        >
          Register
          <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
