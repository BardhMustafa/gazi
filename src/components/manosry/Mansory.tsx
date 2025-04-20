import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

interface ItemProps {
  src: string;
}

const StyledItem = styled(Paper)<ItemProps>(({ theme, src }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundImage: `url(${src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[8],
    '& .overlay': {
      opacity: 1,
    },
  },
}));

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
});

const ModalContent = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vw',
  maxHeight: '90vh',
  outline: 'none',
  '& img': {
    maxWidth: '100%',
    maxHeight: '90vh',
    objectFit: 'contain',
  },
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  right: -40,
  top: -40,
  color: 'white',
});

export default function Mansory({
  heights,
  pics,
}: {
  heights: number[];
  pics: string[];
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (src: string) => setSelectedImage(src);
  const handleClose = () => setSelectedImage(null);

  return (
    <Box sx={{ width: '100%', minHeight: 829 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
        {heights.map((height, index) => (
          <StyledItem
            key={index}
            sx={{
              height,
              borderRadius: 2,
              overflow: 'hidden',
            }}
            src={pics[index]}
            elevation={3}
            onClick={() => handleOpen(pics[index])}
          >
            <Overlay className="overlay">
              <ZoomInIcon sx={{ color: 'white', fontSize: 40 }} />
            </Overlay>
          </StyledItem>
        ))}
      </Masonry>

      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <Fade in={!!selectedImage}>
          <ModalContent>
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
            {selectedImage && <img src={selectedImage} alt="Preview" />}
          </ModalContent>
        </Fade>
      </Modal>
    </Box>
  );
}
