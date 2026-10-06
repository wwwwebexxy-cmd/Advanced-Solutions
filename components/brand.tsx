import Image from "next/image";

export function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand ${dark ? "brand-dark" : ""}`}>
      <Image
        className="brand-mark"
        src="/logo.png"
        alt="Advanced Solutions"
        width={44}
        height={44}
        priority
      />
      <span className="brand-copy">
        <strong>ADVANCED</strong>
        <small>SOLUTIONS</small>
      </span>
    </span>
  );
}
