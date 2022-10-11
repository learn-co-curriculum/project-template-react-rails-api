import React from "react";
import '../latestBlogs/LatesBlogs.css'

function LatesBlogs({ blog }) {
	return (
		<div className="sideInfo">
			<div className="left">
				<img src={blog.imgUrl} className="latestBlogsImg" alt="Blogpic" />
			</div>
			<div className="right">
				<h1 className="sideInfo_h1">{blog.title}</h1>
				<p className="sideInfo_p">
						by {blog.author} {blog.createdOn}
					</p>
			</div>
		</div>
	);
}

export default LatesBlogs;
