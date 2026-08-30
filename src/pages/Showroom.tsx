import ProjectGallery from '../components/gallery/ProjectGallery';
import { useTranslations } from '../hooks/useTranslations';

const photos = [
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974408/pic7_alyg6i_qkoqqh_v7njhz.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956022/images/rehau4_uoykzd_mffdad.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974588/rolete_hsmxxh_bh4chs_rsaw17.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974697/homepage-products_lleo9h_igeogw_vqi2fw.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975250/images/pic1_kn4snv_ajd6bl_atb3bd.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975502/images/pic9_yu8kbg_azivvj_anr6lc.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975437/images/pic2_h5mmgj_a8efhh_prfwcx.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975333/images/pic3_dpnv0i_wmh9f2_ekwavo.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975553/images/pic8_qs4qtu_h76fbn_ypvndk.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956394/background1_zvpsvk.jpg',
];

const Showroom = () => {
  const { t, translations } = useTranslations();
  return (
    <ProjectGallery
      photos={photos}
      title={t(translations.common.showroom)}
      description={t(translations.redesign.showroom_gallery_intro)}
      photoAlt={number => t(translations.redesign.showroom_photo_alt, { number })}
    />
  );
};

export default Showroom;
