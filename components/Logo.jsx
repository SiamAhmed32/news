import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          className="inline-block mr-2"
          width={50}
          height={50}
        />
        <h1 className="text-xl font-bold tracking-wider">The News Island</h1>
      </Link>
    </div>
  );
};

export default Logo;
