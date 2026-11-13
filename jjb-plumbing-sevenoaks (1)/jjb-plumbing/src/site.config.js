/**
 * Business details – JJB Plumbing and Heating, Sevenoaks (Kent).
 * Sources: client-supplied contact name, phone and email; business name and town from the Yell listing URL
 * (https://www.yell.com/biz/jjb-plumbing-and-heating-sevenoaks-10607422/ – the page itself blocks automated access).
 * Services are typical plumbing & heating work – CONFIRM with Jorge. Edit here, then `npm run build` and `node flatten.js`.
 */
module.exports = {
  name: 'JJB Plumbing and Heating',
  shortName: 'JJB Plumbing & Heating',
  brandSub: 'Sevenoaks, Kent',
  lang: 'en-GB',
  locale: 'en_GB',
  phoneFormat: 'UK',
  url: 'https://www.jjbplumbingandheating.co.uk', // placeholder domain – CONFIRM
  area: 'Sevenoaks and the surrounding area',
  phone: '07759 365871',
  phoneIntl: '+447759365871',
  phoneHref: 'tel:+447759365871',
  whatsapp: 'https://wa.me/447759365871',
  whatsappNumber: '447759365871',
  address: { street: '', city: 'Sevenoaks', region: 'Kent', postcode: '', country: 'GB' },
  addressLine: 'Sevenoaks, Kent',
  mapQuery: 'Sevenoaks, Kent',
  yell: 'https://www.yell.com/biz/jjb-plumbing-and-heating-sevenoaks-10607422/',
  reviewSiteName: 'Yell',
  hours: [],
  openFrom: null, openTo: null,
  hoursShort: '',
  hoursLabel: '',
  openingHoursSchema: '',
  rating: null,
  // Paste real reviews here (e.g. from Yell or Google): { name: 'Sarah M', text: 'Review text', when: '2 months ago' }
  reviews: [],
  contactName: 'Jorge',
  schemaType: 'Plumber',
  schemaDescription: 'Plumbing and heating engineer in Sevenoaks, Kent: boiler services and repairs, central heating, radiators, plumbing repairs and leaks, bathrooms and showers, kitchen plumbing, and gas safety checks.',
  footerAbout: 'Friendly, reliable plumbing and heating for homes in Sevenoaks and the surrounding area. Boilers, central heating, repairs and bathrooms.',
  ctaTitle: 'Need a plumber in Sevenoaks?',
  ctaText: 'Call Jorge for honest advice and a clear quote, or send us a message.',
  ctaButton: 'Request a quote',
  headerCta: 'Get a quote',
  manifestShort: 'JJB Plumbing',
  license: '',
  nav: { services: 'Services', about: 'About', portfolio: 'Gallery' },
  // Quote requests are emailed here via FormSubmit. The FIRST submission sends a one-time activation email – click it once.
  email: 'Jjbplumbing@hotmail.com',
  formEndpoint: null,
  socials: [],
};
if (!module.exports.formEndpoint && module.exports.email) {
  module.exports.formEndpoint = 'https://formsubmit.co/ajax/' + module.exports.email;
}
