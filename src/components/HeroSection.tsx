import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '6289672874600';
const AUTO_MESSAGE = 'Halo Admin Riekecare, saya ingin bertanya mengenai layanan yang tersedia.';

const HeroSection = () => {
  const handleChat = () => {
    const encodedMessage = encodeURIComponent(AUTO_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Decorative blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-soft-pink-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-soft-pink-100 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-soft-pink-50 rounded-full blur-3xl opacity-60" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink-50 via-white to-soft-pink-100" />

      {/* Chat Card */}
      <div
        className="relative z-10 w-full max-w-md animate-fade-in"
        style={{
          animation: 'fadeIn 0.8s ease-out forwards',
        }}
      >
        <div
          className="bg-white/80 backdrop-blur-xl rounded-[28px] p-6 shadow-2xl border border-white/50"
          style={{
            boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 pb-4 border-b border-soft-pink-100">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-soft-pink-200 to-soft-pink-300 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Admin Riekecare</h2>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-green-500 font-medium">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="py-5 space-y-3">
            <div className="flex justify-start">
              <div
                className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md"
                style={{
                  background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
                }}
              >
                <p className="text-gray-700 leading-relaxed">Halo Kak 👋</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div
                className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md"
                style={{
                  background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
                }}
              >
                <p className="text-gray-700 leading-relaxed">Selamat datang di Riekecare.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div
                className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md"
                style={{
                  background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
                }}
              >
                <p className="text-gray-700 leading-relaxed text-sm">
                  Kami siap membantu kebutuhan pendampingan pasien, caregiver, antar jemput, dan layanan lainnya.
                </p>
              </div>
            </div>
          </div>

          {/* Chat Button */}
          <button
            onClick={handleChat}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg group"
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #f9a8d4 100%)',
              boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.35)',
            }}
          >
            <MessageCircle className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
            <span className="text-white font-semibold text-base tracking-wide">
              Chat Admin
            </span>
          </button>
        </div>

        {/* Subtle hint text */}
        <p className="text-center mt-4 text-sm text-gray-400">
          Klik untuk terhubung via WhatsApp
        </p>
      </div>

      {/* Add fadeIn keyframes via style */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
