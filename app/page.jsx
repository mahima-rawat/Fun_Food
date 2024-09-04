import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='orange_gradient head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='purple_gradient text-center'> Fun Cooking </span>
    </h1>
    <p className='desc text-center'>
      FunFood is an open-source AI prompting tool for modern world to
      discover, create and share Recipes.
    </p>

    <Feed />
  </section>
);

export default Home;
