export type Devices = 'mobile' | 'tablet' | 'desktop';

export const screenSize = {
    xs: '320px',
    sm: '600px',
    s800: '800px',
    md: '1024px',
    lg: '1200px',
};

export const device = {
    mobile: `(min-width: 0), and (max-width: ${screenSize.xs})`,
    tablet: `(min-width: ${screenSize.sm}), and (max-width: ${screenSize.xs})`,
    tablet800: `(min-width: ${screenSize.sm}), and (max-width: ${screenSize.md})`,
    desktop: `(min-width: ${screenSize.md})`,
};

export const contentWidth = {
    mobile: 320,
    tablet: 768,
    desktop: 900,
};
