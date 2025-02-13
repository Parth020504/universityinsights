import React, { useState, lazy, Suspense } from 'react';
import { Check, ChevronDown, Globe2, GraduationCap, Phone, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet';

// Lazy load components
const AccordionItem = lazy(() => import('./components/AccordionItem'));
const BenefitCard = lazy(() => import('./components/BenefitCard'));
const CountryCard = lazy(() => import('./components/CountryCard'));

// Data constants moved to separate files for better code splitting
import { countries, benefits, admissionSteps } from './data/constants';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [openAccordion, setOpenAccordion] = useState(0);

  // Memoize form validation
  const validateForm = React.useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.country) newErrors.country = 'Please select a country';
    return newErrors;
  }, [formData]);

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  }, [validateForm]);

  return (
    <>
      <Helmet>
        <title>Study MBBS Abroad | Medical Education Consultancy</title>
        <meta name="description" content="Begin your medical journey abroad with world-class education at affordable costs. Apply now for MBBS programs in top medical universities worldwide." />
        <meta name="keywords" content="MBBS abroad, medical education, study medicine, medical universities, affordable education" />
        <meta property="og:title" content="Study MBBS Abroad | Medical Education Consultancy" />
        <meta property="og:description" content="Transform your medical career with world-class education at affordable costs" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Begin Your Medical Journey Abroad
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your medical career with world-class education at affordable costs
              </p>
              <button 
                onClick={() => {
                  const form = document.getElementById('apply-form');
                  form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                aria-label="Apply Now"
              >
                Apply Now
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Study MBBS Abroad?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-xl"></div>}>
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </Suspense>
          </div>
        </section>

        {/* Countries Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Top Destinations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-xl"></div>}>
                {countries.map((country) => (
                  <CountryCard key={country.name} country={country} />
                ))}
              </Suspense>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Admission Process</h2>
            <div className="max-w-3xl mx-auto">
              <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-xl"></div>}>
                {admissionSteps.map((step, index) => (
                  <AccordionItem
                    key={index}
                    step={step}
                    isOpen={openAccordion === index}
                    onToggle={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                    isLast={index === admissionSteps.length - 1}
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-form" className="bg-white py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Apply Now</h2>
      
      {submitted ? (
        <div role="alert" className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <h3 className="text-green-800 text-xl font-semibold mb-2">Application Submitted Successfully!</h3>
          <p className="text-green-700">Thank you for your interest. Our team will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              aria-required="true"
              aria-invalid={!!errors.name}
            />
            {errors.name && <p role="alert" className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              aria-required="true"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p role="alert" className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
              aria-required="true"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <p role="alert" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Country
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-required="true"
              aria-invalid={!!errors.country}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && <p role="alert" className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
            aria-label="Submit Application"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default App;