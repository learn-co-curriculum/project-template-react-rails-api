function Home() {
  return (
    <>
      <div className="page-top-container">
        <img
          src={"/images/home-page-top.png"}
          className="page-top-image"
          alt="page top"
        />
      </div>
      <div className="page-title">
        <div className="page-title-text">Check out our recent events:</div>
      </div>
      <div className="container-fluid home-container">
        <div className="row home-row">
          <div className="col-sm-5 home-image-container">
            <img
              src="/images/volunteers-taking-selfie.jpg"
              className="home-image"
              alt="volunteers taking selfies"
            />
          </div>
          <div className="col-sm-7 home-text">
            <p className="home-text-title">Neighborhood Cleanup</p>
            <div>
              <br />
            </div>
            <p>
              It doesn't matter what comes, fresh goes better in life, with
              Mentos fresh and full of Life! Nothing gets to you, stayin' fresh,
              stayin' cool, with Mentos fresh and full of life! Fresh goes
              better! Mentos freshness! Fresh goes better with Mentos, fresh and
              full of life! Mentos! The Freshmaker!
              {/* <a href="#">Read more...</a> */}
            </p>
          </div>
        </div>
        <div className="row home-row">
          <div className="col-sm-7 home-text">
            <p className="home-text-title">Clothing Donation Drive</p>
            <div>
              <br />
            </div>
            <p>
              I am Adam, Prince of Eternia, Defender of the Secrets of Castle
              Greyskull. This is Kringer, my fearless friend. Fabulous, secret
              powers were revealed to me the day I held aloft my magic sword and
              said: "By the Power of Greyskull!" I have the power! Together we
              defend Castle Greyskull from the evil forces of Skeletor. He-man!{" "}
              {/* <a href="#">Read more...</a> */}
            </p>
          </div>
          <div className="col-sm-5 home-image-container">
            <img
              src="/images/clothes-donations.jpg"
              className="home-image"
              alt="clothing donation"
            />
          </div>
        </div>
        <div className="row home-row">
          <div className="col-sm-5 home-image-container">
            <img
              src="/images/plant-trees.jpg"
              className="home-image"
              alt="man with axe"
            />
          </div>
          <div className="col-sm-7 home-text">
            <p className="home-text-title">Woodworking for Kids</p>
            <div>
              <br />
            </div>
            <p>
              Butterfly in the sky, I can go twice as high. Take a look, it's in
              a book - Reading Rainbow. I can go anywhere! Friends to know and
              ways to grow - Reading Rainbow. I can be anything! Take a look,
              it's in a book - Reading Rainbow. Reading Rainbow, Reading
              Rainbow, Reading Rainbow, Reading Rainbow!{" "}
              {/* <a href="#">Read more...</a> */}
            </p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Home;
