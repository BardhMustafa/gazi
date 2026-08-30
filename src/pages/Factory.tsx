import ProjectGallery from '../components/gallery/ProjectGallery';
import { useTranslations } from '../hooks/useTranslations';

const photos = [
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977278/factory/Factory/_DSC0740_dcavyd.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977277/factory/Factory/pic1_xvhqbc.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977277/factory/Factory/_DSC0832_lmtxsb.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977274/factory/Factory/_DSC0774_ieeqaa.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977275/factory/Factory/_DSC0788_ppggrd.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977276/factory/Factory/_DSC0818_bjbjuc.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977273/factory/Factory/_DSC0769_ht0nw0.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977273/factory/Factory/_DSC0743_snfao1.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977269/factory/Factory/_DSC0706_gnaiac.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977269/factory/Factory/_DSC0709_vxe1yx.jpg',
];

const Factory = () => {
  const { t, translations } = useTranslations();
  return (
    <ProjectGallery
      photos={photos}
      title={t(translations.common['prod-sec'])}
      description={t(translations.redesign.factory_gallery_intro)}
      photoAlt={number => t(translations.redesign.gallery_photo_alt, { number })}
    />
  );
};

export default Factory;
