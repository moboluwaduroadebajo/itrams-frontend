import React from "react";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../assets/hero-image.png";

const HeroSection = () => {
  return (
    <div className="md:px-12">
      <div
        className="flex lg:flex-nowrap flex-wrap justify-between items-center md:px-16 px-4 gap-10
      ">
        <div className="lg:w-2/5 sm:w-2/3">
          <p className="font-inter md:text-4xl text-2xl font-bold mb-4">
            Electronic Industrial Training Management System
          </p>
          <p className="font-poppins text-base">
            e-ITrams is a platform designed to connect employers to students on
            IT and to mange logbook and paticipation
          </p>

          <div className="flex md:gap-6 gap-3 lg:mt-10 mt-6">
            <Link href="/signup">
              <Button
                label="Sign up"
                variant="primary"
                additionalClassname="md:w-[244px] w-[100px]"
              />
            </Link>

            <Link href="/signin">
              <Button
                label="Log in"
                variant="secondary"
                additionalClassname="md:w-[244px] w-[100px]"
              />
            </Link>
          </div>
        </div>

        <div className="md:block ">
          <Image src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
