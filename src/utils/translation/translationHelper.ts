import t from './resources.json';

const keys = Object.entries(t.en.translation);
type TranslationType = typeof t.en.translation;

export const translations: TranslationType = keys.reduce(
  (acc, [key, value]) => ({ ...acc, [key]: mapInnerObject(key, value) }),
  {} as TranslationType
);

function mapInnerObject(
  key: string,
  data: object | string,
  prefix?: string
): object | string {
  if (typeof data === 'string') {
    return prefix || key;
  }
  const entries = Object.entries(data);
  return entries.reduce(
    (prev, [keyL, value]) => ({
      ...prev,
      [keyL]: mapInnerObject(keyL, value as object, `${prefix || key}.${keyL}`),
    }),
    {} as typeof data
  );
}
