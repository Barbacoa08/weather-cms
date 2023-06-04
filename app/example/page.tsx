import React from "react";
import { notFound } from "next/navigation";
import { getPayloadClient } from "../../payload/payloadClient";

interface PageProps {
  params: {
    title: string;
  };
}

const Page: React.FC<PageProps> = async () => {
  const payload = await getPayloadClient();
  console.log("ping start of example page");

  const posts = await payload.find({
    collection: "posts",
    // where: {
    //   title: {
    //     equals: title || "home",
    //   },
    // },
  });

  console.log(posts);

  const page = posts.docs[0];

  if (!page) return notFound();

  return <h1>Hello, this is the &#39;{page.title}&#39; page!</h1>;
  // return <div>ping</div>;
};

// export async function generateStaticParams() {
//   const payload = await getPayloadClient();

//   const pages = await payload.find({
//     collection: "posts",
//     limit: 0,
//   });

//   // console.log(pages);

//   return pages.docs.map(({ title }) => ({ title }));
// }

export default Page;
