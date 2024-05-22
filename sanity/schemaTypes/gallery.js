export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description:
        'Optional: Title of the image or the gallery entry. Can be used for SEO and easy identification.',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'A short description of the image for accessibility (SEO and visually impaired users).',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Add tags to categorize your image for better sorting and filtering.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags', // This makes the UI for adding tags more user-friendly
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
