'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Phone,
      title: 'お電話でのお問い合わせ',
      info: '03-1234-5678',
      description: '平日 9:00-18:00',
      action: 'tel:03-1234-5678'
    },
    {
      icon: Mail,
      title: 'メールでのお問い合わせ',
      info: 'info@yamane-pro.jp',
      description: '24時間受付',
      action: 'mailto:info@yamane-pro.jp'
    },
    {
      icon: MapPin,
      title: '本社所在地',
      info: '東京都渋谷区神宮前1-2-3',
      description: '山根プロ BUILDING 10F',
      action: null
    },
    {
      icon: Clock,
      title: '営業時間',
      info: '平日 9:00-18:00',
      description: '土日祝日休業',
      action: null
    }
  ];

  const inquiryTypes = [
    { icon: User, label: 'オーディション応募', value: 'audition' },
    { icon: Building, label: 'キャスティング依頼', value: 'casting' },
    { icon: MessageCircle, label: '一般お問い合わせ', value: 'general' },
    { icon: Send, label: 'その他', value: 'other' }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-red-100/50 to-pink-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-l from-blue-100/50 to-purple-100/50 rounded-full blur-3xl" />
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
            <span className="text-red-600 text-sm font-semibold">CONTACT US</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            <span className="gradient-primary">お問い合わせ</span>
            <br />
            <span className="text-gray-800">Contact</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ご質問、ご相談、オーディション応募など、お気軽にお問い合わせください。
            専門スタッフが丁寧に対応させていただきます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">お気軽にご連絡ください</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-glow group cursor-pointer card-shadow"
                  onClick={() => item.action && window.open(item.action)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-red-500 font-medium mb-1">{item.info}</p>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-effect rounded-xl overflow-hidden card-shadow"
            >
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-800 font-semibold">アクセスマップ</p>
                  <p className="text-gray-600 text-sm">詳細な地図は公式サイトをご確認ください</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass-effect rounded-2xl p-8 card-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">お問い合わせフォーム</h3>
            
            <form className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label className="block text-gray-800 font-medium mb-4">お問い合わせ種類</label>
                <div className="grid grid-cols-2 gap-3">
                  {inquiryTypes.map((type, index) => (
                    <motion.label
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 glass-effect rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-200"
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type.value}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center peer-checked:scale-110 transition-transform">
                        <type.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{type.label}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">お名前 *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">メールアドレス *</label>
                <input
                  type="email"
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">電話番号</label>
                <input
                  type="tel"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="03-1234-5678"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">件名 *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="お問い合わせの件名"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">お問い合わせ内容 *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-vertical"
                  placeholder="お問い合わせ内容をご記入ください..."
                />
              </div>

              {/* Privacy */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 rounded border-gray-300 bg-white text-red-500 focus:ring-red-500"
                />
                <label htmlFor="privacy" className="text-gray-600 text-sm leading-relaxed">
                  <a href="#" className="text-red-500 hover:underline">プライバシーポリシー</a>に同意し、
                  入力された情報がお問い合わせ対応のために使用されることに同意します。
                </label>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 text-lg hover-glow shadow-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  お問い合わせを送信
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;