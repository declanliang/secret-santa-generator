export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Secret Santa Generator",
    "description": "Free online Secret Santa generator with no email required. Create gift exchanges for office parties, family gatherings, and friend groups.",
    "url": "https://secret-santa-generator.net",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "100% Free & No Registration",
      "No Email Required",
      "Privacy Protected - Anonymous Drawing",
      "Anti-Cheat System",
      "Reusable Lists Year After Year",
      "Works on Mobile & Desktop"
    ],
    "creator": {
      "@type": "Organization",
      "name": "Secret Santa Generator"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Secret Santa work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Secret Santa is a gift exchange game where participants are randomly assigned someone to give a gift to. Each person draws a name secretly and buys a gift for that person within a set budget. The fun is in the surprise - no one knows who their Secret Santa is until the gift exchange!"
        }
      },
      {
        "@type": "Question",
        "name": "Is this Secret Santa generator really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our Secret Santa generator is 100% free with no hidden costs. You can create unlimited events, add as many participants as you want, and there are no premium features locked behind a paywall."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No account needed! Simply add your participants, set your preferences, and get your invitation links instantly. We believe in keeping things simple and respecting your privacy."
        }
      },
      {
        "@type": "Question",
        "name": "Do participants need email addresses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! Email is completely optional. You can share invitation links via WhatsApp, text message, social media, or any messaging platform. Participants just click their link to see who they drew."
        }
      },
      {
        "@type": "Question",
        "name": "How to do Secret Santa on WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's easy! After creating your event, you'll get a universal join link. Simply share this link in your WhatsApp group or send personalized links to each participant via WhatsApp direct message. They click the link, select their name, and instantly see who they drew!"
        }
      },
      {
        "@type": "Question",
        "name": "Can the organizer see all pairings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! Even the organizer cannot see who drew whom. This ensures complete anonymity and fairness. The pairings are randomly generated and encrypted - only each participant knows their own assignment."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}
