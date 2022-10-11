import React, { useEffect, useState } from "react";
import "../home/Home.css";
import SingleBlog from "../singleBlog/SingleBlog";
import LatesBlogs from "../latestBlogs/LatesBlogs";
import Categories from "../Categories/Categories";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../Footer/Footer";

function Home() {
	const [pBlogs, setPBlogs] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5004/Blogs")
			.then((res) => res.json())
			.then((data) => setPBlogs(data));
	}, []);
	return (
		<>
			<div className="Hero">
				<div className="Hero_content">
					<h6>Fishion</h6>
					<h1>Love Is Space and Time Measured by the Heart</h1>
					<p>
						Net to launch on the manufacturer’s new A330neo aircraft in 2017,
						it’s offering lots of extra space, including wider seats as
						standard, no control boxes under seats for the in-flight
						entertainment system, which means it’s all open for you to stretch
						your legs.
					</p>
				</div>
			</div>

			<div className="public_blogs">
				<div className="left">
					<div className="over_head">
						<h1>
							Top Stories/<b>sign up,,,sign in,,,explore</b>
						</h1>
						<div className="access">
							<button className="access_btn grey_btn">signUp</button>
							<button className="access_btn black_btn">singIn</button>
						</div>
					</div>
					{pBlogs.map((blog) => {
						return <SingleBlog key={blog.id} blog={blog} />;
					})}
				</div>

				<div className="sideContent">
					<div className="right">
						<div>
							<p className="latest_p">Latest Blogs</p>
							{pBlogs.map((blog) => {
								return <LatesBlogs key={blog.id} blog={blog} />;
							})}
						</div>

						<div>
							<p className="category_p">Categories</p>
							{pBlogs.map((blog) => {
								return <Categories key={blog.id} blog={blog} />;
							})}
						</div>

						<div>
							<p className="media_p">Find Us AT</p>
						<SocialMedia/>
						</div>
					</div>
				</div>
			</div>

           <Footer/>
		</>
	);
}

export default Home;
