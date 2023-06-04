import React from "react";
import { notFound } from "next/navigation";
import { getPayloadClient } from "../../payload/payloadClient";

const Page = async () => {
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    where: {
      title: {
        equals: "home",
      },
    },
  });

  const page = posts.docs[0];

  if (!page) return notFound();

  return <h1>Hello, this is the &#39;{page.title}&#39; page!</h1>;
};

export default Page;
