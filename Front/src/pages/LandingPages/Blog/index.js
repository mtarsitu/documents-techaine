// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Author page sections
// import Posts from "pages/LandingPages/Author/sections/Posts";
// import Contact from "pages/LandingPages/Author/sections/Contact";

// Images
import bgImage from "assets/images/parc-auto-blog.jpg";
import { useEffect, useState } from "react";
import MainBlogs from "./components/mainBlogs";
import post1 from "./components/blog-post.1.md";
import post2 from "./components/blog-post.2.md";
import post3 from "./components/blog-post.3.md";

const posts = [post1, post2, post3];

function Blogs() {
  const [mainBlogs, setMainBlogs] = useState([]);
  const getPosts = async () => {
    posts.forEach(async (post) => {
      const response = await fetch(post);
      const data = await response.text();
      setMainBlogs((old) => [...old, data]);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKTypography variant="h3" mb={6}>
            Articole Auto-Completare Contracte
          </MKTypography>
        </Card>
        {mainBlogs.length !== 0 && <MainBlogs title="Articole noastre" posts={mainBlogs} />}
      </MKBox>
    </>
  );
}

export default Blogs;
