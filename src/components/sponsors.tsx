import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xs font-semibold tracking-tight sm:text-lg text-gh-text-secondary">
          SPONSORED BY
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://cdn.linkscape.app/vercel-logo.png"
            alt="Vercel"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://cdn.linkscape.app/figma-logo.png"
            alt="Figma"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://cdn.linkscape.app/1password-logo.png"
            alt="1Password"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://cdn.linkscape.app/twilio-logo.png"
            alt="Twilio"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
