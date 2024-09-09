import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExploreSkeleton from "../UI/ExploreSkeleton";

const AuthorItems = ({ authorData }) => {
  const [cardCollection, setCardCollection] = useState([]);
  const [authorImage, setAuthorImage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authorData && authorData.nftCollection) {
      setCardCollection(authorData.nftCollection);
    }

    setTimeout(() => {
      if (authorData && authorData.authorImage) {
        setAuthorImage(authorData.authorImage);
      }
      setLoading(false);
    }, 1500);
  }, [authorData]);

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading && (
            <>
              {Array(8)
                .fill(null)
                .map((_, index) => (
                  <ExploreSkeleton key={index} />
                ))}
            </>
          )}
          {!loading &&
            cardCollection.map((item) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                key={item.id}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="">
                      <img className="lazy" src={authorImage} alt="" />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-facebook fa-lg"></i>
                          </a>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-twitter fa-lg"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-envelope fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <Link to={`/item-details/${item.nftId}`}>
                      <img
                        src={item.nftImage}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft__item_info">
                    <Link to={`/item-details/${item.nftId}`}>
                      <h4>{item.title}</h4>
                    </Link>
                    <div className="nft__item_price">{item.price} ETH</div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
