import React, { useState } from "react";
import { TopHeader } from "@/components/ui/top-header";
import { TopNavigationBar } from "@/components/ui/top-navigation-bar";
import { Sidebar } from "@/components/ui/sidebar";
import { SuggestionCard } from "@/components/ui/suggestion-card";
import { ChatInput } from "@/components/ui/chat-input"; // ChatInput bileşenini import edin

// Bu interface'i, arka ucumuzdan gelecek ürün verilerinin yapısını tanımlamak için kullanıyoruz
interface ProductResult {
  name: string;
  price: string;
  link: string;
  imageUrl?: string; // <--- Bu satırı ekleyin veya yorum satırından çıkarın
}

const Index = () => {
  // Arama sonuçlarını, yükleme durumunu ve hata mesajlarını tutacak state'ler
  const [results, setResults] = useState<ProductResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ChatInput bileşeninden gelen mesaj ve dosyaları işleyecek ana fonksiyon
  const handleSendMessage = async (message: string, files?: File[]) => {
    console.log("Message sent from Index:", message);
    console.log("Files attached from Index:", files);

    // Eğer ne mesaj ne de dosya varsa işlemi durdur
    if ((!files || files.length === 0) && message.trim() === '') {
      console.log("Boş mesaj veya dosya, gönderilmedi.");
      return;
    }

    setLoading(true); // Yükleme durumunu başlat
    setError(null);    // Önceki hataları temizle
    setResults([]);    // Yeni arama öncesi eski sonuçları temizle

    const formData = new FormData();
    
    // Eğer dosya(lar) varsa, ilk dosyayı FormData'ya ekle
    if (files && files.length > 0) {
      formData.append('image', files[0]); // Proje gereği tek görsel beklediğimiz için ilk dosyayı alıyoruz
      console.log("Yüklenecek görsel:", files[0].name);
    }
    
    // Eğer metin mesajı varsa, onu da FormData'ya ekle (opsiyonel)
    if (message.trim() !== '') {
        formData.append('text_prompt', message.trim());
    }

    try {
      // Arka uç API'sine POST isteği gönder
      const response = await fetch('http://localhost:5000/upload-image', {
        method: 'POST',
        body: formData, // FormData otomatik olarak Content-Type: multipart/form-data ayarlar
      });

      if (!response.ok) {
        // Hata durumunda sunucudan gelen yanıtı oku ve hata fırlat
        const errorData = await response.json();
        throw new Error(errorData.error || 'Sunucudan hata döndü.');
      }

      // Başarılı yanıtta veriyi JSON olarak al
      const data = await response.json();
      setResults(data.results); // Gelen sonuçları state'e kaydet
      console.log('API yanıtı:', data);
    } catch (err: any) { // Hata yakalama
      console.error('Görsel yükleme/arama hatası:', err);
      setError(err.message); // Hata mesajını state'e kaydet
    } finally {
      setLoading(false); // Yükleme durumunu bitir
    }
  };

  // Sesli mesajlar için fonksiyon (şu an için sadece loglama)
  const handleVoiceMessage = (audioBlob: Blob) => {
    console.log("Voice message received:", audioBlob);
    // Burada sesli mesajın işlenmesiyle ilgili kodlar yer alacak
  };

  // Öneri kartları için veriler
  const suggestions = [
    "Save me time",
    "Explain something",
    "Give me study tips",
    "Help me plan",
  ];

  return (
    <div className="h-screen w-full bg-shoppi-primary-bg font-google-sans overflow-hidden">
      {/* Sabit üst başlık (Fixed top header) */}
      <TopHeader />

      {/* Ana sohbet uygulaması alanı (Main chat application) */}
      <main className="flex flex-col h-full">
        {/* Üst gezinme çubuğu (Top navigation bar) */}
        <TopNavigationBar />

        {/* Kenar çubuğu ve içerik alanını içeren ana düzen (Main layout with sidebar and content) */}
        <div className="flex flex-1 relative">
          {/* Sol kenar çubuğu (Left sidebar) */}
          <Sidebar />

          {/* Ana içerik alanı (Main content area) */}
          <div className="flex-1 flex flex-col justify-center items-center px-8 py-12 bg-shoppi-primary-bg relative">
            {/* Hoş geldiniz bölümü (Welcome section) */}
            <div className="text-center mb-16 max-w-4xl">
              <h1 className="text-shoppi-xl font-medium mb-12 bg-shoppi-gradient bg-clip-text text-transparent font-google-sans">
                Meet Shoppi, your personal AI assistant
              </h1>

              {/* Öneri kartları (Suggestion cards) */}
              <div className="flex gap-2.5 mb-16 max-w-3xl mx-auto">
                {suggestions.map((suggestion, index) => (
                  <SuggestionCard
                    key={index}
                    onClick={() => handleSendMessage(suggestion)} // Öneri tıklamalarında da handleSendMessage kullanılıyor
                  >
                    {suggestion}
                  </SuggestionCard>
                ))}
              </div>
            </div>

            {/* Input alanı (ChatInput) - Alt kısımda konumlandırılmış */}
            <div className="absolute bottom-8 left-8 right-8">
              <ChatInput
                onSendMessage={handleSendMessage} // ChatInput'tan mesaj ve dosyaları alacak fonksiyon
                onVoiceMessage={handleVoiceMessage} // Sesli mesajları işleyecek fonksiyon
                placeholder={loading ? "Aranıyor..." : "Ask Shoppi"} // Yükleme durumuna göre placeholder değiştir
              />
            </div>

            {/* Arama sonuçlarını ve hata mesajlarını gösteren kısım */}
            {error && (
                <p 
                    style={{ 
                        color: '#ef4444', // Tailwind red-500
                        position: 'absolute', 
                        bottom: '150px',
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        border: '1px solid #dc2626', // Tailwind red-600
                        zIndex: 10 // Üstte görünmesi için
                    }}
                >
                    Hata: {error}
                </p>
            )}
            
            {results.length > 0 && (
              <div 
                  className="search-results-display" 
                  style={{ 
                      position: 'absolute', 
                      bottom: '150px', 
                      width: 'calc(100% - 64px)', // px-8 (sol 32 + sağ 32)
                      maxHeight: '400px', // Yüksekliği sınırlayalım
                      overflowY: 'auto', // Fazla içerik olursa scrollbar çıksın
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Hafif arkaplan
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      backdropFilter: 'blur(5px)', // Bulanıklık efekti
                      WebkitBackdropFilter: 'blur(5px)', // Safari desteği
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      zIndex: 10 // Üstte görünmesi için
                  }}
              >
                <h3 className="text-white text-lg font-medium mb-4">Bulunan Ürünler:</h3>
                <ul className="list-none p-0 m-0">
                  {results.map((product, index) => (
                    <li key={index} className="mb-3 p-3 bg-shoppi-secondary-bg rounded flex items-center space-x-4">
                        {/* Ürün görseli için placeholder - gerçek projede product.imageUrl kullanabilirsiniz */}
                        <div className="w-16 h-16 bg-gray-700 rounded flex-shrink-0">
                            {/* Eğer arka uçtan görsel URL'si gelirse: */}
                            {/* {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded" />} */}
                            {/* Yoksa basit bir placeholder */}
                            {!product.imageUrl && <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-400 text-xs">No Image</div>}
                        </div>
                        <div>
                            <h4 className="text-white text-md font-semibold">{product.name}</h4>
                            <p className="text-gray-300 text-sm">Fiyat: <span className="font-bold text-shoppi-accent">{product.price}</span></p>
                            <p className="text-gray-400 text-xs mt-1">
                                <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-shoppi-info hover:underline">
                                    Ürüne Git
                                </a>
                            </p>
                        </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;