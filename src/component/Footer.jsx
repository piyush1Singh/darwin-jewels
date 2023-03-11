import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="pt-10 pt-lg-13 pb-8 footer text-light bg-cover" style={{backgroundImage: "url('images/bg-footer-01.jpg')"}}>
        <div class="container container-xl">
            <div class="row">
                <div class="col-lg-5 col-12 mb-8 mb-lg-0">
                    <h3 class="mb-4 text-light">Good emails.</h3>
                    <p class="mr-xl-17 mb-6 mb-lg-7">Enter your email below to be the first to know about new
                        collections and
                        product
                        launches.</p>
                    <form class="pr-xl-15">
                        <div class="input-group position-relative">
                            <input type="email" class="form-control rounded border-0 pr-10" placeholder="Enter your email address" />
                            <button type="submit" class="btn fs-29 text-secondary position-absolute pos-fixed-right-center px-4 py-0 h-100 lh-1 z-index-10">
                                <svg class="icon icon-long-arrow-right">
                                    <use href="#icon-long-arrow-right"></use>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-lg col-md-4 col-12 mb-7 mb-md-8 mb-lg-0">
                    <h3 class="fs-20 mb-3 text-light">Company</h3>
                    <p class="fs-14 lh-185 pr-xl-12">
                        Find a location nearest you. See <a class="text-light font-weight-600" href=""><u>Our
                                Stores</u></a>
                    </p>
                    <p class="fs-14 lh-185 mb-0"><strong>+391 (0)35 2568 4593</strong>
                        <br />
                        hello@domain.com
                    </p>
                </div>
                <div class="col-lg col-md-4  col-12 mb-7 mb-md-8 mb-lg-0">
                    <h3 class="fs-20 mb-3 text-light">Useful links</h3>
                    <ul class="list-unstyled mb-0">
                        <li class="pb-1"><a href="" class="text-light lh-175">New Products</a></li>
                        <li class="py-1"><a href="" class="text-light lh-175">Best Sellers</a></li>
                        <li class="py-1"><a href="" class="text-light lh-175">Bundle &amp; Save</a></li>
                        <li class="pt-1"><a href="" class="text-light lh-175">Online Gift Card</a></li>
                    </ul>
                </div>
                <div class="col-lg col-md-4 col-12 mb-7 mb-md-8 mb-lg-0">
                    <h3 class="fs-20 mb-3 text-light">Social Media</h3>
                    <ul class="list-inline fs-20 mb-0">
                        <li class="list-inline-item mr-5">
                            <a class="text-light" href=""><i class="fab fa-pinterest-p"></i></a>
                        </li>
                        <li class="list-inline-item mr-5">
                            <a class="text-light" href=""><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="list-inline-item mr-5">
                            <a class="text-light" href=""><i class="fab fa-instagram"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a class="text-light" href=""><i class="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row mt-0 mt-lg-14 align-items-center">
                <div class="col-12 col-md-6 col-lg-4">
                    <p class="mb-0">Copyright © 2023 DP Jewels. All Rights Reserved</p>
                </div>

            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
