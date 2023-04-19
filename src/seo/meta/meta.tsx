import Head from "next/head";
import React from "react";
import { MetaProps } from "./model";

const Meta: React.FC<MetaProps> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={title} key="title" property="og:title" />
      </Head>
    </div>
  );
};

export default Meta;
