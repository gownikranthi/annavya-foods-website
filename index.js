// pages/index.js - ANNAVYA FOODS Complete Website
// This is a Next.js project - Copy this into your pages/index.js file
// All styling is Tailwind CSS (built-in with Next.js)

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp integration
  const whatsappNumber = '919618229651'; // +91 96182296518
  const whatsappMessage = encodeURIComponent(
    'Hello ANNAVYA FOODS, I would like to know more about your millet products.'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Products data
  const products = [
    { name: 'Foxtail Millet', icon: '🌾', local: 'Korralu' },
    { name: 'Little Millet', icon: '🌱', local: 'Samalu' },
    { name: 'Kodo Millet', icon: '🌿', local: 'Varagu' },
    { name: 'Browntop Millet', icon: '🍃', local: 'Korale' },
    { name: 'Barnyard Millet', icon: '🌾', local: 'Udalu' },
    { name: 'Ragi', icon: '🌾', local: 'Finger Millet' },
    { name: 'Bajra', icon: '🌾', local: 'Pearl Millet' },
    { name: 'Jowar', icon: '🌾', local: 'Sorghum' },
  ];

  // Features
  const features = [
    { title: 'Naturally Grown', icon: '🌱', desc: 'No chemicals, no pesticides' },
    { title: 'Farm Direct', icon: '👨‍🌾', desc: 'Sourced directly from farmers' },
    { title: 'Unpolished', icon: '✨', desc: 'Maximum nutrition preserved' },
    { title: 'Careful Processing', icon: '⚙️', desc: 'Traditional methods' },
    { title: 'Healthy Living', icon: '❤️', desc: 'Support your wellbeing' },
    { title: 'Premium Quality', icon: '⭐', desc: 'Every grain matters' },
  ];

  // Benefits
  const benefits = [
    { title: 'High Fiber', desc: 'Better digestion and gut health' },
    { title: 'Rich Nutrients', desc: 'Essential minerals and vitamins' },
    { title: 'Traditional Superfood', desc: 'Proven for generations' },
    { title: 'Healthy Lifestyle', desc: 'Complete nutritional support' },
  ];

  return (
    <>
      <Head>
        <title>ANNAVYA FOODS - Traditional Indian Millets</title>
        <meta
          name="description"
          content="ANNAVYA FOODS brings traditional Indian millets directly from farms to families. Naturally grown, unpolished, premium quality."
        />
        <meta name="keywords" content="millets, organic food, healthy eating, traditional grains, farm fresh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annavyafoods.com" />
      </Head>

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-green-900 font-bold text-lg">A</span>
            </div>
            <div className="text-green-900 font-bold text-lg hidden sm:block">ANNAVYA</div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.022 0-2.031.193-3.008.568L4.5 3l1.871 3.528c-.426.992-.65 2.08-.65 3.178 0 5.514 4.486 10 10 10 2.682 0 5.206-1.065 7.107-3a10.008 10.008 0 003.107-7 10.009 10.009 0 00-10-10z" />
            </svg>
            <span className="hidden sm:inline">Order Now</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen bg-gradient-to-br from-green-900 via-green-800 to-yellow-700 flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-overlay blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-block">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-green-900 to-green-700 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Bringing Back India's Traditional Millets
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-yellow-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Naturally grown, unpolished millets sourced directly from farmers to support healthier families and healthier lifestyles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.022 0-2.031.193-3.008.568L4.5 3l1.871 3.528c-.426.992-.65 2.08-.65 3.178 0 5.514 4.486 10 10 10 2.682 0 5.206-1.065 7.107-3a10.008 10.008 0 003.107-7 10.009 10.009 0 00-10-10z" />
              </svg>
              Order on WhatsApp
            </a>

            <a
              href="#products"
              className="bg-white hover:bg-yellow-50 text-green-900 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Explore Our Millets
            </a>
          </div>

          {/* Tagline */}
          <p className="mt-12 text-yellow-200 text-lg italic">From farms to families naturally.</p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-green-900 mb-8 text-center">
            Why We Started ANNAVYA FOODS
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-center text-xl leading-relaxed">
              We started ANNAVYA FOODS with a simple mission — bringing back India's traditional millets to modern families.
            </p>

            <p className="leading-relaxed">
              In today's world, many people have moved away from traditional healthy foods and shifted toward highly processed eating habits. We believe food should not only fill our stomachs but also nourish our health, lifestyle, and future generations.
            </p>

            <p className="leading-relaxed">
              That is why we carefully source naturally grown millets directly from farmers and deliver them to families with minimal processing and maximum authenticity. Our goal is to help people reconnect with healthy traditional Indian foods.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
              <p className="text-green-900 font-semibold text-lg italic">
                "We believe in the power of traditional grains to transform modern families' health."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-gradient-to-b from-yellow-50 to-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-green-900 mb-4 text-center">
            Our Products
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Premium unpolished millets, available in 500g and 1kg packages
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-yellow-400"
              >
                <div className="aspect-square bg-gradient-to-br from-yellow-50 to-green-50 flex items-center justify-center p-6 group-hover:scale-105 transition-transform">
                  <span className="text-6xl">{product.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-green-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{product.local}</p>
                  <div className="flex gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">500g</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">1kg</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">Unpolished • Naturally Grown</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Inquire About Products
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-green-900 mb-16 text-center">
            Why Families Choose ANNAVYA FOODS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-yellow-50 hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-green-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH BENEFITS SECTION */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-16 text-center">
            Traditional Grains for Modern Living
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-green-700 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-yellow-100">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-yellow-100 italic">
              Every grain is packed with nutrients your family needs.
            </p>
          </div>
        </div>
      </section>

      {/* FARM TO FAMILY SECTION */}
      <section className="bg-yellow-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-green-900 mb-16 text-center">
            Farm to Family Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Farmer', icon: '👨‍🌾', desc: 'Direct relationships with trusted farmers' },
              { step: '2', title: 'Harvest', icon: '🌾', desc: 'Careful harvesting at peak ripeness' },
              { step: '3', title: 'Cleaning', icon: '✨', desc: 'Traditional cleaning methods' },
              { step: '4', title: 'Packing', icon: '📦', desc: 'Premium packaging for freshness' },
              { step: '5', title: 'Family', icon: '👨‍👩‍👧‍👦', desc: 'Delivered to your kitchen' },
            ].map((stage, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all">
                  <div className="text-5xl mb-3">{stage.icon}</div>
                  <h3 className="font-bold text-green-900 text-lg mb-2">{stage.title}</h3>
                  <p className="text-sm text-gray-600">{stage.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 transform -translate-y-1/2 text-yellow-400 text-3xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="bg-green-900 text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-green-800 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-serif font-bold mb-4 text-yellow-300">Our Vision</h3>
              <p className="text-lg leading-relaxed text-yellow-50">
                To reconnect modern families with traditional Indian healthy foods and create a healthier future through authentic millet-based nutrition.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-green-800 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-serif font-bold mb-4 text-yellow-300">Our Mission</h3>
              <p className="text-lg leading-relaxed text-yellow-50">
                To provide naturally sourced, carefully processed traditional millets directly from farms to families while supporting healthier lifestyles and sustainable farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-green-900 mb-8">Get In Touch</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-green-900 text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-600">+91 96182296518</p>
            </div>
            <div>
              <h3 className="font-bold text-green-900 text-lg mb-2">Location</h3>
              <p className="text-gray-600">Andhra Pradesh, India</p>
            </div>
            <div>
              <h3 className="font-bold text-green-900 text-lg mb-2">Email</h3>
              <p className="text-gray-600">info@annavyafoods.com</p>
            </div>
          </div>

          <p className="text-xl text-gray-700 mb-8">
            Message us directly on WhatsApp for product inquiries and orders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.022 0-2.031.193-3.008.568L4.5 3l1.871 3.528c-.426.992-.65 2.08-.65 3.178 0 5.514 4.486 10 10 10 2.682 0 5.206-1.065 7.107-3a10.008 10.008 0 003.107-7 10.009 10.009 0 00-10-10z" />
              </svg>
              Message on WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-green-900 font-bold">A</span>
                </div>
                <span className="font-bold text-lg">ANNAVYA FOODS</span>
              </div>
              <p className="text-yellow-100 italic">From farms to families naturally.</p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold mb-4 text-yellow-300">Quick Links</h3>
              <ul className="space-y-2 text-yellow-100">
                <li><a href="#products" className="hover:text-yellow-300 transition">Products</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">Order</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition">About</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4 text-yellow-300">Connect With Us</h3>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 px-4 py-2 rounded-full inline-block font-semibold hover:bg-yellow-200 transition"
              >
                Message Us
              </a>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8 text-center text-yellow-100">
            <p>&copy; 2026 ANNAVYA FOODS. All rights reserved. | Traditional Indian Millets | Farm Direct Quality</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40"
        title="Message us on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.022 0-2.031.193-3.008.568L4.5 3l1.871 3.528c-.426.992-.65 2.08-.65 3.178 0 5.514 4.486 10 10 10 2.682 0 5.206-1.065 7.107-3a10.008 10.008 0 003.107-7 10.009 10.009 0 00-10-10z" />
        </svg>
      </a>
    </>
  );
}