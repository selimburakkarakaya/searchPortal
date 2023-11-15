import React from 'react'
import './footer.css'
import footerImage from '../../../assets/images/footerimg.png'

function Footer() {
  return (
    <footer>
      <div className="footerImage">
        <img src={footerImage} alt="footer" />
      </div>
      <div className="address">
        <address>
          <p>İletişim</p>
          <small>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul</small>
          <h6>Email: bilgi@tesodev.com</h6>
        </address>
      </div>
      <div className="map">
        <iframe title="titleFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48164.47615648012!2d28.890948000000005!3d41.019135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0!5e0!3m2!1str!2sus!4v1699494439187!5m2!1str!2sus" width="470" height="225" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  )
}

export default Footer