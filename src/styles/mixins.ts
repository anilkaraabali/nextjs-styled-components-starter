const ellipsis = (line = 1) => `
    overflow: hidden;
    ${line === 1 ? 'text-overflow: ellipsis' : ''};
    ${line === 1 ? 'white-space: nowrap' : ''};
    ${line > 1 ? '-webkit-box-orient: vertical' : ''};
    ${line > 1 ? 'display: -webkit-box' : ''};
    ${line > 1 ? `-webkit-line-clamp: ${line}` : ''};
`;

const makeGrid = ({ columnCount, minWidth, gap }: { columnCount: number; minWidth: number; gap: string }) => {
  const gridColumnCount = columnCount;
  const gridItemMinWidth = `${minWidth}px`;
  const gapCount = gridColumnCount - 1;
  const totalGapWidth = gapCount * parseInt(gap, 10);
  const gridItemMaxWidth = `calc((100% - ${totalGapWidth}px) / ${gridColumnCount})`;

  return `
      display: grid;
      grid-gap: ${gap};
      grid-template-columns: repeat(auto-fill, minmax(${gridItemMinWidth}, ${gridItemMaxWidth}));
      `;
};

export { ellipsis, makeGrid };
