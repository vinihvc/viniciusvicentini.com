const seo = data => {
  return {
    title: data.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: data.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: data.image,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: data.title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: data.description,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: data.image,
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: 'Vinicius Vicentini',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: data.title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: data.description,
      },
      {
        hid: 'aplication-name',
        name: 'aplication-name',
        content: 'Vicentini',
      },
    ],
  }
}

export default seo
