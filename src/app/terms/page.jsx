import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-center border-b border-gray-100 pb-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: May 16, 2026
          </p>
        </div>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="text-sm italic text-gray-500">
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Use of the License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials on our website for personal, non-commercial transitory
              viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Limitations of Liability
            </h2>
            <p>
              In no event shall the company or its suppliers be liable for any
              damages arising out of the use or inability to use the materials
              on our internet site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Revisions and Errata
            </h2>
            <p>
              The materials appearing on our website could include technical,
              typographical, or photographic errors. We do not warrant that any
              of the materials on its website are accurate, complete, or
              current.
            </p>
          </section>

          <section className="bg-green-50 p-4 rounded-xl border border-green-100 mt-8">
            <h2 className="text-lg font-semibold text-green-900 mb-1">
              Termination
            </h2>
            <p className="text-sm text-green-800">
              We may terminate or suspend access to our service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
