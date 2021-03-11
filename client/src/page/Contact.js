import React from 'react'
import Breadcum from '../Component/Breadcum'

function Contact() {
    return (
        <div className="contact mt-4">
             <Breadcum title='Liên Hệ' breadcumList={['Home']}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.213122776765!2d106.80379001462408!3d10.94726744220575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d96466d97d31%3A0xf75ec4656d69f696!2zQ-G6p3UgSMOzYSBBbg!5e0!3m2!1svi!2s!4v1615383220826!5m2!1svi!2s"  height="450" style={{border:'0',width:'100%'}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="col-lg-12">
<section class="mb-4">

    <h2 class="h1-responsive font-weight-bold text-center my-4">Liên hệ với tôi</h2>
    <p class="text-center w-responsive mx-auto mb-5">Nếu như bạn có bất cứ thắc mắc nào đừng liên hệ với chúng tôi.</p>

    <div class="row">

        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-white">
                <a class="btn btn-primary">Send</a>
            </div>
            <div class="status"></div>
        </div>

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>131/19/21/49 tổ 19c ấp an hòa xã hóa TP biên hòa đồng nai</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 037752897</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>nguyenducdungg12@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
