import Footer from "../components/Footer";
import Featured from "../components/Featured";
import Categories from "../components/Categories";
import BlogNavbar from "../components/BlogNavbar";
import ListedPages from "../components/ListedPages";
import "../styles/Featured.css";
function Blog() {
  return (
    <div className="BlogPage">
      <section className="heading">
        <BlogNavbar />
      </section>
      <div className="container_blogbody">
        <div className="container_sidebar">
          <section className="featured-posts">
            <Featured />
          </section>

          <section className="categories_container">
            <Categories />
          </section>
        </div>

        <section className="Pageslist">
          <ListedPages />
        </section>
      </div>

      {/* 
      <section className="search-bar">
        <SearchBar />
      </section>

      <section className="subscription">
        <SubscriptionForm />
      </section>

      <section className="about-author">
        <AboutAuthor />
      </section>

      <section className="recent-comments">
        <RecentComments />
      </section>

      <section className="social-media">
        <SocialMediaLinks />
      </section>

      <section className="call-to-action">
        <CallToAction />
      </section> */}

      {/* <Footer /> */}
    </div>
  );
}

export default Blog;
