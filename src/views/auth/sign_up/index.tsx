"use client";

import React from "react";
import fb from "../../../../public/images/shared/facebook_icon.png";
import google from "../../../../public/images/shared/google_icon.png";
import SocialSignIn from "@/components/buttons/social_media_sign_in";
import ControlledInput from "@/components/forms/input";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "@/components/forms/input/phone_input";
import Button from "@/components/buttons";
import { CustomCheckbox } from "@/components/forms/checkbox";
import Link from "next/link";
import { SignUpFormType, signUpSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUpView() {
  const { control, handleSubmit, formState: { errors }, } = useForm<SignUpFormType>({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = (data: SignUpFormType) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center py-8">
      <div className="bg-surface-base w-[44rem] h-[48rem] flex flex-col items-center pt-12 ">
        <h3 className="text-primary font-gendra font-normal text-2xl">
          Create your account
        </h3>
        <section className="space-y-4 mt-12">
          <SocialSignIn
            imageName={google}
            imageAlt="google_icon"
            socialName="Google"
          />
          <SocialSignIn
            imageName={fb}
            imageAlt="facebook_icon"
            socialName="Facebook"
          />
        </section>
        <p className="text-primary text-sm font-medium my-4 w-[22rem]">
          Or create with your email
        </p>
        <div className="w-[22rem]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <ControlledInput
              name="email"
              control={control}
              placeholder="Enter your Email"
              type="email"
              errors={errors}
            />
            <ControlledInput
              name="name"
              control={control}
              placeholder="Enter your Fullname"
              type="text"
            />
            <PhoneInput
              control={control}
              name="phone_number"
              codeName="country_code"
            />

            <ControlledInput
              name="password"
              control={control}
              placeholder="Create Password"
              type="password"
            />
            <p className="text-primary text-[0.6rem] text-center">
              Make sure to use mixed characters such as letters, signs and
              numbers
            </p>
            <Button type="submit" size={"block"}>
              Create a Free Account
            </Button>
            <Controller
              name="news"
              control={control}
              render={({ field }) => (
                <CustomCheckbox
                  checked={field.value ?? false}
                  onChange={field.onChange}
                  label="We will send you emails regarding our services, offers, competitions and carefully selected partners. These emails will always be sent by us and you can unsubscribe from receiving these marketing emails at any time."
                />
              )}
            />
            <Controller
              name="acceptTerms"
              control={control}
              render={({ field }) => (
                <CustomCheckbox
                  checked={field.value}
                  onChange={field.onChange}
                  label="I agree to the Terms of Use and Privacy Notice"
                />
              )}
            />
          </form>
        </div>
        <div className="mt-4 flex justify-between w-[22rem]">
          <p className="font-manrope text-sm font-bold text-primary">
            Already have an account ?
          </p>
          <Link href={"/"} className="font-manrope text-xs text-primary">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}
