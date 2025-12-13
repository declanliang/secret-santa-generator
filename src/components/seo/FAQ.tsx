'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'How does Secret Santa work?',
      answer: 'Secret Santa is a gift exchange game where participants are randomly assigned someone to give a gift to. Each person draws a name secretly and buys a gift for that person within a set budget. The fun is in the surprise - no one knows who their Secret Santa is until the gift exchange!'
    },
    {
      question: 'Is this Secret Santa generator really free?',
      answer: 'Yes! Our Secret Santa generator is 100% free with no hidden costs. You can create unlimited events, add as many participants as you want, and there are no premium features locked behind a paywall.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No account needed! Simply add your participants, set your preferences, and get your invitation links instantly. We believe in keeping things simple and respecting your privacy.'
    },
    {
      question: 'What\'s the minimum number of participants?',
      answer: 'You need at least 3 participants to create a Secret Santa event. This ensures everyone can be matched with someone different.'
    },
    {
      question: 'Do participants need email addresses?',
      answer: 'No! Email is completely optional. You can share invitation links via WhatsApp, text message, social media, or any messaging platform. Participants just click their link to see who they drew.'
    },
    {
      question: 'Can I use it without email?',
      answer: 'Absolutely! Our Secret Santa generator works perfectly without email. Share links through WhatsApp, Messenger, Telegram, or any app you prefer. The organizer can optionally provide an email to receive all links in one convenient message.'
    },
    {
      question: 'Can participants share gift preferences or wishlist?',
      answer: 'Currently, participants receive the name of who they drew and the budget information. You can include a custom message when creating the event with instructions for sharing wishlists separately (like through a shared document or chat).'
    },
    {
      question: 'Can I reuse the same list for next year?',
      answer: 'Yes! Save your organizer link and you can access all participant information. For next year, you\'ll need to create a new event, but you can quickly add the same participants again.'
    },
    {
      question: 'How do I set exclusion rules?',
      answer: 'During setup (Step 2), you can specify who cannot draw whom. This is perfect for couples, family members living together, or anyone who shouldn\'t exchange gifts with each other. The system ensures these pairs won\'t be matched.'
    },
    {
      question: 'What happens if someone accidentally sees their match?',
      answer: 'Each participant can only view their match once. After they see it, the assignment is locked and they cannot change it. This anti-cheat system ensures fairness and keeps the Secret Santa spirit alive!'
    },
    {
      question: 'How to do Secret Santa on WhatsApp?',
      answer: 'It\'s easy! After creating your event, you\'ll get a universal join link. Simply share this link in your WhatsApp group or send personalized links to each participant via WhatsApp direct message. They click the link, select their name, and instantly see who they drew!'
    },
    {
      question: 'What are the different ways to share invitations?',
      answer: 'You have three options: 1) Universal link - one link for everyone to choose their name, 2) Personalized links - unique link for each participant that shows their match immediately, 3) Email - send all links to yourself via email for easy distribution.'
    },
    {
      question: 'Can I send personalized links?',
      answer: 'Yes! After creating your event, you\'ll receive individual links for each participant. These personalized links take them directly to their Secret Santa assignment without having to select their name.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Your privacy is our priority. We only store the minimum information needed (participant names, event details). We don\'t sell data, show ads, or share information with third parties. Data is securely stored and you can delete events anytime.'
    },
    {
      question: 'Can the organizer see all pairings?',
      answer: 'No! Even the organizer cannot see who drew whom. This ensures complete anonymity and fairness. The pairings are randomly generated and encrypted - only each participant knows their own assignment.'
    },
    {
      question: 'How does the anti-cheat system work?',
      answer: 'Once a participant views their Secret Santa assignment, it\'s locked. They cannot refresh to get a different person or share their link with others to peek at assignments. Each person gets one view, keeping the exchange fair and secret.'
    },
    {
      question: 'Can I add participants after the draw?',
      answer: 'Once the event is created and participants start viewing their assignments, you cannot add more people as it would affect the existing pairings. Plan ahead and add everyone before sharing the invitation links.'
    },
    {
      question: 'How many people can participate?',
      answer: 'There\'s no upper limit! Whether you have 3 people or 300, our generator can handle it. It\'s perfect for small friend groups, large office parties, or entire school classes.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-16 mb-12">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Everything you need to know about organizing your Secret Santa gift exchange
      </p>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 pr-4">{item.question}</h3>
              <span className="text-violet-600 text-xl flex-shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
