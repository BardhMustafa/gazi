import { FieldError, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../../shared/components/Button';
import { useTranslations } from '../../hooks/useTranslations';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const { t, translations } = useTranslations();

  const handleFormSubmit = handleSubmit((data: ContactForm) => {
    console.log(data);
  });

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormContainer>
        <FormControl>
          <Input
            type="text"
            id="name"
            {...register('name', {
              required: `${t(translations.common.name)} ${t(
                translations.common.is_required
              )}`,
            })}
            placeholder={t(translations.contact.your_name)}
            error={errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormControl>
        <FormControl>
          <Input
            type="email"
            id="email"
            {...register('email', {
              required: `${t(translations.common.email)} ${t(
                translations.common.is_required
              )}`,
            })}
            placeholder={t(translations.contact.your_email)}
            error={errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormControl>
        <FormControl>
          <Textarea
            id="message"
            rows={10}
            {...register('message', {
              required: `${t(translations.common.message)} ${t(
                translations.common.is_required
              )}`,
            })}
            placeholder={t(translations.contact.message)}
            error={errors.message}
          />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </FormControl>
      </FormContainer>

      <Button type="submit">{t(translations.contact.send_message)}</Button>
    </Form>
  );
};

const Form = styled.form`
  padding-top: 1rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormControl = styled.div``;

const Input = styled.input<{ error: FieldError | undefined }>`
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  border: 1px solid ${({ error }) => (error ? '#d42539' : '#bbb')};
  font-family: 'Poppins', sans-serif;

  &::placeholder {
    color: ${({ error }) => (error ? '#d42539' : '#aaa')};
  }

  &:focus {
    outline: none;
    border-color: #d42539;
  }
`;

const Textarea = styled.textarea<{ error: FieldError | undefined }>`
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  border: 1px solid ${({ error }) => (error ? '#d42539' : '#bbb')};
  font-family: 'Poppins', sans-serif;
  resize: none;

  &::placeholder {
    color: ${({ error }) => (error ? '#d42539' : '#aaa')};
  }

  &:focus {
    outline: none;
    border-color: #d42539;
  }
`;

const ErrorMessage = styled.span`
  color: #d42539;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;
