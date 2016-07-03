const Highlight = (str) =>
  str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
     .replace(/`(.+?)`/g, '<strong>$1</strong>');

export default Highlight;
