'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Award, Calendar, ExternalLink } from 'lucide-react';

const FeaturedTalent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const talents = [
    {
      name: '山田 花子',
      category: '女優',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'ドラマ「春の嵐」で主演を務め、数々の賞を受賞。感情豊かな演技で多くの視聴者を魅了。',
      achievements: ['日本アカデミー賞 新人俳優賞', 'ドラマアワード 主演女優賞', '映画祭 最優秀女優賞'],
      recentWork: '映画「青い空の向こう」'
    },
    {
      name: '田中 太郎',
      category: '俳優',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'アクション映画から恋愛ドラマまで幅広いジャンルで活躍。国際映画祭でも高い評価を獲得。',
      achievements: ['国際映画祭 男優賞', 'アクション映画大賞', '演技力認定証'],
      recentWork: 'ドラマ「夜明けの街で」'
    },
    {
      name: '佐藤 美咲',
      category: 'アーティスト',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'パワフルな歌声とステージパフォーマンスで注目を集める新世代シンガー。',
      achievements: ['新人アーティスト賞', 'ゴールドディスク認定', 'ベストパフォーマー賞'],
      recentWork: 'アルバム「光の道」'
    },
    {
      name: '鈴木 健一',
      category: 'タレント',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'バラエティ番組でのトーク力と愛されキャラクターで多くの番組に出演。',
      achievements: ['バラエティ番組MVP', 'タレント人気投票1位', 'CM起用回数トップ'],
      recentWork: 'レギュラー番組「笑顔の時間」'
    },
    {
      name: '高橋 麗奈',
      category: 'モデル',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'ファッションモデルとして国内外で活躍。洗練されたスタイルと表現力で注目。',
      achievements: ['ファッション誌表紙モデル', '東京コレクション出演', 'モデル・オブ・ザ・イヤー'],
      recentWork: 'ファッションウィーク2024'
    },
    {
      name: '伊藤 大輔',
      category: 'コメディアン',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: '独特な世界観とキャラクターで笑いを提供。舞台からテレビまで幅広く活動。',
      achievements: ['お笑いグランプリ優勝', '舞台演出賞', 'コメディ大賞'],
      recentWork: '単独ライブ「笑いの宇宙」'
    }
  ];

  return (
    <section id="talent" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-red-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-100/50 to-transparent rounded-full blur-3xl" />
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
            <span className="text-red-600 text-sm font-semibold">FEATURED TALENT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            <span className="gradient-primary">輝く才能</span>たちが
            <br />
            <span className="text-gray-800">ここから</span>羽ばたく
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            山根プロが誇る所属タレントたち。それぞれが異なる分野で才能を発揮し、
            エンターテインメント業界で注目を集めています。
          </p>
        </motion.div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover-glow group cursor-pointer card-shadow"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {talent.category}
                </div>
                
                {/* External Link */}
                <div className="absolute top-4 right-4 w-8 h-8 glass-effect rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4 text-gray-700" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{talent.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{talent.description}</p>
                
                {/* Recent Work */}
                <div className="flex items-center text-red-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>最新作品: {talent.recentWork}</span>
                </div>
                
                {/* Achievements */}
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Award className="h-4 w-4 mr-2 text-red-500" />
                    <span>主な受賞歴</span>
                  </div>
                  {talent.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start text-gray-600 text-xs">
                      <Star className="h-3 w-3 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                  {talent.achievements.length > 2 && (
                    <div className="text-red-500 text-xs">
                      +{talent.achievements.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: '所属タレント', icon: Star },
            { number: '1000+', label: '出演作品', icon: Award },
            { number: '150+', label: '受賞歴', icon: Award },
            { number: '27+', label: '活動年数', icon: Calendar }
          ].map((stat, index) => (
            <div key={index} className="text-center glass-effect rounded-xl p-6 group hover-glow card-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTalent;