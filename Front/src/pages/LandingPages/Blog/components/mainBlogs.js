import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/contract-fata-vanzare.jpg";
import Markdown from "./markdown";

function MainBlogs(props) {
  const { posts } = props;
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        {posts.map((post) => (
          <Grid container item>
            <MKBox
              width="100%"
              bgColor="white"
              borderRadius="xl"
              shadow="xl"
              mb={6}
              sx={{ overflow: "hidden" }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  position="relative"
                  px={0}
                  sx={{
                    backgroundImage: ({
                      palette: { gradients },
                      functions: { rgba, linearGradient },
                    }) =>
                      `${linearGradient(
                        rgba(gradients.dark.main, 0.8),
                        rgba(gradients.dark.state, 0.8)
                      )}, url(${bgImage})`,
                    backgroundSize: "cover",
                  }}
                >
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100%"
                  >
                    <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                      <MKTypography variant="h3" color="white" mb={1}>
                        Articole
                      </MKTypography>
                      <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                        din lumea masinilior
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <MKBox p={2}>
                    <MKBox pt={0.5} pb={3} px={3}>
                      <Grid container>
                        <Markdown className="markdown" key={post.substring(0, 40)}>
                          {post}
                        </Markdown>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        ))}
      </Container>
    </MKBox>
  );
}

MainBlogs.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainBlogs;
