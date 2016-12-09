const HELLO = 'Howdy';

const SiteData = {
  copyright: '© 2016. MIT License.',
  tagline: 'places.press',
  home: {
    header: {
      message: `${HELLO} This header message was passed in from static data file`,
      promoButton: {
        url: '//stevenyoung.tumblr.com',
        label: 'Read my Tumblr'
      }
    },
    sidebar: {
      messages: [
        'webpack to manage dev, build and testing pipelines',
        'postCSS flexbox custom UI',
        'use react storybook to build ui',
        'cdn css as react components',
        'ajax as react components',
        'connect to a real-time database using firebase.',
        'test components via enzyme with mocha, chai'
      ],
      promoButton: {
        url: '//stevenyoung.tumblr.com',
        label: 'Read my Tumblr'
      }
    }
  }
};

export default SiteData;
