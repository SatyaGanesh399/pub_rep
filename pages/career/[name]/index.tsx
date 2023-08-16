import { useRouter } from "next/router";
import CareerPage from "@page-components/career";

const Post = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <CareerPage name={name as string} />
    </>
  );
};

export default Post;
