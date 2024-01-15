import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
import axios from "axios";
import { url } from "inspector";
import { categories } from "@/constants";
const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const res = await axios({
    method: "get",
    url: `http://api.mediastack.com/v1/news?access_key=a265c48fab503c6cbb4d7aeecd460109${
      category ? "&category=" + category : ""
    }${keywords ? "&keywords=" + keywords : ""}`,
  });

  const cure = sortNewsByImage(res?.data);

  return cure;
};

export default fetchNews;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
