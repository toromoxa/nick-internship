import React from "react";
import Skeleton from "./Skeleton";

const DetailSkeleton = () => {
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <Skeleton
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  width={600}
                  height={500}
                  borderRadius={6}
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                    <Skeleton width={225} height={36} borderRadius={4} /> #
                    <Skeleton width={75} height={36} borderRadius={4} />
                  </h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      <Skeleton width={42} height={12} borderRadius={4} />
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      <Skeleton width={42} height={12} borderRadius={4} />
                    </div>
                  </div>
                  <p>
                    <Skeleton width={550} height={16} borderRadius={4} />
                    <Skeleton width={550} height={16} borderRadius={4} />
                    <Skeleton width={550} height={16} borderRadius={4} />
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <div>
                            <Skeleton
                              className="lazy"
                              width={50}
                              height={50}
                              borderRadius={9999}
                            />
                            <i className="fa fa-check"></i>
                          </div>
                        </div>
                        <div className="author_list_info">
                          <div>
                          <Skeleton
                              className="lazy"
                              width={144}
                              height={16}
                              borderRadius={4}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                        <div>
                            <Skeleton
                              className="lazy"
                              width={50}
                              height={50}
                              borderRadius={9999}
                            />
                            <i className="fa fa-check"></i>
                          </div>
                        </div>
                        <div className="author_list_info">
                        <div>
                          <Skeleton
                              className="lazy"
                              width={144}
                              height={16}
                              borderRadius={4}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <Skeleton
                      width={25}
                      height={25}
                      borderRadius={9999} /> &nbsp;
                      <span><Skeleton 
                      width={65}
                      height={24}
                      borderRadius={4}/></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailSkeleton;
