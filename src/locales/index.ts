import { getLocalUrlParams } from '../utils/storageUtils'

/**
 * en - 英语；es - 西班牙语; pt - 葡萄牙语; th - 泰语;
 * in- 印尼语; de - 德语; fr-法语; hi - 印地语; fil - 菲律宾语;
 * tr - 土耳其语; ja - 日语; ko - 韩语; ru - 俄语; zh-TW - 中文繁体;
 */

const text: any = {
  en: {
    限时: 'Limited Time',
    选项1: 'Option One',
    三日免费: '+3 Days for FREE',
    七天vip: 'Subscribe for <b>7</b> Days',
    顿号: ', ',
    三日赠送: 'Get <b>3</b> Days Free',
    单位: '$',
    选项1描述: 'Unlimited Access to All Series for 10 Days',
    订阅: 'Subscribe Now',
    选项二: 'Option Two',
    折扣: 'OFF',
    金币: ' coins',
    奖励金币: ' reward coins',
    选项2描述: 'Unlock All Paid Episodes',
    充值: 'Top up ($1/3)',
    推荐视频: 'Enjoy Top Picks\nwith Your Offers',
    规则: 'Rules:',
    订阅规则:
      'During the event, you can only subscribe to VIP once. \n Subscriptions auto-renew at original price, charged 24 hours before each period, unless canceled. The additional 3 free days will be activated after the subscription expires. To ensure eligibility for the 3 free days, manage your subscription settings appropriately. Any adjustments to auto-renewal must be made before the current period ends to avoid charges for the subsequent period. \nSubscriptions activate within 24 hours of purchase, pending approval from the App Store. \nSubscriptions auto-renew at original price, charged 24 hours before each period, unless canceled. \n Cancel iOS subscriptions anytime via Settings>iTunes & App Store > [Your Apple ID] > Subscriptions > ReelShort, 24 hours before renewal.',
    积分点规则:
      'During the event, you can top up 3 times to earn coins. \n The coins will be sent directly to your account. Please check it in My Wallet.\nReward Coins will expire and are used first when unlocking content.\nThe coins are virtual items and cannot be refunded.\nUse coins for this product only.\nPromotion varies by geographical region and user kind.\nIf you have any questions, please go to Profile > Feedback > Contact Us.\nThe final interpretation right of the event belongs to ReelShort.',
    apple说明: 'This event is not sponsored by or associated with Apple Inc.',
    disabledTip: 'This event is not available now. Thanks for your interest! ',
  },
  es: {
    限时: 'Tiempo limi',
    选项1: 'Opción uno',
    三日免费: 'Obtenga 3 días GRATIS',
    七天vip: '¡Suscríbale por <b>7</b> días',
    顿号: ', ',
    三日赠送: 'obtenga <b>3</b> días gratis!',
    单位: '$',
    选项1描述: 'Acceso ilimitado a todas las series durante 10 días',
    订阅: 'Suscríbale ahora',
    选项二: 'Opción dos',
    折扣: 'DE DESCUENTO',
    金币: ' Monedas',
    奖励金币: ' Monedas de Recompensa',
    选项2描述: 'Desbloquea todos los episodios pagos GRATIS',
    充值: 'Recargar ($1/3)',
    推荐视频: 'Disfruta de las mejores opciones con sus ofertas',
    规则: 'Normas:',
    订阅规则:
      'Durante el evento, solo podrá suscribirle a VIP una vez.\nLas suscripciones se renuevan automáticamente al precio original y se cobran 24 horas antes de cada período, a menos que se cancelen. Los 3 días gratuitos adicionales se activarán una vez que expire la suscripción.Para asegurar la elegibilidad para los 3 días gratis, gestione adecuadamente la configuración de su suscripción. Cualquier ajuste en la renovación automática debe hacerse antes de que finalice el período actual para evitar cargos por el período siguiente.\nLas suscripciones se activan dentro de las 24 horas posteriores a la compra, sujeta a la aprobación de la App Store.\n Las suscripciones se renuevan automáticamente al precio original y se cobran 24 horas antes de cada período, a menos que se cancelen.\nCancela las suscripciones de iOS en cualquier momento a través de Configuración>iTunes y App Store> [Tu ID de Apple]> Suscripciones> ReelShort, 24 horas antes de la renovación.',
    积分点规则:
      'Durante el evento, puede recargar 3 veces para ganar monedas.\nLas monedas se enviarán directamente a su cuenta. Revíselas en Mi Bolsa.\nLas monedas de recompensa caducarán y se usarán primero al desbloquear contenido.\nLas monedas son artículos virtuales y no pueden reembolsarse.\n Utilice monedas solo para este producto.\n La promoción varía según la región geográfica y el tipo de usuario.\nSi tiene alguna pregunta, vea a Perfil > Feedback> Contáctanos.\nEl derecho de interpretación final del evento pertenece a ReelShort.',
    apple说明: 'Este evento no está patrocinado ni asociado con Apple Inc.',
    disabledTip:
      'Esta evento no está disponible ahora. ¡Gracias por tu interés!',
  },
  pt: {
    限时: 'Tempo',
    选项1: 'Opção Um',
    三日免费: 'Ganhe 3 dias GRÁTIS',
    七天vip: 'Assine por <b>7</b> dias',
    顿号: ', ',
    三日赠送: 'ganhe <b>3</b> dias grátis!',
    单位: '$',
    选项1描述: 'Acesso Ilimitado a Todas as Séries por 10 Dias',
    订阅: 'Assine Agora',
    选项二: 'Opção Dois',
    折扣: 'DE DESCONTO',
    金币: ' Moedas',
    奖励金币: ' Moedas de Recompensa',
    选项2描述: 'Desbloqueie Todos os Episódios Pagos GRATUITAMENTE',
    充值: 'Recarga ($1/3)',
    推荐视频: 'Aproveite as Principais Escolhas com Suas Ofertas',
    规则: 'Regras:',
    订阅规则:
      'Durante o evento, você só pode assinar o VIP uma vez.\nAs assinaturas são renovadas automaticamente pelo preço original, cobradas 24 horas antes do fim do período vigente, a menos que sejam canceladas. Os 3 dias adicionais gratuitos serão ativados após o término da assinatura. Para garantir a elegibilidade para os 3 dias gratuitos, gerencie adequadamente as configurações de sua assinatura. Quaisquer ajustes na renovação automática devem ser feitos antes do término do período atual para evitar cobranças pelo período subsequente.\nAs assinaturas são ativadas dentro de 24 horas após a compra, aguardando aprovação da App Store.\nAs assinaturas são renovadas automaticamente pelo preço original, cobradas 24 horas antes do fim do período vigente, a menos que sejam canceladas.\nCancele as assinaturas iOS a qualquer momento em Ajustes>iTunes e App Store > [Seu ID Apple] > Assinaturas > ReelShort, 24 horas antes da renovação.',
    积分点规则:
      "Durante o evento, você pode recarregar 3 vezes para ganhar moedas.\nAs moedas serão enviadas diretamente para a sua conta. Verifique em 'Minha Carteira'.\nAs moedas de recompensa expiram e são usadas primeiro para desbloquear conteúdo.\nAs moedas são itens virtuais e não podem ser reembolsadas.\nUse moedas apenas para este produto.\nA promoção varia de acordo com a região geográfica e o tipo de usuário.\nSe você tiver alguma dúvida, acesse Perfil > Feedback > Fale conosco.\nO direito de interpretação final do evento pertence à ReelShort.",
    apple说明: 'Este evento não é patrocinado ou associado à Apple Inc.',
    disabledTip:
      'Este evento não está disponível no momento. Obrigado pelo seu interesse!',
  },
  th: {
    限时: 'ในเวลาจำกัด',
    选项1: 'ตัวเลือกที่ 1',
    三日免费: 'รับ 3 วันฟรี',
    七天vip: 'สมัครสมาชิก <b>7</b> วัน',
    顿号: ', ',
    三日赠送: 'รับฟรีอีก <b>3</b> วัน!',
    单位: '$',
    选项1描述: 'เข้าถึงละครที่น่าทึ่งทั้งหมดได้ไม่จำกัดเป็นเวลา 10 วัน',
    订阅: 'สมัครสมาชิกตอนนี้',
    选项二: 'ตัวเลือกที่ 2',
    折扣: 'ลด',
    金币: ' เหรียญ',
    奖励金币: ' เหรียญรางวัล',
    选项2描述: 'ปลดล็อกทุกตอนที่ต้องจ่ายเงินได้ฟรี',
    充值: 'เติมเงิน ($1/3)',
    推荐视频: 'เพลิดเพลินไปกับตัวเลือกยอดนิยมด้วยข้อเสนอของคุณ',
    规则: 'กฎ:',
    订阅规则:
      'ในระหว่างกิจกรรม คุณสามารถสมัครสมาชิก VIP ได้เพียงครั้งเดียวเท่านั้น\nการสมัครสมาชิกต่ออายุอัตโนมัติในราคาเดิม เรียกเก็บเงิน 24 ชั่วโมงก่อนแต่ละช่วงเวลา เว้นแต่จะยกเลิก วันฟรีเพิ่มเติม 3 วันจะเปิดใช้งานหลังจากการสมัครใช้งานหมดอายุ เพื่อให้แน่ใจว่ามีสิทธิ์ได้รับ 3 วันฟรี โปรดจัดการการตั้งค่าการสมัครสมาชิกของคุณอย่างเหมาะสม การปรับเปลี่ยนการต่ออายุอัตโนมัติใดๆ ต้องทำก่อนที่ช่วงเวลาปัจจุบันจะสิ้นสุดลงเพื่อหลีกเลี่ยงการเรียกเก็บเงินสำหรับช่วงเวลาถัดไป\nการสมัครสมาชิกจะเปิดใช้งานภายใน 24 ชั่วโมงหลังจากซื้อ รอการอนุมัติจาก App Store\nการสมัครสมาชิกต่ออายุอัตโนมัติในราคาเดิม เรียกเก็บเงิน 24 ชั่วโมงก่อน แต่ละช่วงเวลา เว้นแต่จะยกเลิก\nยกเลิกการสมัครใช้งาน iOS ได้ตลอดเวลา ผ่านการตั้งค่า > iTunes และ App Store > [Apple ID ของคุณ] > การสมัครสมาชิก > ReelShort 24 ชั่วโมงก่อนวันต่ออายุ',
    积分点规则:
      'ในระหว่างกิจกรรม คุณสามารถเติมเงิน 3 ครั้ง เพื่อรับเหรียญ\nเหรียญจะถูกส่งไปยังบัญชีของคุณโดยตรง โปรดตรวจสอบที่กระเป๋าเงินของฉัน\nเหรียญรางวัลจะหมดอายุและใช้ก่อนเมื่อปลดล็อกเนื้อหา\nเหรียญเป็นไอเท็มเสมือนจริงและไม่สามารถคืนเงินได้\n ใช้เหรียญสำหรับสินค้านี้เท่านั้น\nโปรโมชั่นจะแตกต่างกันไปตามภูมิภาคทางภูมิศาสตร์และประเภทของผู้ใช้\nหากคุณมีคำถามใดๆ โปรดไปที่โปรไฟล์ > ข้อเสนอแนะ > ติดต่อเรา\nสิทธิ์ในการตีความสุดท้ายของกิจกรรมนี้เป็นของ ReelShort',
    apple说明: 'กิจกรรมนี้ไม่ได้รับการสนับสนุนจากหรือเกี่ยวข้องกับ Apple Inc.',
    disabledTip: 'ขณะนี้กิจกรรมนี้ไม่พร้อมให้บริการ ขอบคุณที่สนใจ!',
  },
  in: {
    限时: 'Terbatas',
    选项1: 'Opsi Satu',
    三日免费: 'Dapatkan 3 Hari GRATIS',
    七天vip: 'Beli selama <b>7</b> hari',
    顿号: ', ',
    三日赠送: 'Dapatkan <b>3</b> Hari Gratis!',
    单位: '$',
    选项1描述: 'Akses Tak Terbatas ke Semua Seri selama 10 Hari',
    订阅: 'Berlangganan Sekarang',
    选项二: 'Opsi Dua',
    折扣: 'DISKON',
    金币: ' Koin',
    奖励金币: ' Koin Hadiah',
    选项2描述: 'Buka Semua Episode Berbayar GRATIS',
    充值: 'Isi Ulang ($1/3)',
    推荐视频: 'Nikmati Pilihan Terbaik dengan Penawaranmu',
    规则: 'Aturan:',
    订阅规则:
      'Selama acara berlangsung, kamu hanya dapat berlangganan VIP satu kali.\nLangganan diperbarui secara otomatis dengan harga awal, ditagihkan 24 jam sebelum setiap periode, kecuali dibatalkan. Tambahan 3 hari gratis akan diaktifkan setelah langganan berakhir. Untuk memastikan kelayakan mendapatkan 3 hari gratis, kelola pengaturan langganan Anda dengan tepat. Setiap penyesuaian terhadap perpanjangan otomatis harus dilakukan sebelum periode saat ini berakhir untuk menghindari biaya untuk periode berikutnya.\nLangganan diaktifkan dalam waktu 24 jam setelah pembelian, menunggu persetujuan dari App Store.\nLangganan diperbarui secara otomatis dengan harga awal, ditagihkan 24 jam sebelum setiap periode, kecuali dibatalkan.\nBatalkan langganan iOS kapan saja melalui Pengaturan>iTunes & App Store> [ID Apple-mu]> Langganan> ReelShort, 24 jam sebelum perpanjangan.',
    积分点规则:
      'Selama acara berlangsung, kamu dapat mengisi ulang 3 kali untuk mendapatkan koin.\nKoin akan dikirim langsung ke akunmu. Silakan periksa di Dompetku.\nKoin Hadiah akan kedaluwarsa dan digunakan pertama kali saat membuka konten.\nKoin adalah barang virtual dan tidak dapat dikembalikan.\nGunakan koin hanya untuk produk ini.\nPromosi bervariasi berdasarkan wilayah geografis dan jenis pengguna.\nJika kamu memiliki pertanyaan, silakan buka Profil > Umpan Balik > Hubungi Kami.\nHak interpretasi akhir promosi ini adalah milik ReelShort.',
    apple说明: 'Acara ini tidak disponsori oleh atau terkait dengan Apple Inc.',
    disabledTip:
      'Acara ini tidak tersedia saat ini. Terima kasih atas minat Anda!',
  },
  de: {
    限时: 'Restzeit',
    选项1: 'Option Eins',
    三日免费: 'Erhalte 3 Tage GRATIS',
    七天vip: '<b>7</b> Tage abonnieren',
    顿号: ', ',
    三日赠送: '<b>3</b> Tage gratis erhalten!',
    单位: '$',
    选项1描述: 'Unbegrenzter Zugang zu allen Serien für 10 Tage',
    订阅: 'Jetzt abonnieren',
    选项二: 'Option Zwei',
    折扣: 'RABATT',
    金币: ' Münzen',
    奖励金币: ' Belohnungsmünzen',
    选项2描述: 'Alle bezahlten Episoden KOSTENLOS freischalten',
    充值: 'Aufladen ($1/3)',
    推荐视频: 'Genieße Top Picks mit deinen Angeboten',
    规则: 'Regeln:',
    订阅规则:
      'Während des Events kannst du dich nur einmal als VIP registrieren.\nAbonnements verlängern sich automatisch zum ursprünglichen Preis und werden 24 Stunden vor dem jeweiligen Zeitraum berechnet, sofern sie nicht gekündigt werden. Die zusätzlichen 3 kostenlosen Tage werden nach Ablauf des Abonnements aktiviert. Um die Berechtigung für die 3 kostenlosen Tage sicherzustellen, verwalten Sie Ihre Abonnementeinstellungen entsprechend. Änderungen an der automatischen Verlängerung müssen vor Ablauf der aktuellen Periode vorgenommen werden, um Gebühren für die folgende Periode zu vermeiden.\nAbonnements werden innerhalb von 24 Stunden nach dem Kauf aktiviert, vorbehaltlich der Genehmigung durch den App Store.\nDie Abonnements verlängern sich automatisch zum ursprünglichen Preis und werden 24 Stunden vor dem jeweiligen Zeitraum berechnet, sofern sie nicht gekündigt werden.\nDu kannst iOS-Abonnements jederzeit über Einstellungen > iTunes & App Store > [Deine Apple ID] > Abonnements > ReelShort, 24 Stunden vor der Verlängerung, kündigen.',
    积分点规则:
      'Während des Events kannst du 3 Mal nachladen, um Münzen zu verdienen.\nDie Münzen werden direkt in deinen Account gebucht. Bitte überprüfe dies in „Mein Geldbeutel“.\nBelohnungsmünzen verfallen und werden zuerst für das Freischalten von Inhalten verwendet.\nDie Münzen sind virtuelle Gegenstände und können nicht zurückerstattet werden.\nVerwenden Sie Münzen nur für dieses Produkt.\nDie Promotion variiert je nach geografischer Region und Art des Nutzers.\nWenn du Fragen hast, gehe bitte zu Profil > Feedback > Kontakt mit uns.\nDas endgültige Interpretationsrecht des Events liegt bei ReelShort.',
    apple说明:
      'Dieses Event wird nicht von Apple Inc. gesponsert oder steht damit in Verbindung.',
    disabledTip:
      'Diese Veranstaltung ist derzeit nicht verfügbar. Vielen Dank für Ihr Interesse!',
  },
  fr: {
    限时: 'Temps limité',
    选项1: 'Option Un',
    三日免费: '+3 jours GRATUITS',
    七天vip: 'Abonne-toi <b>7</b> jours',
    顿号: ', ',
    三日赠送: '+<b>3</b> jours offerts',
    单位: '$',
    选项1描述: 'Accès illimité à toutes les séries pendant 10 jours',
    订阅: "S'abonner maintenant",
    选项二: 'Option Deux',
    折扣: 'DE RÉDUCTION',
    金币: ' Pièces',
    奖励金币: ' Pièces de Récompense',
    选项2描述: 'Débloque tous les épisodes payants GRATUITEMENT',
    充值: 'Recharge ($1/3)',
    推荐视频: 'Profite des meilleurs épisodes avec tes offres',
    规则: 'Règlement :',
    订阅规则:
      "Pendant l'événement, tu ne peux t'abonner qu'une seule fois en VIP.\nLes abonnements sont renouvelés automatiquement au prix d'origine, facturés 24 heures avant chaque échéance, sauf en cas d'annulation. Les 3 jours gratuits supplémentaires seront activés après l'expiration de l'abonnement. Pour garantir l'éligibilité aux 3 jours gratuits, gérez vos paramètres d'abonnement de manière appropriée. Toute modification du renouvellement automatique doit être effectuée avant la fin de la période en cours pour éviter les frais pour la période suivante.\nLes abonnements s'activent dans les 24 heures suivant l'achat, dans l'attente de l'approbation de l'App Store.\nLes abonnements se renouvellent automatiquement au prix d'origine, facturé 24 heures avant chaque échéance, sauf en cas d'annulation.\nAnnule les abonnements iOS à tout moment via Réglages>iTunes & App Store > [Ton identifiant Apple] > Abonnements > ReelShort, 24 heures avant le renouvellement.",
    积分点规则:
      "Pendant l'événement, tu peux faire des recharges 3 fois pour gagner des pièces.\nLes pièces seront envoyées directement sur ton compte. Tu peux les consulter dans Mon porte-monnaie.\nLes pièces de récompense expireront et seront utilisées en priorité pour débloquer du contenu.\nLes pièces sont des éléments virtuels et ne peuvent pas être remboursées.\nUtilisez des pièces uniquement pour ce produit.\nLa promotion varie selon la région géographique et le type d'utilisateur.\nSi tu as des questions, rends-toi sur Profil > Feedback > Nous contacter.\nLe droit d'interprétation final de l'événement appartient à ReelShort.",
    apple说明: "Cet événement n'est pas sponsorisé par ou associé à Apple Inc.",
    disabledTip:
      "Cet événement n'est pas disponible actuellement. Merci de votre intérêt !",
  },
  hi: {
    限时: 'सीमित समय',
    选项1: 'विकल्प एक',
    三日免费: '+ 3 दिन मुफ्त',
    七天vip: '<b>7</b> दिनों के लिए सदस्यता लें',
    顿号: ', ',
    三日赠送: '<b>3</b> दिन मुफ्त पाएं',
    单位: '$',
    选项1描述: '10 दिनों के लिए सभी सीरीज का असीमित एक्सेस',
    订阅: 'अभी सदस्यता लें',
    选项二: 'विकल्प दो',
    折扣: 'की छूट',
    金币: ' सिक्के',
    奖励金币: ' रिवॉर्ड सिक्के',
    选项2描述: 'सभी पेड एपिसोड अनलॉक करें',
    充值: 'रिचार्ज करें ($1/3)',
    推荐视频: 'अपने ऑफ़र के साथ शीर्ष पसंद का आनंद लें',
    规则: 'नियम:',
    订阅规则:
      'इवेंट के दौरान, आप केवल एक बार वीआईपी सदस्यता ले सकते हैं।\nसदस्यता स्वतः मूल मूल्य पर नवीनीकृत होती है, प्रत्येक अवधि से 24 घंटे पहले शुल्क लिया जाता है, जब तक कि रद्द न किया जाए। अतिरिक्त 3 मुफ्त दिन सदस्यता समाप्त होने के बाद सक्रिय होंगे। 3 मुफ्त दिनों के लिए पात्रता सुनिश्चित करने के लिए, अपनी सदस्यता सेटिंग्स को उचित रूप से प्रबंधित करें। अगले अवधि के लिए शुल्क से बचने के लिए किसी भी स्वतः-नवीनीकरण समायोजन को वर्तमान अवधि समाप्त होने से पहले करना होगा।\nसदस्यता खरीद के 24 घंटे के भीतर सक्रिय होती है, ऐप स्टोर से स्वीकृति लंबित है।\nसदस्यता स्वतः मूल मूल्य पर नवीनीकृत होती है, प्रत्येक अवधि से 24 घंटे पहले शुल्क लिया जाता है, जब तक कि रद्द न किया जाए।\nनवीनीकरण से 24 घंटे पहले iOS सदस्यताओं को कभी भी रद्द करें: सेटिंग्स > iTunes & App Store > [आपका Apple ID] > Subscriptions > ReelShort।',
    积分点规则:
      'इवेंट के दौरान, आप 3 बार टॉप अप करके सिक्के कमा सकते हैं।\nसिक्के सीधे आपके खाते में भेज दिए जाएंगे। कृपया इसे "माई वॉलेट" में जांचें।\nरिवॉर्ड सिक्कों की समय सीमा समाप्त हो जाएगी और सामग्री अनलॉक करने पर पहले उनका उपयोग किया जाएगा।\nसिक्के वर्चुअल आइटम हैं और इन्हें वापस नहीं किया जा सकता।\nसिक्कों का उपयोग केवल इस उत्पाद के लिए करें।\nप्रोमोशन भौगोलिक क्षेत्र और उपयोगकर्ता प्रकार के अनुसार भिन्न हो सकता है।\n यदि आपके कोई प्रश्न हैं, तो कृपया प्रोफाइल > फीडबैक > संपर्क करें पर जाएं।\nइवेंट की अंतिम व्याख्या का अधिकार ReelShort के पास है।',
    apple说明:
      'यह कार्यक्रम Apple Inc. द्वारा प्रायोजित नहीं है और न ही इसका उससे कोई संबंध है।',
    disabledTip: 'यह कार्यक्रम अभी उपलब्ध नहीं है। आपकी रुचि के लिए धन्यवाद!',
  },
  fil: {
    限时: 'Limitado',
    选项1: 'Opsyon Isa',
    三日免费: '+ 3 Araw nang LIBRE',
    七天vip: 'Mag-subscribe ng <b>7</b> Araw,',
    顿号: ', ',
    三日赠送: 'Libreng <b>3</b> Araw',
    单位: '$',
    选项1描述: 'Walang Limitasyong Access sa Lahat ng Serye sa loob ng 10 Araw',
    订阅: 'Mag-subscribe Ngayon',
    选项二: 'Opsyon Dalawa',
    折扣: 'DISKUWENTO',
    金币: ' coins',
    奖励金币: ' reward coins',
    选项2描述: 'I-unlock ang Lahat ng Bayad na Episode',
    充值: 'Mag-load ($1/3)',
    推荐视频: 'Tangkilikin ang Kamangha-manghang mga Drama',
    规则: 'Mga Patakaran:',
    订阅规则:
      'Sa panahon ng kaganapan, maaari ka lamang mag-subscribe sa VIP nang isang beses.\nAng mga subscription ay awtomatikong magre-renew sa orihinal na presyo, na sisingilin 24 oras bago ang bawat panahon, maliban kung kinansela. Ang karagdagang 3 libreng araw ay maa-activate pagkatapos mag-expire ang subscription. Upang matiyak ang pagiging karapat-dapat para sa 3 libreng araw, i-manage nang maayos ang iyong mga setting ng subscription. Anumang pagbabago sa auto-renewal ay dapat gawin bago matapos ang kasalukuyang panahon upang maiwasan ang singil para sa susunod na panahon.\nAng mga subscription ay maa-activate sa loob ng 24 oras mula sa pagbili, habang hinihintay ang pag-apruba mula sa App Store.\nAng mga subscription ay awtomatikong magre-renew sa orihinal na presyo, na sisingilin 24 oras bago ang bawat panahon, maliban kung kinansela.\nKanselahin ang mga subscription sa iOS anumang oras sa pamamagitan ng Settings > iTunes & App Store > [Iyong Apple ID] > Subscriptions > ReelShort, 24 oras bago ang pag-renew.',
    积分点规则:
      'Sa panahon ng kaganapan, maaari kang mag-top up ng 3 beses upang makakuha ng coins.\nAng mga coins ay direktang ipapadala sa iyong account. Pakisuri ito sa Aking Wallet.\nMag-e-expire ang Reward Coins at unang magagamit kapag nag-unlock ng nilalaman.\nAng mga coins ay virtual na item at hindi maaaring i-refund.\nGamitin ang coins para lamang sa produktong ito.\nAng promosyon ay nag-iiba ayon sa heograpikal na rehiyon at uri ng user.\nKung mayroon kang anumang mga katanungan, pumunta sa Profile > Feedback > Contact Us.\nAng karapatang panghuling interpretasyon ng kaganapan ay pag-aari ng ReelShort.',
    apple说明:
      'Ang kaganapang ito ay hindi inisponsor o konektado sa Apple Inc.',
    disabledTip:
      'Ang kaganapang ito ay hindi kasalukuyang magagamit. Salamat sa iyong interes!',
  },
  tr: {
    限时: 'Sınırlı Süre',
    选项1: 'Seçenek Bir',
    三日免费: '+ 3 Gün ÜCRETSİZ',
    七天vip: '<b>7</b> Gün Abone Ol',
    顿号: ', ',
    三日赠送: '<b>3</b> Gün Ücretsiz Kazan  ',
    单位: '$',
    选项1描述: 'Tüm Dizilere 10 Gün Boyunca Sınırsız Erişim',
    订阅: 'Hemen Abone Ol',
    选项二: 'Seçenek İki',
    折扣: 'İNDİRİM',
    金币: ' Koin',
    奖励金币: ' Ödül Koin',
    选项2描述: 'Tüm Ücretli Bölümleri Aç',
    充值: 'Yükleme ($1/3)',
    推荐视频: 'Tekliflerinizle En İyi Seçimleri Keşfedin',
    规则: 'Kurallar:',
    订阅规则:
      "Etkinlik sırasında VIP aboneliği yalnızca bir kez yapabilirsiniz.\nAbonelikler, iptal edilmedikçe her dönemden 24 saat önce, orijinal fiyat üzerinden otomatik olarak yenilenir. Ekstra 3 ücretsiz gün, abonelik süresi dolduktan sonra etkinleştirilecektir. 3 ücretsiz gün hakkından yararlanmak için abonelik ayarlarınızı uygun şekilde yönetin. Otomatik yenileme ile ilgili herhangi bir ayarlama, sonraki dönem için ücretlendirmeyi önlemek amacıyla mevcut dönem bitmeden önce yapılmalıdır.\nAbonelikler, App Store'dan onay bekleyen, satın alımdan sonraki 24 saat içinde etkinleşir.\nAbonelikler, iptal edilmedikçe her dönemden 24 saat önce, orijinal fiyat üzerinden otomatik olarak yenilenir.\niOS aboneliklerini, yenilemeden 24 saat önce, Ayarlar > iTunes ve App Store > [Apple Kimliğiniz] > Abonelikler > ReelShort yoluyla istediğiniz zaman iptal edebilirsiniz.",
    积分点规则: `Etkinlik sırasında, coin kazanmak için 3 kez bakiye yükleyebilirsiniz.\nCoin'ler doğrudan hesabınıza gönderilecektir. Lütfen ""Cüzdanım"" bölümünden kontrol edin.\nÖdül Coin'leri sona erecek ve içerik kilidini açarken öncelikli olarak kullanılacaktır.\nCoin'ler sanal öğelerdir ve iade edilemez.\nCoin'leri yalnızca bu ürün için kullanın.\nPromosyon, coğrafi bölgeye ve kullanıcı türüne göre değişiklik gösterir.\nHerhangi bir sorunuz varsa, lütfen Profil > Geri Bildirim > Bize Ulaşın bölümüne gidin.\nEtkinliğin nihai yorumlama hakkı ReelShort'a aittir.`,
    apple说明:
      'Bu etkinlik Apple Inc. tarafından desteklenmemekte veya onunla ilişkili değildir.',
    disabledTip:
      'Bu etkinlik şu anda mevcut değil. İlginiz için teşekkür ederiz!',
  },
  ja: {
    disabledTip:
      'このイベントは現在利用できません。ご関心をお寄せいただきありがとうございます！',
  },
  ko: {
    限时: '기간 한정',
    选项1: '옵션 1',
    三日免费: '3일 무료체험',
    七天vip: '<b>7</b>일 구독하면',
    顿号: ', ',
    三日赠送: '<b>3</b>일 추가 증정!',
    单位: '$',
    选项1描述: '10일 동안 모든 시리즈에 무제한 액세스',
    订阅: '지금 구독하세요',
    选项二: '옵션 2',
    折扣: '할인',
    金币: ' 코인',
    奖励金币: ' 보상 코인',
    选项2描述: '모든 유료 에피소드 잠금 해제',
    充值: '충전 ($1/3)',
    推荐视频: '혜택 받고 인기콘텐츠를 즐겨보세요',
    规则: '이벤트 안내:',
    订阅规则:
      '이벤트 기간 내 VIP 구독은 한 번만 가능합니다.\n구독 기간 종료 24시간 이전에 구독을 취소하지 않을 경우 자동 갱신되며 원 가격에 따라 요금이 부과됩니다. 3일 추가 체험권은 구독 기간 만료 후 활성화됨에 따라 수요에 따라 구독 설정을 미리 확인해주세요. 자동 갱신을 원하지 않으실 경우 기존 구독 기간내(추가 체험기간 미포함)에 구독을 취소해주셔야 합니다.\n구독은 앱스토어 주문 상태에 따라 일반적으로 구매 후 24시간 이내에 적용됩니다.\n구독 기간 종료 24시간 이전에 구독을 취소하지 않을 경우 자동으로 갱신되며 원 가격에 따라 요금이 부과됩니다.\niOS 기기에서 구독 기간 종료 24시간 이전에 ‘설정 > iTunes & App Store > Apple ID > Apple ID 보기 > 구독 > ReelShort ‘으로 이동하여 구독을 취소할 수 있습니다. (기존 구독 기간 종료 24시간 이전)',
    积分点规则:
      "이벤트 기간 내 최대 3번 충전하여 코인을 획득할 수 있습니다.\n 코인은 계정으로 직접 지급되며 '내 지갑'에서 확인 가능합니다.\n 리워드 코인은 유효 기간이 지난 후 소멸되며 콘텐츠 잠금 해제 시 일반 코인보다 먼저 사용됩니다.\n 코인은 가상 아이템으로 환불이 불가합니다.\n 이 제품에만 코인을 사용하세요.\n프로모션은 이용자 지역 및 유형에 따라 다를 수 있습니다.\n 문의사항은 Reelshort > 프로필 > 피드백 > 문의로 전달 바랍니다.\n본 이벤트의 최종 해석권은 ReelShort에 있습니다.",
    apple说明: 'This event is not sponsored by or associated with Apple Inc.',
    disabledTip:
      '이 이벤트는 현재 이용할 수 없습니다. 관심 가져주셔서 감사합니다!',
  },
  ru: {
    限时: 'Осталось',
    选项1: 'Вариант первый',
    三日免费: '+ 3 дня в подарок',
    七天vip: '<b>7</b> дней подписки',
    顿号: ', ',
    三日赠送: '+ <b>3</b> дня бесплатно',
    单位: '$',
    选项1描述: 'Неограниченный доступ ко всем сериалам на 10 дней',
    订阅: 'Подпишитесь сейчас',
    选项二: 'Вариант второй',
    折扣: 'Скидка',
    金币: ' Монеты',
    奖励金币: ' Наградные монеты',
    选项2描述: 'Откройте все платные эпизоды БЕСПЛАТНО',
    充值: 'Пополнение ($1/3)',
    推荐视频: 'Наслаждайтесь лучшими предложениями',
    规则: 'Правила:',
    订阅规则:
      'Во время мероприятия вы можете подписаться на VIP только один раз.\nПодписки автоматически продлеваются по первоначальной цене, плата списывается за 24 часа до каждого периода, если не отменено. Дополнительные 3 бесплатных VIP-дня будут активированы после окончания 7-дневной подписки. Чтобы обеспечить право на 3 бесплатных дня, управляйте настройками подписки соответствующим образом. Любые изменения в автопродлении должны быть сделаны до окончания текущего периода, чтобы избежать начисления платы за следующий период.\nПодписка активируется в течение 24 часов после покупки, ожидая одобрения от App Store.\nПодписки автоматически продлеваются по первоначальной цене, плата списывается за 24 часа до каждого периода, если не отменено.\nОтмените подписку на iOS в любое время через Настройки > iTunes & App Store > [Ваш Apple ID] > Подписки > ReelShort, за 24 часа до продления.',
    积分点规则:
      'Во время мероприятия вы можете пополнить счёт 3 раза, чтобы заработать монеты.\nВо время мероприятия вы можете подписаться на VIP только один раз.\nМонеты будут отправлены непосредственно на ваш счёт. Пожалуйста, проверьте это в разделе Мой Кошелёк.\nНаградные монеты истекают и используются в первую очередь при разблокировке контента.\nМонеты являются виртуальными предметами и не подлежат возврату.\nИспользуйте монеты только для этого продукта.\nАкция варьируется в зависимости от географического региона и типа пользователя.\nЕсли у вас есть вопросы, пожалуйста, перейдите в Профиль > Обратная связь > Свяжитесь с нами.\nПраво окончательной интерпретации мероприятия принадлежит ReelShort.',
    apple说明: 'Это событие не спонсируется и не связано с Apple Inc.',
    disabledTip: 'Это событие сейчас недоступно. Спасибо за ваш интерес!',
  },
  'zh-TW': {
    限时: '倒計時',
    选项1: '選項一',
    三日免费: '加贈3天',
    七天vip: '訂閱<b>7</b>天',
    顿号: ', ',
    三日赠送: 'VIP免費送<b>3</b>天',
    单位: '$',
    选项1描述: '全站劇集10天免費觀看',
    订阅: '立即訂閱',
    选项二: '選項二',
    折扣: '折',
    金币: ' 金幣',
    奖励金币: ' 贈幣',
    选项2描述: '解鎖付費劇集',
    充值: '充值 ($1/3)',
    推荐视频: '搶折扣解锁精彩好劇',
    规则: '活動規則:',
    订阅规则:
      '在活動期間，你只能訂閱一次VIP。\n訂閱將在每個週期開始前24小時按原價自動續訂，除非取消。額外的3天免費VIP將在7天訂閱期滿後啟動。為了確保符合領取這3天免費的資格，請適當管理您的訂閱設置。取消續訂必須在當前訂閱到期前至少24小時進行，以避免下一個週期的扣費。\n在訂閱期間內，你可以免費觀看本平台所有劇集內容。\n你的Apple iTunes帳戶將在到期前24小時內扣費，扣費成功後訂閱期將順延另一個訂閱週期。\n如需取消訂閱續訂，請在當前訂閱到期前至少24小時在iTunes/Apple ID設定中關閉自動續訂功能。到期前最後24小時內取消仍將收取訂閱費。',
    积分点规则:
      ' 在活動期間，你可以充值三次來賺取金幣。\n金幣將直接發送到你的帳戶，請在【我的錢包】中查收。\n贈幣有使用期限，並在解鎖劇集時優先使用。\n金幣是虛擬物品，不可退款。\n金幣僅限用於本產品。\n活動商品和價格根據地理區域和用戶類型有所不同。\n如有任何疑問，請透過個人中心-反饋聯繫我們的客服人員。\n本次活動最終解釋權歸ReelShort所有。',
    apple说明: '本活動與設備製造商 Apple Inc 無關',
    disabledTip: '非常抱歉，目前不在活動有效期內，感謝你的關注！',
  },
}

export const i18n = (key: string, ...args: (string | number)[]): string => {
  const localData = getLocalUrlParams()
  const lang = localData.lang || 'pt'
  let translatedText = text[lang]?.[key] || text.en[key]

  // 替换特殊表示符 $1, $2, ...
  args.forEach((arg, index) => {
    const placeholder = `$${index + 1}`
    translatedText = translatedText?.replace(placeholder, arg)
  })

  return translatedText
}
