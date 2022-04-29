import { generateTable } from './generateTable';

const category = 'icon';
const iconTable = generateTable({
  category,
  type: 'React.ReactElement',
  detail: '`loplat ui`의 아이콘을 사용할 것을 권장합니다.',
});
const initialIconDescription = {
  ...iconTable,
  description: '아이콘 svg 컴포넌트를 설정합니다.',
  control: {
    type: null,
  },
};

export const icon = {
  leftIcon: {
    ...initialIconDescription,
  },
  rightIcon: {
    ...initialIconDescription,
  },
  isIconVisible: { ...generateTable({ category }), description: '아이콘이 보일지 말지를 결정합니다.' },
};
