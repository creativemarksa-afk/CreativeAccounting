export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "nameAr",
      title: "Name (Arabic)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Position (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "positionAr",
      title: "Position (Arabic)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Company (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "companyAr",
      title: "Company (Arabic)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fullQuote",
      title: "Full Quote (English)",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fullQuoteAr",
      title: "Full Quote (Arabic)",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Company: ${subtitle}`,
        media,
      };
    },
  },
};