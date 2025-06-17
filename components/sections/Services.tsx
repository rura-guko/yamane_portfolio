'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Film, Music, Theater, Tv, Camera, Mic, Users, Star } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Film,
      title: '映画・ドラマ',
      description: '国内外の映画・ドラマ制作における キャスティングから出演交渉まで',
      features: ['主演・助演キャスティング', '国際共同制作サポート', '撮影現場サポート']
    },
    {
      icon: Music,
      title: '音楽活動',
      description: 'アーティストの楽曲制作から プロモーション戦略まで総合サポート',
      features: ['楽曲制作・レコーディング', 'ライブ・コンサート企画', 'メディア出演調整']
    },
    {
      icon: Theater,
      title: '舞台・劇場',
      description: '舞台芸術における出演機会の 創出と芸術性の向上をサポート',
      features: ['舞台出演オーディション', '演技指導・レッスン', '劇場との連携']
    },
    {
      icon: Tv,
      title: 'テレビ番組',
      description: 'バラエティから報道番組まで 幅広いテレビ出演をサポート',
      features: ['レギュラー番組出演', 'ゲスト出演調整', 'MC・司会業務']
    },
    {
      icon: Camera,
      title: 'CM・広告',
      description: '企業の広告キャンペーンにおける タレント起用とブランディング',
      features: ['CM出演キャスティング', 'ブランドアンバサダー', '広告撮影サポート']
    },
    {
      icon: Mic,
      title: 'イベント・MC',
      description: '各種イベントでの司会進行や パフォーマンス提供',
      features: ['企業イベントMC', 'ライブパフォーマンス', 'トークイベント']
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-red-100/50 to-pink-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-l from-blue-100/50 to-purple-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-red-100 to-pink-100 rounded-full px-4 py-2 mb-6">
            <span className="text-red-600 text-sm font-semibold">OUR SERVICES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            <span className="gradient-primary">総合的な</span>
            <br />
            エンターテインメント<span className="text-gray-800">サービス</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            映画・テレビ・音楽・舞台など、あらゆるエンターテインメント分野において、
            プロフェッショナルなサービスを提供し、タレントの可能性を最大限に引き出します。
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-effect rounded-xl p-8 hover-glow group cursor-pointer card-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-2xl p-8 lg:p-12 text-center card-shadow"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
              <span className="gradient-primary">あなたの才能</span>を
              <br />
              私たちと一緒に<span className="text-gray-800">開花させませんか？</span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              山根プロでは、新しい才能を常に求めています。
              あなたの夢を実現するためのプロフェッショナルなサポートを提供します。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg hover-glow shadow-lg"
              >
                オーディション応募
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#about')}
                className="glass-effect border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg shadow-lg"
              >
                サービス詳細
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;