const toCssCariables = (obj, prefix = '-') => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = `${prefix}-${key}`;
    if (typeof value === 'object') {
      Object.assign(acc, toCssCariables(value, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
};

export const defaultTheme = {
  colors: {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    success: 'var(--success)',
    danger: 'var(--danger)',
    warning: 'var(--warning)',
    info: 'var(--info)',
    light: 'var(--light)',
    dark: 'var(--dark)',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  companyName: 'Acme Inc.',
  lightTheme: toCssCariables({
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
  }),
  darkTheme: toCssCariables({
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#343a40',
    dark: '#f8f9fa',
  }),
};
