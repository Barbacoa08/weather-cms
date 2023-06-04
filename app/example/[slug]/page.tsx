import React from "react";
import { notFound } from "next/navigation";
import { getPayloadClient } from "../../../payload/payloadClient";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { slug } }: PageProps) => {
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    where: {
      title: {
        equals: slug || "home",
      },
    },
  });

  const page = posts.docs[0];

  if (!page) return notFound();

  return <h1>Hello, this is the &#39;{page.title}&#39; page!</h1>;
};

export async function generateStaticParams() {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: "posts",
    limit: 0,
  });

  return pages.docs.map(({ title }) => ({ slug: title }));
}

export default Page;
