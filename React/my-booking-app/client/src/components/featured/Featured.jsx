import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Featured.css";

const Featured = () => {
  const { data, loading, error, refetch } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,seattle"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="http://cdn.cnn.com/cnnnext/dam/assets/201230100452-10-2021-travel-destinations-hawaii-super-169.jpg"
              alt=""
            />
            <div className="featuredTitles">
              <h1>Hawail</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://www.bartush.com/wp-content/uploads/2019/11/Las-Vegas-Nevada-USA-at-the-304074673.jpg"
              alt=""
            />
            <div className="featuredTitles">
              <h1>Las Vegas</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://media.istockphoto.com/photos/times-square-in-new-york-city-picture-id523513953?k=20&m=523513953&s=612x612&w=0&h=8ZgiBpNeBh2CihG9RVlqbWunp5ODP45I0oiyKgDR-5Q="
              alt=""
            />
            <div className="featuredTitles">
              <h1>New York</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
