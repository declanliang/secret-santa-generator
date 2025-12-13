export function HowItWorks() {
  return (
    <section className="mt-16 mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        How Does Our Secret Santa Generator Work?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Add Participants</h3>
          <p className="text-gray-600">
            Enter the names of everyone joining your Secret Santa. Minimum 3 people required to create a fun gift exchange!
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Set Exclusion Rules</h3>
          <p className="text-gray-600">
            Optionally prevent certain people from drawing each other - perfect for couples or family members who want to avoid pairing up.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Share Invitation Links</h3>
          <p className="text-gray-600">
            Send invitation links via WhatsApp, email, or direct link. Each participant reveals who they got - completely anonymous!
          </p>
        </div>
      </div>
    </section>
  );
}
