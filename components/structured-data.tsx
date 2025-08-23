import Script from 'next/script'

interface StructuredDataProps {
  type?: 'Person' | 'WebSite' | 'BlogPosting' | 'SoftwareApplication'
  data?: Record<string, unknown>
}

export function StructuredData({ type = 'Person', data = {} }: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
  }

  const schemas = {
    Person: {
      ...baseData,
      '@type': 'Person',
      name: 'Your Name',
      url: 'https://portfolio.example.com',
      image: 'https://portfolio.example.com/profile.jpg',
      sameAs: [
        'https://github.com/yourusername',
        'https://linkedin.com/in/yourusername',
        'https://twitter.com/yourusername',
      ],
      jobTitle: 'Full Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
      knowsAbout: [
        'Web Development',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Database Design',
        'Cloud Computing',
      ],
      ...data,
    },
    WebSite: {
      ...baseData,
      '@type': 'WebSite',
      name: 'Developer Portfolio',
      description: 'Professional portfolio showcasing web development projects and skills',
      url: 'https://portfolio.example.com',
      author: {
        '@type': 'Person',
        name: 'Your Name',
      },
      ...data,
    },
    BlogPosting: {
      ...baseData,
      '@type': 'BlogPosting',
      ...data,
    },
    SoftwareApplication: {
      ...baseData,
      '@type': 'SoftwareApplication',
      ...data,
    },
  }

  const schema = schemas[type]

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}