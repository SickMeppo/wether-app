export interface ClassesArgs {
  rootClass: string;
  conditionalModifiers: Array<string | Record<string, boolean | undefined>>;
  className?: string;
}

export const classes = (
  rootClass: ClassesArgs['rootClass'],
  conditionalModifiers: ClassesArgs['conditionalModifiers'],
  className = ''
) => {
  const modifiedClasses = conditionalModifiers.map(modifier => {
    if (typeof modifier === 'string') {
      return `${rootClass}--${modifier}`;
    }

    return Object.entries(modifier).map(([mod, condition]) => (condition && `${rootClass}--${mod}`) || '').join(' ');
  }).join(' ');

  return `${rootClass} ${modifiedClasses} ${className}`;
};
