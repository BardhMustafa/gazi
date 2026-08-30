import { useId, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import styled from 'styled-components';
import { useTranslations } from '../../hooks/useTranslations';
import { cloudinaryImage } from '../../utils/cloudinaryImage';

const imageSet = (src: string, widths: number[]) =>
  widths.map(width => `${cloudinaryImage(src, width)} ${width}w`).join(', ');

interface ProjectGalleryProps {
  photos: readonly string[];
  title: string;
  description: string;
  photoAlt: (number: number) => string;
}

const ProjectGallery = ({ photos, title, description, photoAlt }: ProjectGalleryProps) => {
  const { t, translations } = useTranslations();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const viewerTitleId = useId();

  const navigatePhoto = (direction: number) => {
    setSelectedIndex(current =>
      current === null ? null : (current + direction + photos.length) % photos.length
    );
  };

  const renderPhoto = (src: string, index: number, featured = false) => (
    <PhotoButton
      key={src}
      type="button"
      $featured={featured}
      onClick={() => setSelectedIndex(index)}
      aria-label={t(translations.redesign.gallery_open_photo, { number: index + 1 })}
    >
      <img
        src={cloudinaryImage(src, featured ? 1280 : 800)}
        srcSet={imageSet(src, featured ? [768, 1280, 1920] : [480, 800, 1200])}
        sizes={featured
          ? '(max-width: 1480px) 92vw, 1400px'
          : '(max-width: 640px) 92vw, (max-width: 1000px) 45vw, 450px'}
        alt={photoAlt(index + 1)}
        loading={featured ? 'eager' : 'lazy'}
        decoding="async"
      />
      <PhotoCaption aria-hidden="true">
        <span>{String(index + 1).padStart(2, '0')} <span>/ {photos.length}</span></span>
        <ExpandIcon><OpenInFullRoundedIcon fontSize="small" /></ExpandIcon>
      </PhotoCaption>
    </PhotoButton>
  );

  return (
    <Container>
      <GalleryHeader>
        <div>
          <Eyebrow>GAZI / {t(translations.common.projects)}</Eyebrow>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <PhotoCount>{t(translations.redesign.gallery_count, { count: photos.length })}</PhotoCount>
      </GalleryHeader>

      {photos[0] && renderPhoto(photos[0], 0, true)}

      <CollectionHeader>
        <p>{t(translations.redesign.gallery_hint)}</p>
        <span aria-hidden="true">01 — {String(photos.length).padStart(2, '0')}</span>
      </CollectionHeader>
      <GalleryGrid role="group" aria-label={title}>
        {photos.slice(1).map((src, index) => renderPhoto(src, index + 1))}
      </GalleryGrid>

      <Dialog
        fullScreen
        open={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        aria-labelledby={viewerTitleId}
        PaperProps={{ sx: { backgroundColor: '#0a2947', color: '#fff' } }}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            navigatePhoto(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
      >
        {selectedIndex !== null && (
          <Viewer>
            <ViewerHeader>
              <h2 id={viewerTitleId}>{title}</h2>
              <ViewerButton
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label={t(translations.redesign.gallery_close)}
              >
                <CloseRoundedIcon />
              </ViewerButton>
            </ViewerHeader>
            <ViewerImage
              key={photos[selectedIndex]}
              src={cloudinaryImage(photos[selectedIndex], 1920)}
              alt={photoAlt(selectedIndex + 1)}
              decoding="async"
            />
            <ViewerControls>
              <ViewerButton
                type="button"
                onClick={() => navigatePhoto(-1)}
                aria-label={t(translations.redesign.gallery_previous)}
              >
                <ArrowBackRoundedIcon />
              </ViewerButton>
              <p aria-live="polite" aria-atomic="true">
                {String(selectedIndex + 1).padStart(2, '0')}
                <span> / {photos.length}</span>
              </p>
              <ViewerButton
                type="button"
                onClick={() => navigatePhoto(1)}
                aria-label={t(translations.redesign.gallery_next)}
              >
                <ArrowForwardRoundedIcon />
              </ViewerButton>
            </ViewerControls>
          </Viewer>
        )}
      </Dialog>
    </Container>
  );
};

const Container = styled.div`
  padding: clamp(4rem, 6vw, 8rem) 0 clamp(5rem, 8vw, 10rem);
`;

const GalleryHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.4rem;
  margin-bottom: clamp(3rem, 5vw, 5rem);
  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Eyebrow = styled.p`
  color: #d42539;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: .15em;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

const Title = styled.h1`
  color: #113355;
  font-size: clamp(3.6rem, 6vw, 7rem);
  line-height: 1.08;
  letter-spacing: -.05em;
`;

const Description = styled.p`
  color: #647383;
  max-width: 62rem;
  font-size: 1.6rem;
  line-height: 1.8;
  margin-top: 2rem;
`;

const PhotoCount = styled.span`
  flex-shrink: 0;
  color: #113355;
  background: #f5f7f9;
  border: 1px solid #e5e9ed;
  border-radius: 10rem;
  padding: 1.2rem 2rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const PhotoButton = styled.button<{ $featured: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: ${({ $featured }) => $featured ? '2 / 1' : '4 / 3'};
  padding: 0;
  border: 0;
  border-radius: ${({ $featured }) => $featured ? '2.4rem' : '1.6rem'};
  overflow: hidden;
  background: #e5e9ed;
  cursor: pointer;
  color: white;
  text-align: left;
  img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 350ms ease;
  }
  &:hover img { transform: scale(1.035); }
  &:focus-visible { outline: 3px solid #d42539; outline-offset: 4px; }
  @media (max-width: 640px) { aspect-ratio: 4 / 3; }
  @media (prefers-reduced-motion: reduce) { img { transition: none; } }
`;

const PhotoCaption = styled.span`
  position: absolute;
  inset: auto 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem 2rem 2rem;
  background: linear-gradient(transparent, rgba(10, 41, 71, .78));
  font-size: 1.4rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  > span > span { opacity: .65; }
`;

const ExpandIcon = styled.span`
  display: grid;
  place-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border: 1px solid rgba(255,255,255,.5);
  border-radius: 50%;
`;

const CollectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 3rem 0 2rem;
  color: #647383;
  font-size: 1.3rem;
  line-height: 1.5;
  span { flex-shrink: 0; color: #113355; font-variant-numeric: tabular-nums; }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  @media (max-width: 1000px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 640px) { grid-template-columns: 1fr; gap: 1.6rem; }
`;

const Viewer = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 1.6rem;
  height: 100%;
  padding: clamp(1.6rem, 3vw, 3rem);
`;

const ViewerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); line-height: 1.3; }
`;

const ViewerImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: contain;
`;

const ViewerButton = styled.button`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 4.8rem;
  height: 4.8rem;
  padding: 0;
  border: 1px solid rgba(255,255,255,.3);
  border-radius: 50%;
  background: rgba(255,255,255,.08);
  color: white;
  cursor: pointer;
  svg { font-size: 2.4rem; }
  &:hover { background: #d42539; }
  &:focus-visible { outline: 2px solid white; outline-offset: 3px; }
`;

const ViewerControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-bottom: env(safe-area-inset-bottom);
  p { font-size: 1.5rem; font-variant-numeric: tabular-nums; min-width: 6rem; text-align: center; }
  span { color: rgba(255,255,255,.6); }
`;

export default ProjectGallery;
