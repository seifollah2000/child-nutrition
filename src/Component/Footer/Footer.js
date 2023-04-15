import React from 'react'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { IoLogoSnapchat } from 'react-icons/io'
import { SiInstagram } from 'react-icons/si'
export default function Footer() {
    return (

        <div class="footer-clean ">
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Legacy</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Careers</h3>
                            <ul>
                                <li><a href="#">Job openings</a></li>
                                <li><a href="#">Employee success</a></li>
                                <li><a href="#">Benefits</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 item social">
                            <a href="#">
                                <FaFacebookF />
                            </a>
                            <a href="#">
                                <BsTwitter />
                            </a>
                            <a href="#">
                                <IoLogoSnapchat />
                            </a>
                            <a href="#">
                                <SiInstagram />
                            </a>
                            <p class="copyright">Company Name © 2018</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
