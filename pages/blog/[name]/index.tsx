import { useRouter } from "next/router";
import BlogPage from "@page-components/blog";

export default function Blog({}) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <BlogPage name={name as string} />
    </>
  );
}
