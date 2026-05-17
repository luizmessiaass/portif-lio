import Image from "next/image";

type StackLogo = {
  src: string;
  alt: string;
  color?: string;
  className?: string;
  multicolor?: boolean;
};

const stackLogos: Record<string, StackLogo> = {
  "next.js": { src: "/stack/nextdotjs.svg", alt: "Next.js", color: "#111111" },
  react: { src: "/stack/react.svg", alt: "React", color: "#61dafb" },
  typescript: { src: "/stack/typescript.svg", alt: "TypeScript", color: "#3178c6" },
  "node.js": { src: "/stack/nodedotjs.svg", alt: "Node.js", color: "#5fa04e" },
  "tailwind css": { src: "/stack/tailwindcss.svg", alt: "Tailwind CSS", color: "#06b6d4" },
  supabase: { src: "/stack/supabase.svg", alt: "Supabase", color: "#3ecf8e" },
  postgresql: { src: "/stack/postgresql.svg", alt: "PostgreSQL", color: "#4169e1" },
  prisma: { src: "/stack/prisma.svg", alt: "Prisma", color: "#2d3748" },
  claude: { src: "/stack/claude.svg", alt: "Claude", color: "#d97757" },
  "claude ai": { src: "/stack/claude.svg", alt: "Claude", color: "#d97757" },
  anthropic: { src: "/stack/anthropic.svg", alt: "Anthropic", color: "#111111" },
  "anthropic ai": { src: "/stack/anthropic.svg", alt: "Anthropic", color: "#111111" },
  langchain: { src: "/stack/langchain.svg", alt: "LangChain", color: "#1c3c3c" },
  vercel: { src: "/stack/vercel.svg", alt: "Vercel", color: "#111111" },
  pm2: { src: "/stack/pm2.svg", alt: "PM2", color: "#2b037a" },
  docker: { src: "/stack/docker.svg", alt: "Docker", color: "#2496ed" },
  wordpress: { src: "/stack/wordpress.svg", alt: "WordPress", color: "#21759b" },
  woocommerce: { src: "/stack/woocommerce.svg", alt: "WooCommerce", color: "#96588a" },
  bling: { src: "/stack/bling.svg", alt: "Bling", multicolor: true },
  "bling erp": { src: "/stack/bling.svg", alt: "Bling ERP", multicolor: true },
  nuvemshop: { src: "/stack/nuvemshop.png", alt: "Nuvemshop", className: "rounded-sm", multicolor: true },
  "nuvemshop api": { src: "/stack/nuvemshop.png", alt: "Nuvemshop", className: "rounded-sm", multicolor: true },
  shopee: { src: "/stack/shopee.svg", alt: "Shopee", color: "#ee4d2d" },
  "shopee api": { src: "/stack/shopee.svg", alt: "Shopee", color: "#ee4d2d" },
  "meta ads": { src: "/stack/meta.svg", alt: "Meta", color: "#0668e1" },
  "google ads": { src: "/stack/googleads.svg", alt: "Google Ads", color: "#4285f4" },
  ga4: { src: "/stack/googleanalytics.svg", alt: "Google Analytics", color: "#e37400" },
  vite: { src: "/stack/vite.svg", alt: "Vite", color: "#646cff" },
  express: { src: "/stack/express.svg", alt: "Express", color: "#111111" },
  railway: { src: "/stack/railway.svg", alt: "Railway", color: "#111111" },
  python: { src: "/stack/python.svg", alt: "Python", color: "#3776ab" },
  whatsapp: { src: "/stack/whatsapp.svg", alt: "WhatsApp", color: "#25d366" },
  resend: { src: "/stack/resend.svg", alt: "Resend", color: "#111111" },
  vitest: { src: "/stack/vitest.svg", alt: "Vitest", color: "#6e9f18" },
  "mercado pago": { src: "/stack/mercadopago.svg", alt: "Mercado Pago", color: "#00b1ea" },
  shopify: { src: "/stack/shopify.svg", alt: "Shopify", color: "#7ab55c" },
  openrouter: { src: "/stack/openrouter.svg", alt: "OpenRouter", color: "#111111" },
};

function normalizeStackLabel(label: string) {
  return label
    .toLowerCase()
    .replace(/\b(15|16|19)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveLogo(label: string) {
  const normalized = normalizeStackLabel(label);
  if (stackLogos[normalized]) return stackLogos[normalized];

  if (normalized.includes("postgresql") && normalized.includes("supabase")) {
    return stackLogos.supabase;
  }

  if (normalized.includes("openai") && normalized.includes("claude")) {
    return stackLogos.claude;
  }

  return undefined;
}

export function StackChip({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  const logo = resolveLogo(label);

  return (
    <span
      className={`inline-flex min-h-10 max-w-full items-center gap-2.5 rounded-full border !border-black/10 !bg-white px-3.5 py-1.5 font-general text-xs font-semibold !text-[#222] shadow-[0_10px_24px_rgba(0,0,0,.045)] ${className}`}
    >
      {logo ? (
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,.08)]">
          {logo.multicolor ? (
            <Image
              src={logo.src}
              alt=""
              width={22}
              height={22}
              className={`h-[22px] w-[22px] object-contain ${logo.className ?? ""}`}
              sizes="22px"
              unoptimized
            />
          ) : (
            <span
              aria-hidden="true"
              className="h-[21px] w-[21px] bg-current"
              style={{
                color: logo.color ?? "#111111",
                mask: `url(${logo.src}) center / contain no-repeat`,
                WebkitMask: `url(${logo.src}) center / contain no-repeat`,
              }}
            />
          )}
        </span>
      ) : null}
      <span className="truncate">{label}</span>
    </span>
  );
}
