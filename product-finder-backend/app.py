import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import vision # Vision AI istemcisini import et

app = Flask(__name__)
CORS(app)

# Google Vision AI istemcisini başlat
# Ortam değişkeni (GOOGLE_APPLICATION_CREDENTIALS) ayarlanmışsa otomatik olarak kimlik bilgilerini kullanır.
vision_client = vision.ImageAnnotatorClient()

@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        print("Hata: İstekte görsel bulunamadı.")
        return jsonify({'error': 'No image part in the request'}), 400

    image_file = request.files['image']

    if image_file.filename == '':
        print("Hata: Görsel dosyası seçilmedi.")
        return jsonify({'error': 'No selected image file'}), 400

    if image_file:
        print(f"Arka uca görsel alındı: {image_file.filename}")

        # Görsel dosyasını Vision AI için hazırla
        # Dosya nesnesini doğrudan okuyabiliriz
        content = image_file.read()
        image = vision.Image(content=content)

        try:
            # Vision AI Product Search veya Web Detection API'sini kullanma
            # Product Search API, ürünleri bulmak için daha spesifiktir.
            # Ancak, Product Search API'sini kullanmak için Google Cloud'da Product Set'ler oluşturmanız gerekir.
            # Daha basit bir başlangıç için Web Detection veya Label Detection kullanabiliriz.
            # Web Detection, görseldeki öğelerin web'de nerelerde geçtiğini bulur (ürün bağlantıları için faydalı olabilir).

            # Web Detection API'si örneği (görselin web'deki sonuçlarını arar)
            response = vision_client.web_detection(image=image)
            web_detection = response.web_detection

            found_products = []

            if web_detection.best_guess_labels:
                print("En iyi tahminler:")
                for label in web_detection.best_guess_labels:
                    print(f"- {label.label}")

            if web_detection.pages_with_matching_images:
                print("\nEşleşen görsellerin olduğu sayfalar:")
                for page in web_detection.pages_with_matching_images:
                    # Burada gerçek ürün bağlantıları bulmaya çalışıyoruz
                    # Bu kısım, API'den gelen veriye göre uyarlanmalıdır.
                    # Genellikle, web sayfalarını tarayıp ürün bilgilerini çekmek daha karmaşık bir süreçtir.
                    # Şimdilik, sadece bağlantıları listeleyelim ve sahte fiyat/isim ekleyelim.
                    if page.full_matching_images:
                        for i, full_match in enumerate(page.full_matching_images):
                            # Sadece ilk 3-5 sonucu alalım
                            if len(found_products) >= 5: # Limit sonuçları
                                break
                            # Linki ve bir placeholder adı/fiyatı ekle
                            found_products.append({
                                'name': f"Bulunan Ürün ({full_match.url.split('/')[-1].split('?')[0]})", # URL'den basit bir isim
                                'price': f"{((i + 1) * 10) + 9}.99 TL", # Sahte fiyat
                                'link': full_match.url,
                                'imageUrl': full_match.url # Bulunan görselin URL'sini kullan
                            })
                    if len(found_products) >= 5:
                        break

            # Eğer Web Detection'dan sonuç gelmezse veya daha genel bir etiketleme istersek
            if not found_products:
                # Label Detection (Etiketleme) API'si örneği (görseldeki nesneleri ve kavramları etiketler)
                response = vision_client.label_detection(image=image)
                labels = response.label_annotations

                if labels:
                    print("\nAlgılanan Etiketler:")
                    for i, label in enumerate(labels[:5]): # İlk 5 etiketi al
                        found_products.append({
                            'name': f"Etiket: {label.description}",
                            'price': f"Bilinmiyor",
                            'link': "javascript:void(0)", # Bağlantı yoksa
                            'imageUrl': 'https://via.placeholder.com/150/CCCCCC/FFFFFF?text=Label'
                        })
                        print(f"- {label.description} (Score: {label.score:.2f})")
                else:
                    print("\nHiçbir etiket algılanmadı.")
                    found_products.append({
                        'name': 'Ürün bulunamadı',
                        'price': 'N/A',
                        'link': 'javascript:void(0)',
                        'imageUrl': 'https://via.placeholder.com/150/DDDDDD/000000?text=Not+Found'
                    })


            return jsonify({'results': found_products}), 200

        except Exception as e:
            print(f"Vision AI API çağrısında hata oluştu: {e}")
            return jsonify({'error': f'Vision AI API error: {str(e)}'}), 500

    print("Hata: Beklenmedik bir durum oluştu.")
    return jsonify({'error': 'Something went wrong'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)