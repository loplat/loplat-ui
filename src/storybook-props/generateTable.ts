type Props = {
  required?: boolean;
  /** summary type을 설정합니다. */
  type?: string;
  detail?: string;
  category?: string;
  defaultValue?: string | boolean | number;
};
/** 스토리북의 args의 설명을 생성합니다. */
export const generateTable = ({ required, category, type, detail, defaultValue }: Props) => {
  return {
    type: {
      required,
    },
    table: {
      category,
      type: {
        summary: type,
        detail,
      },
      defaultValue: { summary: defaultValue },
    },
    defaultValue,
  };
};
