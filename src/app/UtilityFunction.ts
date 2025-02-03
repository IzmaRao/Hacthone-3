import { client } from "@/sanity/lib/client";


export async function getData_Toppick_and_Related() {
  const fetchData = await client.fetch(`*[_type == "product"][0..3]`);
  return fetchData;
}


export async function getData_Asgard_Sofa(productId: number) {
    const fetchData = await client.fetch(`*[_type == "product" && id == ${productId}]`)
    return fetchData;
}

export async function getStaticProps() {
    const fetchData = await client.fetch(`*[_type == "product"]`)
    return fetchData;
  }
