
export function CallToActionSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to Start Your IELTS Journey?</h2>
        <p className="text-xl text-gray-300 mb-12">Join hundreds of successful students who achieved their target scores</p>
        
        {/* Enhanced Professional Credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
          <div className="text-center">
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-sm">Hours Coaching</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">90%</div>
            <div className="text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">Expert</div>
            <div className="text-sm">Certified Coaches</div>
          </div>
        </div>
      </div>
    </section>
  );
}
