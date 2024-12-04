import React from 'react';

const Gallery = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((obj) => (
          <div className="col-md-4 col-sm-6 mb-4" key={obj.id}>
            <img
              src={`https://farm${obj.farm}.staticflickr.com/${obj.server}/${obj.id}_${obj.secret}_m.jpg`}
              alt=""
              className="img-fluid"
            />
            {/* src for loading the respective image */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
