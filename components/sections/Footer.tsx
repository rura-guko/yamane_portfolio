'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const footerLinks = {
    '会社情報': [
      { name: '会社概要', href: '#about' },
      { name: '代表メッセージ', href: '#about' },
      { name: '沿革', href: '#about' },
      { name: 'アクセス', href: '#contact' },
      { name: '採用情報', href: '#contact' }
    ],
    'サービス': [
      { name: 'タレントマネジメント', href: '#services' },
      { name: 'キャスティング', href: '#services' },
      { name: 'プロモーション', href: '#services' },
      { name: 'イベント企画', href: '#services' },
      { name: 'メディア制作', href: '#services' }
    ],
    '所属タレント': [
      { name: '俳優・女優', href: '#talent' },
      { name: 'アーティスト', href: '#talent' },
      { name: 'タレント', href: '#talent' },
      { name: 'モデル', href: '#talent' },
      { name: 'クリエイター', href: '#talent' }
    ],
    'サポート': [
      { name: 'お問い合わせ', href: '#contact' },
      { name: 'オーディション情報', href: '#contact' },
      { name: 'よくある質問', href: '#contact' },
      { name: 'プライバシーポリシー', href: '#' },
      { name: '利用規約', href: '#' }
    ]
  };

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-6 cursor-pointer" onClick={() => scrollToSection('#home')}>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold gradient-primary">山根プロ</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                1997年創業、日本を代表する芸能事務所として、
                数多くの才能ある俳優、女優、タレントをサポートし、
                エンターテインメント業界の発展に貢献しています。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span>03-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-red-500" />
                  <span>info@yamane-pro.jp</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-red-500 mt-0.5" />
                  <span>東京都渋谷区神宮前1-2-3<br />山根プロ BUILDING 10F</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              >
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        whileHover={{ x: 4 }}
                        className="text-gray-300 hover:text-red-400 transition-colors text-sm text-left"
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 border-t border-gray-700"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              最新情報を<span className="gradient-primary">メルマガ</span>でお届け
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              所属タレントの最新情報やオーディション情報、
              エンターテインメント業界のニュースを定期的にお送りします。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg whitespace-nowrap shadow-lg"
              >
                登録する
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm"
          >
            © 2024 山根プロ TALENT AGENCY. All Rights Reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-6 text-gray-400 text-sm"
          >
            <a href="#" className="hover:text-red-400 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-red-400 transition-colors">利用規約</a>
            <a href="#" className="hover:text-red-400 transition-colors">サイトマップ</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;