import React from "react";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../assets/hero-image.png";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center px-16">
      <div className="w-2/5">
        <p className="font-inter text-4xl font-semibold mb-4">
          Electronic Industrial Training Management System
        </p>
        <p className="font-poppins text-base">
          e-ITrams is a platform designed to connect employers to students on IT
          and to mange logbook and paticipation
        </p>

        <div className="flex gap-6 mt-10">
          <Link href="/signup">
            <Button
              label="Sign up"
              variant="primary"
              additionalClassname="w-[244px]"
            />
          </Link>

          <Link href="/signin">
            <Button
              label="Log in"
              variant="secondary"
              additionalClassname="w-[244px]"
            />
          </Link>
        </div>
      </div>

      <div>
        <Image src={heroImage} alt="hero" className="" />
      </div>
    </div>
  );
};

export default HeroSection;
