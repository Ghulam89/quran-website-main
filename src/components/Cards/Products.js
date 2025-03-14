import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
const Products = ({ productData }) => {
  return (
    <div>
      <div class="  pt-7 grid items-end md:grid-cols-2 mb-6">
        <div class="md:text-start text-center">
          <h5 class="font-semibold text-3xl leading-normal mb-4">
            Trending Items
          </h5>
          <p class="text-slate-400 max-w-xl">
            Shop the latest products from the most popular items
          </p>
        </div>
        <div class="md:text-end hidden md:block">
          <a class="text-slate-400 hover:text-orange-500" href="/shop-grid">
            See More Items <i class="mdi mdi-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
        {productData?.slice(0, 12)?.map(
          ({
            title,
            _id,
            description,
            oldPrice,
            price,
            image,
            brand,
            category,
            isNew,
          }) => (
            <div key={_id} className="group">
              <div className="relative overflow-hidden shadow  group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                <Image
                  src={image}
                  className="group-hover:scale-110 duration-500"
                  alt=""
                   width={400}
                   height={400}
                />
                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                  <a
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
                    href="/shop-cart"
                  >
                    Add to Cart
                  </a>
                </div>
                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                  <li>
                    <a
                      className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                      href="/index-fashion-two"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </li>
                  <li className="mt-1 ms-0">
                    <a
                      className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                      href="/shop-item-detail"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                    </a>
                  </li>
                  <li className="mt-1 ms-0">
                    <a
                      className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                      href="/index-fashion-two"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                <ul className="list-none absolute top-[10px] start-4" />
              </div>
              <div className="mt-4">
                <a
                  className="hover:text-orange-500 text-lg font-medium"
                  href="/product-detail-one/9"
                >
                  Trendy T-shirt
                </a>
                <div className="flex justify-between items-center mt-1">
                  <p>
                    $16.00 <del className="text-slate-400">$21.00</del>
                  </p>
                  <ul className="font-medium text-amber-400 flex  gap-2 list-none">
                    <li className="inline">
                    <FaStar  />
                    </li>
                    <li className="inline">
                    <FaStar/>
                    </li>
                    <li className="inline">
                    <FaStar/>
                    </li>
                    <li className="inline">
                    <FaStar/>
                    </li>
                    <li className="inline">
                    <FaStar/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
