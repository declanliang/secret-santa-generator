export function UseCases() {
  const useCases = [
    {
      icon: '🎄',
      title: 'Office Christmas Parties',
      description: 'Perfect for workplace holiday celebrations. Easy to organize, professional, and fun for teams of any size.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Gatherings',
      description: 'Make family holidays special with a fair gift exchange. Great for large families who want to simplify gift-giving.'
    },
    {
      icon: '👫',
      title: 'Friend Groups',
      description: 'Ideal for friend circles celebrating together. Add exclusion rules for couples who live together.'
    },
    {
      icon: '🎉',
      title: 'Holiday Events',
      description: 'Not just for Christmas! Use it for Thanksgiving, New Year, birthdays, or any gift exchange occasion.'
    },
    {
      icon: '🏫',
      title: 'School & Clubs',
      description: 'Teachers, students, and club members can organize fun gift exchanges without complicated coordination.'
    },
    {
      icon: '💼',
      title: 'Corporate Teams',
      description: 'Build team spirit with an organized Secret Santa. Works for remote teams and in-office groups alike.'
    }
  ];

  return (
    <section className="mt-16 mb-12">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
        Perfect for Every Occasion
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Whether it's a small gathering or a large group, our Secret Santa generator makes gift exchanges simple
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {useCases.map((useCase, index) => (
          <div key={index} className="border border-violet-200 p-6 rounded-lg hover:border-violet-400 transition-colors bg-white">
            <div className="text-4xl mb-3">{useCase.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{useCase.title}</h3>
            <p className="text-gray-600 text-sm">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
