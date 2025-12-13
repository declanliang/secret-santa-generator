export function Features() {
  const features = [
    {
      icon: '💯',
      title: '100% Free & No Registration',
      description: 'Create unlimited Secret Santa events without signing up or paying a cent. No hidden fees, ever.'
    },
    {
      icon: '📧',
      title: 'No Email Required',
      description: 'Share invitations through WhatsApp, direct links, or any messaging app. Email is completely optional.'
    },
    {
      icon: '🔒',
      title: 'Privacy Protected - Anonymous Drawing',
      description: 'Even the organizer cannot see who drew whom. Your Secret Santa assignments stay secret!'
    },
    {
      icon: '🛡️',
      title: 'Anti-Cheat System',
      description: 'Participants can only view their match once. No peeking or changing assignments after the draw.'
    },
    {
      icon: '♻️',
      title: 'Reusable Lists Year After Year',
      description: 'Save your event links and reuse the same participant list for next year\'s gift exchange.'
    },
    {
      icon: '📱',
      title: 'Works on Mobile & Desktop',
      description: 'Fully responsive design works perfectly on phones, tablets, and computers. No app download needed.'
    }
  ];

  return (
    <section className="mt-16 mb-12 bg-gradient-to-br from-violet-50 to-purple-50 py-12 px-6 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
        Why Use Our Free Secret Santa Generator?
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        The easiest and most secure way to organize your gift exchange
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
