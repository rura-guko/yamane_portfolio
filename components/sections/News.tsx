'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react';

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const news = [
    {
      date: '2024.01.15',
      category: 'お知らせ',
      title: '新人タレント募集オーディション開催決定',
      excerpt: '2024年春季新人タレント募集オーディションの開催が決定いたしました。詳細については公式サイトをご確認ください。',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '3分'
    },
    {
      date: '2024.01.10',
      category: 'メディア',
      title: '山田花子、映画「青い空の向こう」で主演決定',
      excerpt: '所属女優の山田花子が、話題の新作映画「青い空の向こう」で主演を務めることが発表されました。',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '5分'
    },
    {
      date: '2024.01.05',
      category: 'イベント',
      title: '山根プロ NIGHT 2024 開催レポート',
      excerpt: '先日開催された山根プロ NIGHT 2024の様子をレポートします。多くの方にご来場いただき、ありがとうございました。',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '4分'
    },
    {
      date: '2023.12.28',
      category: 'プレスリリース',
      title: '2023年度 年間活動報告',
      excerpt: '2023年度の山根プロの活動をまとめた年間報告書を公開いたします。',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '7分'
    },
    {
      date: '2023.12.20',
      category: 'お知らせ',
      title: '年末年始休業のお知らせ',
      excerpt: '年末年始の休業期間についてお知らせいたします。お問い合わせ対応については期間中一時停止となります。',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '2分'
    },
    {
      date: '2023.12.15',
      category: 'メディア',
      title: '佐藤美咲、新アルバム「光の道」リリース',
      excerpt: '所属アーティストの佐藤美咲の新アルバム「光の道」が各種音楽配信サービスでリリースされました。',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '3分'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'お知らせ': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'メディア': return 'bg-purple-100 text-purple-600 border-purple-200';
      case 'イベント': return 'bg-green-100 text-green-600 border-green-200';
      case 'プレスリリース': return 'bg-orange-100 text-orange-600 border-orange-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <section id="news" className="py-20 lg:py-32 relative bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-green-100/50 to-red-100/50 rounded-full blur-3xl" />
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
            <span className="text-red-600 text-sm font-semibold">NEWS & UPDATES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            <span className="gradient-primary">最新</span>ニュース &
            <br />
            <span className="text-gray-800">アップデート</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            山根プロの最新情報をお届けします。所属タレントの活動情報から
            会社のお知らせまで、重要な情報をいち早くお伝えします。
          </p>
        </motion.div>

        {/* Featured News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass-effect rounded-2xl overflow-hidden hover-glow group cursor-pointer card-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(news[0].category)}`}>
                    {news[0].category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{news[0].date}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>読了時間: {news[0].readTime}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                  {news[0].title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {news[0].excerpt}
                </p>
                
                <div className="flex items-center text-red-500 font-semibold group-hover:text-red-600 transition-colors">
                  <span>詳細を読む</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.slice(1, 4).map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden hover-glow group cursor-pointer card-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-3 w-3 mr-2" />
                  <span>{item.date}</span>
                  <Clock className="h-3 w-3 ml-4 mr-2" />
                  <span>{item.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center text-red-500 text-sm font-semibold group-hover:text-red-600 transition-colors">
                  <span>続きを読む</span>
                  <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Additional News List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="glass-effect rounded-xl p-8 card-shadow"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Tag className="h-6 w-6 mr-3 text-red-500" />
            その他のニュース
          </h3>
          
          <div className="space-y-4">
            {news.slice(4).map((item, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0 group cursor-pointer">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-gray-500 text-sm">{item.date}</span>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-gray-800 font-semibold group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all ml-4" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg"
            >
              すべてのニュースを見る
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;