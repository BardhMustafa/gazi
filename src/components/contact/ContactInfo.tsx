import styled from 'styled-components';
import { ContactForm } from './ContactForm';
import { MailOutline, PhoneInTalk, Business } from '@mui/icons-material';
import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material';
import { useTranslations } from '../../hooks/useTranslations';

interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
}

export const ContactInfo = ({ phone, email, address }: ContactInfoProps) => {
  const { t, translations } = useTranslations();

  return (
    <Section>
      <InfoSection>
        <InfoSectionHeading>
          {t(translations.contact.do_you_have_any_questions)}
        </InfoSectionHeading>
        <Divider />
        <InfoSectionDescription>
          {t(translations.contact.our_team_will_answer)}
        </InfoSectionDescription>

        <InfoSectionBoxes>
          <Box>
            <StyledPhoneInTalk />
            <BoxInfo>
              <h3>{phone}</h3>
              <p>{t(translations.contact.phone)}</p>
            </BoxInfo>
          </Box>
          <Box>
            <StyledMail />
            <BoxInfo>
              <h3>{email}</h3>
              <h3>ntpgazi@hotmail.com</h3>
              <p>{t(translations.contact.email)}</p>
            </BoxInfo>
          </Box>
          <Box>
            <StyledLBusiness />
            <BoxInfo>
              <h3>{address}</h3>
              <p>{t(translations.contact.street)}</p>
            </BoxInfo>
          </Box>
        </InfoSectionBoxes>
      </InfoSection>

      <FormSection>
        <ContactForm />
      </FormSection>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 4rem 0;
    flex-direction: row;
  }
`;

const InfoSection = styled.div`
  flex-basis: 30%;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const InfoSectionHeading = styled.h2`
  font-size: 3rem;
  width: 90%;
`;

const InfoSectionDescription = styled.p`
  margin-top: 2rem;
  width: 85%;

  @media (min-width: 768px) {
    width: 65%;
  }
`;

const InfoSectionBoxes = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const BoxInfo = styled.div`
  & > h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  & > p {
    font-size: 1.4rem;
  }
`;

const createStyledIcon = (
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  }
) => styled(Icon)`
  color: #d22537;
  font-size: 3.6rem;
`;

const StyledPhoneInTalk = createStyledIcon(PhoneInTalk);
const StyledMail = createStyledIcon(MailOutline);
const StyledLBusiness = createStyledIcon(Business);

const Divider = styled.div`
  width: 30%;
  height: 0.3rem;
  background-color: #d42439;
  margin: 1rem 0;
`;

const FormSection = styled.div`
  flex-basis: 70%;
`;
