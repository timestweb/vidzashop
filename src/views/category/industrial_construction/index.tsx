import ProductList from "@/components/card/product_list";
import LandingPageLayout from "@/views/landing_page/layout";
import React, { ReactNode } from "react";
import { promotedProducts } from "../../landing_page/promoted";
import Banner from "@/components/banner";
import SearchPanel from "@/components/search_panel";
import CustomBreadcrumb from "@/components/breadcrumb";
import Button from "@/components/buttons";
import { MdOutlineOfflineBolt } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Industrial Construction", href: "/category/construction" },
];

export default function IndustrialConstructionView() {
  return (
    <LandingPageLayout>
      <Banner
        content={
          <div className="absolute top-24 left-24 ">
            <SearchPanel />
          </div>
        }
      />
      <div className="px-8">
        <CustomBreadcrumb
          className="mt-8 w-full border-b border-surface-muted py-4"
          items={breadcrumbItems}
        />
      </div>
      <div className="mt-6 px-8 text-primary">
        <section>
          <h2 className="font-gendra text-lg">
            306 ads found in Industrial Construction
          </h2>
        </section>
        <div className="flex space-x-2">
          <QueryButton icon={<MdOutlineOfflineBolt />} text="Save and Search" />
          <QueryButton icon={<FaPlus />} text="Most recent first" />
        </div>
      </div>

      <div className="bg-white pb-20 mt-8">
        <ProductList products={promotedProducts} isRecommended={false} />
      </div>
    </LandingPageLayout>
  );
}

interface QueryButtonProps {
  icon: ReactNode;
  text: string;
}

function QueryButton(props: QueryButtonProps) {
  return (
    <Button className="bg-white border border-surface-cod px-8 flex space-x-2 text-xs text-primary">
      {props.icon}
      <span>{props.text}</span>
    </Button>
  );
}
