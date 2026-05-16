const PrivacyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {/* Header Section */}
        <div className="text-center border-b border-gray-100 pb-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: May 16, 2026
          </p>
        </div>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect information to provide better services to all our
              users. This includes information you provide to us (like your name
              and email address) and information we get from your use of our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. How We Use Information
            </h2>
            <p>
              We use the information we collect to maintain, protect, and
              improve our services, as well as to develop new ones and protect
              our users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Data Security
            </h2>
            <p>
              We work hard to protect our users from unauthorized access to or
              unauthorized alteration, disclosure, or destruction of information
              we hold.
            </p>
          </section>

          <section className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-1">
              Contact Us
            </h2>
            <p className="text-sm text-blue-800">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:support@example.com"
                className="underline font-medium hover:text-blue-950"
              >
                support@example.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="text-center mt-12 pt-6 border-t border-gray-100 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
