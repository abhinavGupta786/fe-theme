import fontColor from './font/fontColorConst';
import fontFamily from './font/fontFamilyConst';
import fontSize from './font/fontSizeConst';
import fontWeight from './font/fontWeightConst';

const theme = {};
theme.color = fontColor;
theme.fontFamily = fontFamily;
theme.fontSize = fontSize;
theme.fontWeight = fontWeight;
theme.display = {
  block: 'block',
  inline: 'inline',
  flex: 'flex',
  inlineBlock: 'inline-block',
  table: 'table',
  tableCell: 'table-cell',
  none: 'none',
};

theme.borderRadius = '8px';

theme.pxScale = 8;

theme.px = (value) => {
  const values = [].concat(value);
  return values
    .map((v) => typeof v === 'string' ? v : `${v * theme.pxScale}px`)
    .join(' ');
};
theme.toString = (value) => (!value || typeof value === 'string') ? value : value.toString();

export default theme;
