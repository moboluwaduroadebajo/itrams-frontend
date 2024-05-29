import React from "react";
import Button from "../Button";
import Link from "next/link";

const JoinTrain = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-joinTrain bg-center bg-no-repeat m-auto h-[70vh] my-10">
      <div className="flex justify-center items-center gap-9">
        <div className="w-[305px] flex flex-col gap-4 font-poppins">
          <p className="font-bold text-2xl">Join the train now!</p>
          <p className=" text-base">
            Are you an employee or a student? <br /> Login and sign up for free
            on e-itrams
          </p>
        </div>

        <div>
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
              additionalClassname="md:w-[244px] w-[100px] mt-4_!important"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinTrain;
