export const profileSchema = {
  type: 'object',
  required: ['profile'],
  properties: {
    profile: {
      type: 'object',
      required: ['name', 'avatarUrl'],
      properties: {
        name: { type: 'string', minLength: 1 },
        avatarUrl: { type: 'string', format: 'uri' },
        title: { type: 'string' },
        bio: { type: 'string' },
      },
      additionalProperties: false,
    },
    links: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'title', 'url'],
        properties: {
          id: { type: 'string' },
          title: { type: 'string', minLength: 1 },
          url: { type: 'string', format: 'uri' },
          icon: { type: 'string' },
        },
        additionalProperties: false,
      },
    },
    socials: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'url', 'icon'],
        properties: {
          id: { type: 'string' },
          url: { type: 'string', format: 'uri' },
          icon: { type: 'string' },
        },
        additionalProperties: false,
      },
    },
    theme: {
      type: 'object',
      properties: {
        colors: {
          type: 'object',
          properties: {
            primary: { type: 'string' },
            background: { type: 'string' },
            text: { type: 'string' },
            cardBg: { type: 'string' },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
}
