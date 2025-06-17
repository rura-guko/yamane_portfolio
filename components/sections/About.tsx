'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Heart, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: Heart,
      title: '情熱',
      description: 'エンターテインメントへの純粋な愛と情熱を大切にし、それを原動力として活動しています。'
    },
    {
      icon: Users,
      title: '信頼',
      description: 'タレントとの深い信頼関係を築き、長期的なパートナーシップを重視しています。'
    },
    {
      icon: Target,
      title: '革新',
      description: '常に新しい可能性を探求し、業界をリードする革新的なアプローチを追求しています。'
    },
    {
      icon: Award,
      title: '品質',
      description: '妥協のない品質へのこだわりで、最高水準のエンターテインメントを提供します。'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-red-100 to-pink-100 rounded-full px-4 py-2 mb-6"
              >
                <span className="text-red-600 text-sm font-semibold">ABOUT US</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-shadow"
              >
                <span className="gradient-primary">27年間</span>の実績で
                <br />
                才能を<span className="text-gray-800">世界へ</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed mb-8"
              >
                1997年の創業以来、山根プロは日本のエンターテインメント業界を牽引してきました。
                私たちは単に才能を発掘するだけでなく、一人一人の個性を大切に育て、
                国際的なステージで活躍できるプロフェッショナルを育成しています。
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                映画、テレビ、音楽、舞台など、あらゆるエンターテインメント分野において、
                最高品質のサービスと革新的なアプローチで、夢を現実に変えるお手伝いをしています。
              </motion.p>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group card-shadow">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="日本のオフィス環境"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 glass-effect rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">500+</div>
                    <div className="text-gray-600">活躍中のタレント</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 lg:mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
              私たちの<span className="gradient-primary">価値観</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              これらの核となる価値観が、私たちの行動指針となり、
              お客様に最高のサービスを提供する原動力となっています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover-glow group cursor-pointer card-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;