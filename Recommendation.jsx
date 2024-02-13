// src/components/FishSpecies.js
import React from 'react';
import Gambar1 from './img/joran_kenzi.jfif';
import Gambar2 from './img/joran_blood.jfif';
import Gambar3 from './img/joran_nusantara.jfif';
import Gambar4 from './img/umpan_cacing.jfif';
import Gambar5 from './img/umpan_set.jfif';
import Gambar6 from './img/umpan_tianwang.jfif';
import Gambar7 from './img/firelock.jfif';
import Gambar8 from './img/rodbelt.jfif';
import Gambar9 from './img/aksesoris_kotak.jfif';
import './Recommendation.css'

const Recommendation = () => {
  return (
    <div>
      
      <h3 className="recommendationTitle">FISHING GEAR RECOMMENDATIONS</h3>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <div className="alatPancingContainer">
        <label className="labelPancing" htmlFor="alatPancing">Joran Kenzi</label>
        <img src={Gambar1} alt="Joran Kenzi"></img>
        <hr className="garisPemisah" />
        <p className="deskripsiPancing">
          <span className="ceklistSymbol">✓</span> price Rp. 304.000,-
        </p>
        <button className="buyNowButton" onClick={() => window.location.href = 'https://shopee.co.id/JORAN-KENZI-D.CORAL-602-Fuji-Guides-6-15lbs-8-17lbs-10-20lbs-Spinning-i.139055912.12774759540?sp_atk=98d0320c-3940-4b6f-a47c-201ea2bb1864&xptdk=98d0320c-3940-4b6f-a47c-201ea2bb1864'}>Beli Sekarang</button>
      </div>
        <div className="alatPancingContainer">
          <label className="labelPancing" for="alatPancing">Joran Blood</label>
          <img src={Gambar2} alt="Joran Blood"></img>
          <hr className="garisPemisah" />
          <p className="deskripsiPancing">
            <span className="ceklistSymbol">✓</span> price Rp. 260.000,-
          </p>
          <button className="buyNowButton" onClick={() => window.location.href = 'https://shopee.co.id/JORAN-BLOOD-SPHERE-180CM-FUJI-i.29482914.23183469857?sp_atk=9cba70a3-89cc-4674-99b4-85e173c362c2&xptdk=9cba70a3-89cc-4674-99b4-85e173c362c2'}>Beli Sekarang</button>
        </div>
        <div className="alatPancingContainer">
          <label className="labelPancing" for="alatPancing">Joran Relix</label>
          <img src={Gambar3} alt="Joran Nusantara"></img>
          <hr className="garisPemisah" />
          <p className="deskripsiPancing">
          <span className="ceklistSymbol">✓</span> price Rp. 368.000,-
          </p>
          <button className="buyNowButton" onClick={() => window.location.href = 'https://shopee.co.id/Joran-Relix-Nusantara-CAPUNG-662-UL-GEN-2-Free-Packing-Pipa-i.78608066.10650261871?sp_atk=b59a3409-2da4-4d35-b7ad-fa59b656dccb&xptdk=b59a3409-2da4-4d35-b7ad-fa59b656dccb'}>Beli Sekarang</button>
        </div>
      </div>

      <h3 className="recommendationTitle">BAIT RECOMMENDATION</h3>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <div className="alatPancingContainer">
        <label className="labelPancing" htmlFor="alatPancing">SONLINE</label>
        <img src={Gambar4} alt="Joran Kenzi"></img>
        <hr className="garisPemisah" />
        <p className="deskripsiPancing">
          <span className="ceklistSymbol">✓</span> price Rp. 4.896,-
        </p>
        <button className="buyNowButton" onClick={() => window.location.href = 'https://shopee.co.id/SONLINE-50pcs-3.5cm-Soft-Worm-Umpan-Cacing-Buatan-Soft-Bait-WormCacing-i.543605582.10682195380?sp_atk=88f042cf-a32a-427c-b126-98b20a3944d2&xptdk=88f042cf-a32a-427c-b126-98b20a3944d2'}>Beli Sekarang</button>
      </div>
        <div className="alatPancingContainer">
          <label className="labelPancing" for="alatPancing">Set Fishing</label>
          <img src={Gambar5} alt="Joran Blood"></img>
          <hr className="garisPemisah" />
          <p className="deskripsiPancing">
            <span className="ceklistSymbol">✓</span> Harga Rp. 165.700,-
          </p>
          <button className="buyNowButton" onClick={() => window.location.href = 'https://shopee.co.id/Umpan-Pancing-Ikan-Set-Fishing-Bait-Kit-45PCS-45PCS-91PCS-101PCS-109PCS-140PCS-DWS250-D-i.315766111.10272925701?sp_atk=f8637592-2438-4399-bcb3-c7e9ee19f171&xptdk=f8637592-2438-4399-bcb3-c7e9ee19f171'}>Beli Sekarang</button>
        </div>
        <div className="alatPancingContainer">
          <label className="labelPancing" for="alatPancing">TIANWANG</label>
          <img src={Gambar6} alt="Joran Nusantara"></img>
          <hr className="garisPemisah" />
          <p className="deskripsiPancing">
          <span className="ceklistSymbol">✓</span> Harga Rp. 5.600,-
          </p>
          <button className="buyNowButton" onClick={() => window.location.href = 'https://shopee.co.id/TIANWANG-Umpan-Pancing-Pelet-Ikan-Carp-Aroma-Rumput-YSF-1832-i.11059927.8021285488?sp_atk=8541707b-e46f-4654-b94f-408c8515cc00&xptdk=8541707b-e46f-4654-b94f-408c8515cc00'}>Beli Sekarang</button>
        </div>
      </div>

      <h3 className="recommendationTitle">ACCESSORIES RECOMMENDATIONS</h3>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <div className="alatPancingContainer">
        <label className="labelPancing" htmlFor="alatPancing">FIRELOCK ROLLING</label>
        <img src={Gambar7} alt="Joran Kenzi"></img>
        <hr className="garisPemisah" />
        <p className="deskripsiPancing">
          <span className="ceklistSymbol">✓</span> price Rp. 65.000,-
        </p>
        <button className="buyNowButton" onClick={() => window.location.href = 'https://shopee.co.id/FIRELOCK-ROLLING-JIG-BAG-TAS-PANCING-METAL-JIG-TAS-TEMPAT-METAL-JIG-GULUNG-TAS-TEMPAT-METAL-JIG-LIPAT-AKSESORIS-PANCING-JIG-BAG-ROLL-BUKAN-FIRECAST-BEST-SELLER-i.98345252.22735530511?sp_atk=4baf1bd7-a280-4ee6-a3c4-dfe276013263&xptdk=4baf1bd7-a280-4ee6-a3c4-dfe276013263'}>Beli Sekarang</button>
      </div>
        <div className="alatPancingContainer">
          <label className="labelPancing" for="alatPancing">ROD BELT</label>
          <img src={Gambar8} alt="Joran Blood"></img>
          <hr className="garisPemisah" />
          <p className="deskripsiPancing">
            <span className="ceklistSymbol">✓</span> Harga Rp. 12.300,-
          </p>
          <button className="buyNowButton" onClick={() => window.location.href = 'https://shopee.co.id/ROD-BELT-SLEMPANG-JORAN-PANCING-DA!WA-ABUGARC!A-RYOB!-DAN-SH*MANO-ini-ini-i.96169382.3255690411?sp_atk=e444425d-7c44-41c3-82bf-62f0a990a5c6&xptdk=e444425d-7c44-41c3-82bf-62f0a990a5c6'}>Beli Sekarang</button>
        </div>
        <div className="alatPancingContainer">
          <label className="labelPancing" for="alatPancing">FISHING BOX</label>
          <img src={Gambar9} alt="Joran Nusantara"></img>
          <hr className="garisPemisah" />
          <p className="deskripsiPancing">
          <span className="ceklistSymbol">✓</span> price Rp. 47.900,-
          </p>
          <button className="buyNowButton" onClick={() => window.location.href = 'https://shopee.co.id/KOTAK-PANCING-BOX-KAIL-PANCING-KOTAK-PANCING-KOTAK-PERKAKAS-KAIL-PANCING-AKSESORIS-PANCING-i.468717876.19883481976?sp_atk=9daaa714-61b6-468c-b86a-1c6549122ef2&xptdk=9daaa714-61b6-468c-b86a-1c6549122ef2'}>Beli Sekarang</button>
        </div>
      </div>
      
    </div>
  );
};

export default Recommendation;