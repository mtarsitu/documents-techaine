import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./header";
import MainFeaturedPost from "./mainFeaturedPost";
import FeaturedPost from "./featuredPost";
import Main from "./main";
import Sidebar from "./sidebar";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import StickyButton from "../../stickyButton/stickyButton";
import { useEffect, useState } from "react";
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Contracte vanzare-cumparare fara completare",
  description:
    "Încărcați buletinele de identitate ale vânzătorului și cumpărătorului, precum și cartea de identitate a mașinii și într-un minut vă generăm un contract standard si perfect legal de vânzare-cumpărare. ",
  image: "/vanzare-cumparare2.jpg",
  imageText: "main image description",
  linkText: "Citeste in continuare..",
};

const featuredPosts = [
  {
    title: "Contract recunoscut de autoritati?",
    date: "Nov 12",
    description:
      "Desigur, contractul de vânzare-cumpărare auto este de tipul Model 2016 ITL 054 și este conform cu legislația română. Contractul nostru de vânzare-cumpărare auto este creat special pentru a oferi o experiență sigura, rapidă și ușoară pentru clienții noștri",
    image: "/vanzare-cumparare.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "Este securizat?",
    date: "Nov 11",
    description:
      "Da, nu păstrăm pozele actelor dumneavoastră, ci utilizăm doar un program de recunoaștere a textului numit OCR pentru a putea completa contractul de vânzare-cumpărare. După ce datele sunt citite, atât pozele, cât și datele pe care le obținem nu sunt reținute nicăieri.",
    image: "/vanzare-cumparare.jpg",
    imageLabel: "Image Text",
  },
];

const posts = [post1, post2, post3];
console.log(posts);
const sidebar = {
  title: "About",
  description:
    "Generatorul nostru de contracte auto este o soluție rapidă și ușoară pentru a genera contracte de vânzare-cumpărare auto personalizate în mai puțin de un minut. Încărcând fotografiile buletinelor de identitate ale vânzătorului și cumpărătorului, precum și a cărții de identitate a mașinii, putem folosi tehnologia OCR pentru a completa contractul cu toate datele necesare, astfel încât să fiți siguri că documentul este complet și conform cu legislația română. Este o alternativă convenabilă la procesul obișnuit de a merge la notariat sau agenție auto pentru a completa hârtiile necesare, economisind timp și energie fără a sacrifica siguranța și securitatea datelor personale.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};
const i = 0;
const theme = createTheme();

export default function Blog() {
  const [mainBlogs, setMainBlogs] = useState([]);
  const getPosts = async () => {
    posts.forEach(async (post, i) => {
      console.log(i);
      let response = await fetch(post);
      let data = await response.text();
      console.log(mainBlogs.includes(data));
      setMainBlogs((old) => [...old, data]);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="fullWidth" sx={{ marginTop: 10 }}>
        <StickyButton />
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {mainBlogs.length !== 0 && (
              <Main title="Articole noastre" posts={mainBlogs} />
            )}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
